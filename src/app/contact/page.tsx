import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <main className="min-h-screen bg-dark-bg selection:bg-primary/30">
      <Header />
      
      <section className="pt-40 pb-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 tracking-tight">
              Get in touch
            </h1>
            <p className="text-xl text-text-secondary">
              Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
            
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-dark-surface1 border border-dark-surface2 rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-dark-surface2 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Customer Support</h3>
                <p className="text-text-secondary mb-4">Need help with your account or have a technical issue? We are here to help.</p>
                <a href="mailto:ajay@tryreelr.com" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                  ajay@tryreelr.com
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              <div className="bg-dark-surface1 border border-dark-surface2 rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-dark-surface2 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Sales & Partnerships</h3>
                <p className="text-text-secondary mb-4">Interested in Enterprise plans, custom integrations, or partnerships?</p>
                <a href="mailto:ajay@tryreelr.com" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                  ajay@tryreelr.com
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-dark-surface1 border border-dark-surface2 rounded-2xl p-8 relative">
              <h2 className="text-2xl font-bold text-text-primary mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-secondary">First Name</label>
                    <input type="text" className="w-full bg-dark-bg border border-dark-surface2 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-secondary">Last Name</label>
                    <input type="text" className="w-full bg-dark-bg border border-dark-surface2 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary">Email Address</label>
                  <input type="email" className="w-full bg-dark-bg border border-dark-surface2 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-primary transition-colors" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary">Message</label>
                  <textarea rows={4} className="w-full bg-dark-bg border border-dark-surface2 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can we help you?" />
                </div>

                <button type="button" className="w-full py-4 bg-primary text-dark-bg font-bold rounded-xl hover:bg-primary-hover transition-colors">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
