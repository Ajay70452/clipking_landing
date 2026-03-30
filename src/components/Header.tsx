'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-surface1 border-b border-dark-surface2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <span className="text-2xl font-bold text-primary">Reelr</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-text-secondary hover:text-text-primary transition-colors">
              About Us
            </Link>
            <a href="/#features" className="text-text-secondary hover:text-text-primary transition-colors">
              Features
            </a>
            <a href="/#pricing" className="text-text-secondary hover:text-text-primary transition-colors">
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="/#waitlist" className="px-4 py-2 bg-primary text-dark-bg font-medium rounded-full hover:bg-primary-hover transition-colors inline-block">
              Start Growing Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-surface2">
            <nav className="flex flex-col gap-4">
              <Link href="/about" className="text-text-primary hover:text-primary transition-colors">About Us</Link>
              <a href="/#features" className="text-text-primary hover:text-primary transition-colors">Features</a>
              <a href="/#pricing" className="text-text-primary hover:text-primary transition-colors">Pricing</a>
              <div className="flex flex-col gap-3 pt-4 border-t border-dark-surface2">
                <a href="/#waitlist" className="px-4 py-2 bg-primary text-dark-bg font-medium rounded-full hover:bg-primary-hover transition-colors text-center inline-block">
                  Start Growing Now
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
