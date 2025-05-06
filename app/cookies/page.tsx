export default function CookiePolicy() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <p className="text-gray-400 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="prose prose-invert max-w-none">
        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small text files that are stored on your computer or mobile device when you visit a website. They
          are widely used to make websites work more efficiently and provide information to the website owners.
        </p>

        <h2>2. How We Use Cookies</h2>
        <p>We use cookies for various purposes, including:</p>
        <ul>
          <li>Essential cookies: These are necessary for the website to function properly.</li>
          <li>
            Analytical/performance cookies: These allow us to recognize and count the number of visitors and see how
            visitors move around our website.
          </li>
          <li>Functionality cookies: These are used to recognize you when you return to our website.</li>
          <li>
            Targeting cookies: These record your visit to our website, the pages you have visited, and the links you
            have followed.
          </li>
        </ul>

        <h2>3. Types of Cookies We Use</h2>
        <p>
          We use both session cookies, which expire when you close your browser, and persistent cookies, which remain on
          your device for a set period.
        </p>

        <h2>4. Third-Party Cookies</h2>
        <p>
          We also use third-party cookies from services like Google Analytics, Facebook, and other advertising partners.
        </p>

        <h2>5. Managing Cookies</h2>
        <p>
          Most web browsers allow you to control cookies through their settings. You can usually find these settings in
          the "options" or "preferences" menu of your browser.
        </p>

        <h2>6. Changes to This Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new
          Cookie Policy on this page.
        </p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions about this Cookie Policy, please contact us at privacy@clickmorph.com.</p>
      </div>
    </div>
  )
}
