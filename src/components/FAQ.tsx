'use client'

import { useState } from 'react'

const tabs = ['General', 'Pricing', 'Application', 'Other']

const faqData: Record<string, { question: string; answer: string }[]> = {
  General: [
    {
      question: 'What is Reelr?',
      answer:
        "Reelr is a comprehensive video distribution and optimization platform. We don't just generate videos—we use Topic Intelligence to find winning niches, generate high-performing variations, publish them across all major platforms, and automatically A/B test hooks and formats to drive real business growth.",
    },
    {
      question: 'How is Reelr different from standard AI video generators?',
      answer:
        'Standard generators just create videos. Reelr is an end-to-end growth engine. Our Optimization Engine (Layer 4) automatically tests hooks, lengths, and styles at scale. We also use a proprietary Video Understanding Pipeline to extract structural data from successful videos, building a unique data moat for your account.',
    },
    {
      question: 'What is a Series in Reelr?',
      answer:
        'A Series is an automated content pipeline. You define the broad parameters (like targeting "B2B SaaS Founders"), and Reelr handles the entire lifecycle: discovering trending sub-topics, generating video variations, scheduling publication, and optimizing the mix based on real-time performance data.',
    },
    {
      question: 'Am I the owner of the videos?',
      answer:
        'Yes, you retain full ownership of all content generated and distributed through the platform. This is fully white-labeled for use by creators, agencies, and enterprise marketing teams.',
    },
    {
      question: 'Can I generate and distribute in other languages?',
      answer:
        "Yes! Our models support localization and distribution in most major global languages, allowing you to seamlessly scale your brand's reach internationally.",
    },
  ],
  Pricing: [
    {
      question: 'What is included in the Agency tier?',
      answer:
        'The Agency tier ($299-$999/mo) is built for teams managing multiple clients. It includes advanced video generation, agency-level publishing tools, access to our Layer 4 Optimization Engine for A/B testing, and an advanced analytics dashboard for client reporting.',
    },
    {
      question: 'Who is the Enterprise plan for?',
      answer:
        'Our Enterprise plan ($2k-$10k/mo) is designed for large brands and media companies aiming to dominate their market. It provides custom video generation models, full API access, dedicated support, and bespoke implementations of our Topic Intelligence data moat.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer:
        'Yes, you can easily scale your plan up or down as your video distribution needs change. Billing is prorated automatically.',
    },
  ],
  Application: [
    {
      question: 'How does the Optimization Engine work?',
      answer:
        "Our Optimization Engine continuously A/B tests different elements of your videos—like the first 3-second hook, the visual style, and the overall length. It learns what drives engagement on each specific platform (TikTok, Shorts, Reels) and automatically scales the winning variations.",
    },
    {
      question: 'What data does Topic Intelligence provide?',
      answer:
        'Topic Intelligence analyzes platform algorithms and viral trends to predict what topics will convert best for your specific niche. It removes the guesswork from content strategy by telling you exactly what to create before you even start producing.',
    },
  ],
  Other: [
    {
      question: 'Do you offer custom integrations?',
      answer:
        'Yes, custom API integrations and data pipeline setups are available for our Enterprise customers to connect Reelr with your existing marketing stack.',
    },
    {
      question: 'Do you offer customer support?',
      answer:
        'Yes, we offer comprehensive support. Creator and Agency tiers receive priority email and chat support, while Enterprise users get a dedicated account manager and Slack connect channel.',
    },
  ],
}

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('General')

  return (
    <section className="py-20 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 md:mb-0">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our{' '}
            <a href="#" className="text-primary hover:underline">
              customer support
            </a>{' '}
            team.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-dark-surface2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-medium transition-colors relative ${
                activeTab === tab
                  ? 'text-primary'
                  : 'text-text-muted hover:text-primary'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqData[activeTab]?.map((faq, index) => (
            <div
              key={index}
              className="bg-dark-surface2 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-text-primary mb-3">
                {faq.question}
              </h3>
              <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
