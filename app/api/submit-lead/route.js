import { NextResponse } from 'next/server';
import Airtable from 'airtable';

// Initialize Airtable with proper error handling
let base;
try {
  if (!process.env.AIRTABLE_API_KEY) {
    throw new Error('AIRTABLE_API_KEY is not defined');
  }
  if (!process.env.AIRTABLE_BASE_ID) {
    throw new Error('AIRTABLE_BASE_ID is not defined');
  }
  if (!process.env.AIRTABLE_TABLE_NAME) {
    throw new Error('AIRTABLE_TABLE_NAME is not defined');
  }
  
  base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);
} catch (error) {
  console.error('Airtable initialization error:', error);
}

export async function POST(req) {
  if (!base) {
    return NextResponse.json(
      { error: 'Airtable configuration is missing' },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { name, businessModel, companyName, email, phoneNumber, question } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const record = await base(process.env.AIRTABLE_TABLE_NAME).create([
      {
        fields: {
          Name: name,
          "Business Model": businessModel || '',
          "Company Name": companyName || '',
          Email: email,
          "Phone Number": phoneNumber || '',
          Question: question || '',
        },
      },
    ]);

    return NextResponse.json({ 
      message: 'Success',
      record: record[0].id 
    }, { status: 200 });
  } catch (error) {
    console.error("Airtable API Error:", error);
    
    // More detailed error response
    return NextResponse.json({ 
      error: error.message,
      details: error.error || 'Unknown error',
      status: error.statusCode || 500
    }, { status: error.statusCode || 500 });
  }
}