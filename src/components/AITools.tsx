const tools = [
  {
    title: 'Topic Intelligence',
    description: 'Analyze viral data to find winning topics and format opportunities.',
    preview: (
      <div className="relative h-40 overflow-hidden rounded-xl bg-dark-surface1 border border-dark-surface3 p-4 flex flex-col justify-between group-hover:border-primary/50 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-text-primary">Scanning Trends...</span>
          </div>
          <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">+94% match</span>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-full bg-dark-surface3 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-3/4 rounded-full" />
          </div>
          <div className="h-2 w-full bg-dark-surface3 rounded-full overflow-hidden">
            <div className="h-full bg-primary/50 w-1/2 rounded-full" />
          </div>
          <div className="h-2 w-full bg-dark-surface3 rounded-full overflow-hidden">
            <div className="h-full bg-primary/30 w-1/3 rounded-full" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Generate Variations',
    description: 'Auto-generate multiple AI variations to test different hooks and styles.',
    preview: (
      <div className="relative h-40 overflow-hidden rounded-xl bg-dark-surface1 border border-dark-surface3 p-4 flex items-center justify-center group-hover:border-primary/50 transition-colors">
        <div className="flex gap-3">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i} 
              className={`w-12 h-20 rounded-md border-2 flex items-center justify-center ${i === 1 ? 'border-primary bg-primary/10 -translate-y-2 relative' : 'border-dark-surface3 bg-dark-surface2'}`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${i === 1 ? 'bg-primary' : 'bg-dark-surface3'}`}>
                <svg className={`w-3 h-3 ${i === 1 ? 'text-dark-bg' : 'text-text-muted'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4v12l10-6z" />
                </svg>
              </div>
              {i === 1 && <span className="absolute -top-3 px-1.5 py-0.5 bg-primary text-dark-bg text-[8px] font-bold rounded-full">A/B</span>}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Multi-Platform Distribution',
    description: 'Automatically publish to YouTube Shorts, TikTok, and Instagram Reels.',
    preview: (
      <div className="relative h-40 overflow-hidden rounded-xl bg-dark-surface1 border border-dark-surface3 p-4 flex flex-col justify-center group-hover:border-primary/50 transition-colors">
        <div className="flex justify-between items-center px-4">
          <div className="w-8 h-8 rounded bg-dark-surface3 flex items-center justify-center">
            <svg className="w-4 h-4 text-text-muted" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
          </div>
          <div className="w-full h-px border-t border-dashed border-dark-surface3 relative">
             <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-2 h-2 bg-primary rounded-full group-hover:left-3/4 transition-all duration-1000" />
          </div>
          <div className="w-8 h-8 rounded bg-dark-surface3 flex items-center justify-center">
            <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" /></svg>
          </div>
          <div className="w-full h-px border-t border-dashed border-dark-surface3 relative">
             <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-2 h-2 bg-primary rounded-full group-hover:left-3/4 transition-all duration-1000 delay-100" />
          </div>
          <div className="w-8 h-8 rounded bg-dark-surface3 flex items-center justify-center">
             <svg className="w-4 h-4 text-text-muted" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" /></svg>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Performance Optimization',
    description: 'A/B test variations continuously to maximize conversions.',
    preview: (
      <div className="relative h-40 overflow-hidden rounded-xl bg-dark-surface1 border border-dark-surface3 p-4 group-hover:border-primary/50 transition-colors">
        <div className="flex justify-between items-end h-24 pb-2 border-b border-dark-surface3">
           <div className="w-1/6 bg-dark-surface3 rounded-t-sm h-1/4 group-hover:h-3/4 transition-all duration-700 delay-0" />
           <div className="w-1/6 bg-dark-surface3 rounded-t-sm h-1/3 group-hover:h-2/3 transition-all duration-700 delay-100" />
           <div className="w-1/6 bg-primary rounded-t-sm h-1/2 group-hover:h-full transition-all duration-700 delay-200" />
           <div className="w-1/6 bg-dark-surface3 rounded-t-sm h-1/3 group-hover:h-1/2 transition-all duration-700 delay-300" />
           <div className="w-1/6 bg-dark-surface3 rounded-t-sm h-1/6 group-hover:h-2/5 transition-all duration-700 delay-400" />
        </div>
        <div className="mt-2 flex justify-between text-[10px] text-text-muted">
           <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Video Extract Pipeline',
    description: 'Transcribe audio and analyze visual flow for key hooks.',
    preview: (
      <div className="relative h-40 overflow-hidden rounded-xl bg-dark-surface1 border border-dark-surface3 p-4 flex flex-col justify-center group-hover:border-primary/50 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded border border-dark-surface3 bg-dark-surface2 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1H4v8h12V6z" /></svg>
          </div>
          <div className="flex-1 space-y-2">
            <div className="h-1.5 w-full bg-dark-surface3 rounded-full overflow-hidden">
               <div className="h-full bg-primary/40 w-full rounded-full" />
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-primary bg-primary/10 px-1.5 py-0.5 rounded">Hook</span>
              <span className="text-[10px] text-accent bg-accent/10 px-1.5 py-0.5 rounded">Content</span>
              <span className="text-[10px] text-text-muted bg-dark-surface3 px-1.5 py-0.5 rounded">CTA</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Lead Generation',
    description: 'Convert viewership into paying customers or newsletter signups.',
    preview: (
      <div className="relative h-40 overflow-hidden rounded-xl bg-dark-surface1 border border-dark-surface3 p-4 flex items-center justify-center group-hover:border-primary/50 transition-colors">
        <div className="w-3/4 bg-dark-surface2 p-3 rounded-lg border border-dark-surface3 shadow-lg relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
           <div className="text-xs font-bold text-text-primary mb-1">New Lead Capture</div>
           <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 rounded-full bg-dark-surface3" />
              <div className="h-2 w-16 bg-dark-surface3 rounded" />
           </div>
           <button className="w-full py-1 text-[10px] bg-primary text-dark-bg font-bold rounded group-hover:bg-primary-hover transition-colors">
             View Dashboard
           </button>
        </div>
      </div>
    ),
  },
]

export default function AITools() {
  return (
    <section id="features" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-16">
          AI Tools That Drive Growth
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-dark-surface2 border border-dark-surface3 rounded-3xl p-6 hover:shadow-lg hover:border-primary transition-all cursor-pointer group"
            >
              <div className="mb-6">
                {tool.preview}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                {tool.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
