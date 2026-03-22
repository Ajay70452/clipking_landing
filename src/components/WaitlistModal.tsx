'use client'

import { useState, useEffect } from 'react'

export default function WaitlistModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#waitlist') {
        setIsOpen(true)
      } else {
        setIsOpen(false)
        setIsSubmitted(false)
        setEmail('')
      }
    }

    // Check initial hash on load
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const closeModal = () => {
    window.location.hash = ''
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Simulate API call for waitlist
      setIsSubmitted(true)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-dark-bg/80 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-dark-surface1 border border-dark-surface3 rounded-3xl p-8 shadow-2xl animate-fade-in-up">
        <button 
          onClick={closeModal}
          className="absolute top-6 right-6 text-text-muted hover:text-text-primary transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">You&apos;re on the list!</h3>
            <p className="text-text-secondary">
              We are happy to enroll you on the wait list and you will be notified soon when we launch.
            </p>
            <button 
              onClick={closeModal}
              className="mt-8 px-6 py-3 bg-dark-surface3 text-text-primary font-medium rounded-full hover:bg-dark-surface2 transition-colors"
            >
              Back to Site
            </button>
          </div>
        ) : (
          <div>
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-dark-bg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-2">Join the Waitlist</h3>
            <p className="text-text-secondary mb-8">
              Get early access to Reelr&apos;s distribution and optimization platform. Priority spots are limited.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Work Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-surface2 border border-dark-surface3 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="name@company.com"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-primary text-dark-bg font-semibold rounded-xl hover:bg-primary-hover transition-colors"
              >
                Secure My Spot
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
