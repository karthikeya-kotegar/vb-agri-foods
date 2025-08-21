import Header from "@/components/header"
import HeroCarousel from "@/components/hero-carousel"
import ProductsSection from "@/components/products-section"
import AboutSection from "@/components/about-section"
import EnquiryForm from "@/components/enquiry-form"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      <ProductsSection />
      <AboutSection />
      <EnquiryForm />
      <Footer />
    </main>
  )
}
