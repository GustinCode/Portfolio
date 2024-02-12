import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Aboutsection from './components/AboutSection.jsx'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black " >
      {/* if you want to add a section with a diferent color [#070707] */}
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <Aboutsection />
      </div>
    </main>
  )
}
