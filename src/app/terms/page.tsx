import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Terms() {
  return (
    <main className="min-h-screen bg-dark-bg selection:bg-primary/30">
      <Header />
      
      {/* Premium Header */}
      <section className="pt-40 pb-20 relative overflow-hidden border-b border-dark-surface2 bg-dark-surface1/50">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-surface2 border border-dark-surface3 text-sm text-text-secondary mb-6 hover:bg-dark-surface3 transition-colors cursor-default">
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
            </svg>
            Terms & Conditions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 tracking-tight">Terms of Service</h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Content with Sidebar Layout */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 relative">
            
            {/* Sticky Sidebar Navigation */}
            <aside className="w-full lg:w-72 shrink-0">
              <div className="sticky top-32 p-6 rounded-2xl bg-dark-surface1 border border-dark-surface2">
                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-6">Contents</h3>
                <nav className="space-y-4">
                  <a href="#acceptance-of-terms" className="block text-sm font-medium text-text-secondary hover:text-primary transition-colors group flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full border border-text-secondary group-hover:border-primary group-hover:bg-primary transition-all" />
                    1. Acceptance
                  </a>
                  <a href="#description-of-service" className="block text-sm font-medium text-text-secondary hover:text-primary transition-colors group flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full border border-text-secondary group-hover:border-primary group-hover:bg-primary transition-all" />
                    2. Service Description
                  </a>
                  <a href="#user-responsibilities" className="block text-sm font-medium text-text-secondary hover:text-primary transition-colors group flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full border border-text-secondary group-hover:border-primary group-hover:bg-primary transition-all" />
                    3. User Responsibilities
                  </a>
                  <a href="#limitation-of-liability" className="block text-sm font-medium text-text-secondary hover:text-primary transition-colors group flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full border border-text-secondary group-hover:border-primary group-hover:bg-primary transition-all" />
                    4. Limitation of Liability
                  </a>
                  <a href="#contact-us" className="block text-sm font-medium text-text-secondary hover:text-primary transition-colors group flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full border border-text-secondary group-hover:border-primary group-hover:bg-primary transition-all" />
                    5. Contact
                  </a>
                </nav>
              </div>
            </aside>

            {/* Main Content Areas */}
            <div className="flex-1 max-w-4xl space-y-16">
              
              <section id="acceptance-of-terms" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-text-primary mb-6">1. Acceptance of Terms</h2>
                <div className="bg-dark-surface1/50 border border-dark-surface2 p-8 md:p-10 rounded-3xl text-lg text-text-secondary leading-relaxed">
                  <p>
                    By accessing and using the Reelr platform (&quot;Service&quot;), you agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and Reelr. If you disagree with any part of the terms, then you may not access the Service and should discontinue use immediately.
                  </p>
                </div>
              </section>

              <section id="description-of-service" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-text-primary mb-6">2. Description of Service</h2>
                <div className="bg-dark-surface1/50 border border-dark-surface2 p-8 md:p-10 rounded-3xl text-lg text-text-secondary leading-relaxed">
                  <p>
                    Reelr provides an enterprise-grade, AI-powered video distribution and optimization platform. The Service includes propriety software, APIs, and interfaces used to generate, modify, format, and push short-form videos to third-party social media platforms (e.g., TikTok, Instagram, YouTube) on the user&apos;s behalf.
                  </p>
                  <p className="mt-4">
                    Reelr reserves the right to modify, suspend, or discontinue any part of the Service at any time without prior notice, provided such changes do not materially degrade the core functionality promised in your active subscription plan.
                  </p>
                </div>
              </section>

              <section id="user-responsibilities" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-text-primary mb-6">3. User Responsibilities</h2>
                <div className="bg-dark-surface1/50 border border-dark-surface2 p-8 md:p-10 rounded-3xl text-lg text-text-secondary leading-relaxed relative overflow-hidden">
                  <p className="mb-6">
                    As an active user of maintaining an account on Reelr, you are subject to the following ongoing responsibilities:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-bg border border-dark-surface2">
                      <div className="text-primary mt-1">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-text-primary font-bold">Account Security</h4>
                        <p className="text-sm mt-1">You must safeguard your login credentials. You are entirely responsible for all activity mapping to your account access.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-bg border border-dark-surface2">
                      <div className="text-primary mt-1">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-text-primary font-bold">Compliance</h4>
                        <p className="text-sm mt-1">You must ensure that all content uploaded or distributed through Reelr explicitly complies with the independent terms of service of respective third-party platforms.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="limitation-of-liability" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-text-primary mb-6">4. Limitation of Liability</h2>
                <div className="bg-dark-surface1/50 border border-dark-surface2 p-8 md:p-10 rounded-3xl text-lg text-text-secondary leading-relaxed border-l-4 border-l-red-500/50">
                  <p>
                    In no event shall Reelr, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
                  <p className="mt-4">
                    This includes outcomes resulting from your access to or use of (or inability to access or use) the Service, any conduct or content of any third party on the Service, or unauthorized access to or alteration of your transmissions or content.
                  </p>
                </div>
              </section>

              <section id="contact-us" className="scroll-mt-32 pb-16">
                <h2 className="text-3xl font-bold text-text-primary mb-6">5. Contact Us</h2>
                <div className="bg-dark-surface1/50 border border-dark-surface2 p-8 md:p-10 rounded-3xl text-lg text-text-secondary leading-relaxed flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-text-primary font-bold text-xl mb-2">Notice anything missing?</h3>
                    <p>Our dedicated legal team welcomes your feedback.</p>
                  </div>
                  <a href="mailto:ajay@tryreelr.com" className="px-6 py-3 bg-dark-bg border border-dark-surface3 hover:border-primary text-text-primary font-medium rounded-xl transition-colors whitespace-nowrap">
                    ajay@tryreelr.com
                  </a>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
