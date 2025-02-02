import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection.jsx'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"
import AchievementSection from './components/AchievementSection'

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col bg-black " >
      {/* if you want to add a section with a diferent color [#070707] */}
      <Analytics />
      <Navbar />
      <div className="container mt-20 mx-auto px-12 py-4 mb-8">
        <HeroSection />
        <AchievementSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
