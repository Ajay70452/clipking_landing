import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen bg-dark-bg selection:bg-primary/30">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-surface1 border border-dark-surface2 text-sm text-text-secondary mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Empowering the creator economy
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight">
            We are building the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">engine for video growth.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Reelr is the all-in-one AI co-pilot that helps businesses and creators automatically generate, optimize, and distribute short-form video at scale.
          </p>
        </div>
      </section>


      {/* Story / Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  We built Reelr because we experienced the pain of manual video formatting, A/B testing, and cross-platform posting firsthand. The tools available were either too complex, fragmented, or lacked the intelligent automation needed to truly scale a brand&apos;s presence.
                </p>
                <p>
                  Today, we are a fast-growing, globally distributed team of engineers, creators, and AI researchers. We believe that professional video distribution shouldn&apos;t require a massive agency budget—it should be accessible to anyone with a great product to share.
                </p>
              </div>
            </div>
            {/* Animated Visual */}
            <div className="relative flex items-center justify-center aspect-square">
              {/* Ambient glow */}
              <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />

              {/* Orbit ring 1 */}
              <div className="absolute w-72 h-72 rounded-full border border-primary/20"
                style={{ animation: 'spin 12s linear infinite' }}>
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_2px_#C8FF4D]" />
              </div>

              {/* Orbit ring 2 */}
              <div className="absolute w-52 h-52 rounded-full border border-primary/15"
                style={{ animation: 'spin 8s linear infinite reverse' }}>
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary/80 shadow-[0_0_6px_2px_#C8FF4D]" />
              </div>

              {/* Orbit ring 3 */}
              <div className="absolute w-36 h-36 rounded-full border border-primary/10"
                style={{ animation: 'spin 5s linear infinite' }}>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/60 shadow-[0_0_4px_1px_#C8FF4D]" />
              </div>

              {/* Core */}
              <div className="relative w-20 h-20 rounded-full bg-dark-surface2 border border-primary/30 flex items-center justify-center shadow-[0_0_30px_4px_rgba(200,255,77,0.15)]"
                style={{ animation: 'pulse-core 3s ease-in-out infinite' }}>
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <style>{`
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                @keyframes pulse-core {
                  0%, 100% { box-shadow: 0 0 30px 4px rgba(200,255,77,0.15); }
                  50% { box-shadow: 0 0 50px 10px rgba(200,255,77,0.3); }
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 border-t border-dark-surface2 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Meet the Founders</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We&apos;re a dedicated team combining deep expertise in software engineering, applied AI, and digital distribution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Ajay */}
            <div className="bg-dark-surface1 border border-dark-surface2 rounded-3xl p-8 hover:border-primary/50 transition-colors group">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative bg-dark-surface2">
                <img src="/team/ajay.jpg" alt="Ajay - Co-founder" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-2xl font-bold text-text-primary">Ajay</h3>
                <a href="https://www.linkedin.com/in/ajay-raval-85a8551b7/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors" aria-label="Ajay's LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <div className="text-primary font-medium mb-4">Co-founder & Product</div>
              <p className="text-text-secondary leading-relaxed">
                Ajay leads product development and engineering at Reelr. As a repeat founder with comprehensive startup experience, he has a proven track record of bringing early-stage ideas to market and scaling them. He understands exactly what it takes to build resilient AI systems that solve real problems for creators.
              </p>
            </div>

            {/* Rajesh */}
            <div className="bg-dark-surface1 border border-dark-surface2 rounded-3xl p-8 hover:border-primary/50 transition-colors group">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative bg-dark-surface2">
                <img src="/team/rajesh.jpg" alt="Rajesh - Co-founder" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-2xl font-bold text-text-primary">Rajesh</h3>
                <a href="https://www.linkedin.com/in/rajesh-patel-37a825375/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors" aria-label="Rajesh's LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <div className="text-primary font-medium mb-4">Co-founder & Marketing</div>
              <p className="text-text-secondary leading-relaxed">
                Rajesh spearheads the marketing, distribution, and overall growth strategy. With years of hands-on experience in digital marketing and audience building, he knows exactly how social algorithms work and how to position Reelr to get it into the hands of the creators who need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-6">Ready to transform your distribution?</h2>
          <p className="text-xl text-text-secondary mb-10">
            Join thousands of creators who are already using Reelr to grow their audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#waitlist" className="px-8 py-4 bg-primary text-dark-bg font-semibold rounded-full hover:bg-primary-hover transition-all transform hover:scale-105">
              Start Growing Now
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-dark-surface1 text-text-primary font-semibold rounded-full border border-dark-surface2 hover:bg-dark-surface2 transition-all">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
