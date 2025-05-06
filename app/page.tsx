import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Challenges from "@/components/challenges"
import UniqueFeatures from "@/components/unique-features"
import FAQ from "@/components/faq"
import AnimatedForm from "@/components/animated-form"
import TrustBadges from "@/components/trust-badges"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"

export default function Home() {
  return (
    <div className="min-h-screen bg-black bg-grid-pattern">
      <Header />
      <main className="pt-[100px]">
        <Hero />
        <Services />
        <Testimonials />
        <Challenges />
        <UniqueFeatures />
        <FAQ />
        <TrustBadges />
        <AnimatedForm />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}
