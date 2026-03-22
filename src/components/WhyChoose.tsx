const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Topic Intelligence',
    description:
      'Our system learns what topics trend, what niches convert, and what formats perform based on platform analytics and viral data. Build a proprietary data moat for your business.',
    bgColor: 'bg-primary',
    iconColor: 'text-dark-bg',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Optimization Engine',
    description:
      "AI continuously A/B tests hooks, length, formats, timing, and styles. Automatically scale what works and cut what doesn't. This is the real gold.",
    bgColor: 'bg-primary',
    iconColor: 'text-dark-bg',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Video Understanding Pipeline',
    description:
      "We use specialized speech-to-text and vision-language models to extract hook text, topics, structure, and emotions. Raw videos become structured, actionable data.",
    bgColor: 'bg-primary',
    iconColor: 'text-dark-bg',
  },
]

export default function WhyChoose() {
  return (
    <section className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-16">
          Why Choose Reelr?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-dark-surface2 border border-dark-surface3 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                <div className={feature.iconColor}>{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#waitlist" className="px-8 py-4 bg-primary text-dark-bg font-semibold rounded-full hover:bg-primary-hover transition-colors inline-block">
            Start Growing Now
          </a>
        </div>
      </div>
    </section>
  )
}
