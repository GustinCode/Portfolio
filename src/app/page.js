import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black " >
      {/* if you want to add a section with a diferent color [#070707] */}
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  )
}
