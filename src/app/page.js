import Image from 'next/image'
import HeroSection from './components/HeroSection'
import navbar from './components/navbar'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black " >
      {/* if you want to add a section with a diferent color [#070707] */}
      <navbar />
      <div class="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  )
}
