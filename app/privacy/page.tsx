export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-400 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="prose prose-invert max-w-none">
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy explains how ClickMorph ("we", "us", or "our") collects, uses, and discloses your
          information when you use our website and services.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We collect information you provide directly to us, information we collect automatically when you use our
          services, and information from third-party sources.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services, to communicate with you, and
          to comply with legal obligations.
        </p>

        <h2>4. Sharing of Information</h2>
        <p>We may share your information with service providers, business partners, and as required by law.</p>

        <h2>5. Your Rights and Choices</h2>
        <p>
          You have certain rights regarding your personal information, including the right to access, correct, or delete
          your personal information.
        </p>

        <h2>6. Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information.</p>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page.
        </p>

        <h2>8. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at privacy@clickmorph.com.</p>
      </div>
    </div>
  )
}
