import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <main className="min-h-screen bg-dark-bg selection:bg-primary/30">
      <Header />
      
      {/* Premium Header */}
      <section className="pt-40 pb-20 relative overflow-hidden border-b border-dark-surface2 bg-dark-surface1/50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-surface2 border border-dark-surface3 text-sm text-text-secondary mb-6 hover:bg-dark-surface3 transition-colors cursor-default">
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Legal & Compliance
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 tracking-tight">Privacy Policy</h1>
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
                  <a href="#information-we-collect" className="block text-sm font-medium text-text-secondary hover:text-primary transition-colors group flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full border border-text-secondary group-hover:border-primary group-hover:bg-primary transition-all" />
                    1. Information We Collect
                  </a>
                  <a href="#use-of-data" className="block text-sm font-medium text-text-secondary hover:text-primary transition-colors group flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full border border-text-secondary group-hover:border-primary group-hover:bg-primary transition-all" />
                    2. Use of Data
                  </a>
                  <a href="#data-security" className="block text-sm font-medium text-text-secondary hover:text-primary transition-colors group flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full border border-text-secondary group-hover:border-primary group-hover:bg-primary transition-all" />
                    3. Data Security
                  </a>
                  <a href="#contact-us" className="block text-sm font-medium text-text-secondary hover:text-primary transition-colors group flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full border border-text-secondary group-hover:border-primary group-hover:bg-primary transition-all" />
                    4. Contact Us
                  </a>
                </nav>
              </div>
            </aside>

            {/* Main Content Areas */}
            <div className="flex-1 max-w-4xl space-y-16">
              
              <section id="information-we-collect" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-text-primary mb-6">1. Information We Collect</h2>
                <div className="bg-dark-surface1/50 border border-dark-surface2 p-8 md:p-10 rounded-3xl text-lg text-text-secondary leading-relaxed">
                  <p className="mb-6">
                    Reelr (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the Reelr platform. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                  </p>
                  <p className="mb-4 text-text-primary font-medium">We collect several different types of information to provide and improve our Service:</p>
                  <ul className="space-y-4 mt-4">
                    <li className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p><strong className="text-text-primary block mb-1">Account & Contact details</strong> Email address, basic contact information, and billing details securely handled by Stripe.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p><strong className="text-text-primary block mb-1">Usage Data</strong> Analytics tracking showing how you interact with our platform to help us troubleshoot and improve experiences.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p><strong className="text-text-primary block mb-1">Authentication Tokens</strong> Secure OAuth tokens required to publish generated videos directly to your connected social channels (TikTok, YouTube Shorts, Instagram) with your explicit consent.</p>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="use-of-data" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-text-primary mb-6">2. Use of Data</h2>
                <div className="bg-dark-surface1/50 border border-dark-surface2 p-8 md:p-10 rounded-3xl text-lg text-text-secondary leading-relaxed">
                  <p className="mb-6 text-text-primary font-medium">Reelr uses the collected data for various indispensable purposes:</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-dark-bg border border-dark-surface2 p-5 rounded-xl">
                      <h4 className="text-text-primary font-bold mb-2">Service Maintenance</h4>
                      <p className="text-sm">To provide and maintain our core generation and distribution tools reliably.</p>
                    </div>
                    <div className="bg-dark-bg border border-dark-surface2 p-5 rounded-xl">
                      <h4 className="text-text-primary font-bold mb-2">Communications</h4>
                      <p className="text-sm">To notify you about critical changes, outages, and updates to our Service.</p>
                    </div>
                    <div className="bg-dark-bg border border-dark-surface2 p-5 rounded-xl">
                      <h4 className="text-text-primary font-bold mb-2">Customer Care</h4>
                      <p className="text-sm">To rapidly diagnose specific bugs and deliver responsive customer support.</p>
                    </div>
                    <div className="bg-dark-bg border border-dark-surface2 p-5 rounded-xl">
                      <h4 className="text-text-primary font-bold mb-2">Analytics</h4>
                      <p className="text-sm">To accumulate aggregate analysis or valuable information to improve the Service continually.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="data-security" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-text-primary mb-6">3. Data Security</h2>
                <div className="bg-dark-surface1/50 border border-dark-surface2 p-8 md:p-10 rounded-3xl text-lg text-text-secondary leading-relaxed relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl" />
                  <p>
                    The security of your data is paramount to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means, modern encryption standards, and enterprise-grade infrastructure to protect your Personal Data, we cannot guarantee its absolute security against all unforeseen threats.
                  </p>
                </div>
              </section>

              <section id="contact-us" className="scroll-mt-32 pb-16">
                <h2 className="text-3xl font-bold text-text-primary mb-6">4. Contact Us</h2>
                <div className="bg-dark-surface1/50 border border-dark-surface2 p-8 md:p-10 rounded-3xl text-lg text-text-secondary leading-relaxed flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-text-primary font-bold text-xl mb-2">Questions regarding your privacy?</h3>
                    <p>Our designated privacy team is here to assist you.</p>
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
