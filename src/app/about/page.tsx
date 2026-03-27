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

      {/* Stats Section */}
      <section className="py-16 border-y border-dark-surface2 bg-dark-surface1/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-text-primary mb-2">10M+</div>
              <div className="text-text-muted text-sm uppercase tracking-wider">Videos Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-text-primary mb-2">50k+</div>
              <div className="text-text-muted text-sm uppercase tracking-wider">Active Creators</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-text-primary mb-2">99.9%</div>
              <div className="text-text-muted text-sm uppercase tracking-wider">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-text-primary mb-2">24/7</div>
              <div className="text-text-muted text-sm uppercase tracking-wider">Global Support</div>
            </div>
          </div>
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
            {/* Abstract Graphic / Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-dark-surface1 border border-dark-surface2 rounded-3xl p-8 aspect-square flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-dark-surface2 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-dark-surface2 text-xs font-medium text-text-primary">
                    Since 2024
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">Innovation First</h3>
                  <p className="text-text-secondary">Continuously pushing the boundaries of generative AI and video processing technologies.</p>
                </div>
              </div>
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
              <h3 className="text-2xl font-bold text-text-primary mb-1">Ajay</h3>
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
              <h3 className="text-2xl font-bold text-text-primary mb-1">Rajesh</h3>
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
