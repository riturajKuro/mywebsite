import Link from "next/link"

export default function Sitemap() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8">Sitemap</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Main Pages</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-purple-500 hover:text-purple-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-purple-500 hover:text-purple-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#testimonials" className="text-purple-500 hover:text-purple-400">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/#challenges" className="text-purple-500 hover:text-purple-400">
                Challenges
              </Link>
            </li>
            <li>
              <Link href="/#unique-features" className="text-purple-500 hover:text-purple-400">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="text-purple-500 hover:text-purple-400">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/#cta" className="text-purple-500 hover:text-purple-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Legal Pages</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="text-purple-500 hover:text-purple-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-purple-500 hover:text-purple-400">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-purple-500 hover:text-purple-400">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/sitemap" className="text-purple-500 hover:text-purple-400">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Resources</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-purple-500 hover:text-purple-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="text-purple-500 hover:text-purple-400">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="#" className="text-purple-500 hover:text-purple-400">
                Resources
              </Link>
            </li>
            <li>
              <Link href="#" className="text-purple-500 hover:text-purple-400">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
