import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection.jsx'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'
import Fotter from './components/Fotter'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black " >
      {/* if you want to add a section with a diferent color [#070707] */}
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 mb-8">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Fotter />
    </main>
  )
}
