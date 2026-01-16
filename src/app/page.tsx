import Header from '@/components/Header'
import Hero from '@/components/Hero'
import VideoGrid from '@/components/VideoGrid'
import HowItWorks from '@/components/HowItWorks'
import WhyChoose from '@/components/WhyChoose'
import EasyVideos from '@/components/EasyVideos'
import AITools from '@/components/AITools'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <VideoGrid />
      <HowItWorks />
      <WhyChoose />
      <EasyVideos />
      <AITools />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
