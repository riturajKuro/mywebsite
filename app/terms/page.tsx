export default function TermsOfService() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-gray-400 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="prose prose-invert max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using ClickMorph's website and services, you agree to be bound by these Terms of Service.</p>

        <h2>2. Description of Services</h2>
        <p>ClickMorph provides marketing automation and AI-powered lead generation services to businesses.</p>

        <h2>3. User Accounts</h2>
        <p>
          You may need to create an account to use certain features of our services. You are responsible for maintaining
          the confidentiality of your account credentials.
        </p>

        <h2>4. User Content</h2>
        <p>
          You retain ownership of any content you submit to our services, but you grant us a license to use, modify, and
          display that content in connection with our services.
        </p>

        <h2>5. Prohibited Conduct</h2>
        <p>
          You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair
          our services.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>Our services and content are protected by copyright, trademark, and other intellectual property laws.</p>

        <h2>7. Termination</h2>
        <p>
          We may terminate or suspend your access to our services at any time, without prior notice or liability, for
          any reason.
        </p>

        <h2>8. Disclaimer of Warranties</h2>
        <p>Our services are provided "as is" without any warranties, express or implied.</p>

        <h2>9. Limitation of Liability</h2>
        <p>
          We will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of
          or relating to your use of our services.
        </p>

        <h2>10. Changes to These Terms</h2>
        <p>
          We may update these Terms of Service from time to time. We will notify you of any changes by posting the new
          Terms on this page.
        </p>

        <h2>11. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at legal@clickmorph.com.</p>
      </div>
    </div>
  )
}
