import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CoverageAndFeatures from './components/CoverageAndFeatures'
import MenuSection from './components/MenuSection'
import ExperienceSection from './components/ExperienceSection'
import CoverageRatesSection from './components/CoverageRatesSection'
import TestimonialsSection from './components/TestimonialsSection'
import BookingSection from './components/BookingSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <CoverageAndFeatures />
        <MenuSection />
        <ExperienceSection />
        <TestimonialsSection />
        <CoverageRatesSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
