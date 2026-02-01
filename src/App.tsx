import { useState, useEffect } from 'react'

const narratives = [
  { id: 1, name: 'AI x Crypto', sentiment: 95, change: '+12%', status: 'EXTREME', tweets: '45.2K' },
  { id: 2, name: 'RWA Tokenization', sentiment: 78, change: '+8%', status: 'HIGH', tweets: '23.1K' },
  { id: 3, name: 'Bitcoin L2s', sentiment: 72, change: '+5%', status: 'HIGH', tweets: '18.7K' },
  { id: 4, name: 'Restaking', sentiment: 65, change: '+3%', status: 'MEDIUM', tweets: '15.3K' },
  { id: 5, name: 'Meme Coins', sentiment: 88, change: '-4%', status: 'HIGH', tweets: '89.4K' },
  { id: 6, name: 'DePIN', sentiment: 54, change: '+2%', status: 'MEDIUM', tweets: '9.8K' },
]

const categories = [
  { name: 'DeFi', heat: 72, projects: 847, volume: '$2.4B' },
  { name: 'AI', heat: 94, projects: 312, volume: '$890M' },
  { name: 'Gaming', heat: 58, projects: 456, volume: '$340M' },
  { name: 'L2s', heat: 81, projects: 89, volume: '$1.8B' },
  { name: 'NFTs', heat: 35, projects: 2341, volume: '$180M' },
  { name: 'Social', heat: 67, projects: 178, volume: '$420M' },
]

const opportunities = [
  { x: 30, y: 25, size: 12, label: 'AI Agent', strength: 'high' },
  { x: 65, y: 40, size: 8, label: 'RWA', strength: 'medium' },
  { x: 45, y: 70, size: 15, label: 'BTC L2', strength: 'high' },
  { x: 80, y: 20, size: 6, label: 'DePIN', strength: 'low' },
  { x: 20, y: 55, size: 10, label: 'Restake', strength: 'medium' },
  { x: 70, y: 75, size: 9, label: 'Gaming', strength: 'medium' },
]

function App() {
  const [time, setTime] = useState(new Date())
  const [signalStrength, setSignalStrength] = useState(78)
  const [radarAngle, setRadarAngle] = useState(0)
  const [activeNarrative, setActiveNarrative] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
      setSignalStrength(prev => Math.max(50, Math.min(99, prev + (Math.random() - 0.5) * 5)))
      setRadarAngle(prev => (prev + 2) % 360)
    }, 100)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const cycle = setInterval(() => {
      setActiveNarrative(prev => (prev + 1) % narratives.length)
    }, 3000)
    return () => clearInterval(cycle)
  }, [])

  const getHeatClass = (heat: number) => {
    if (heat >= 85) return 'heat-extreme'
    if (heat >= 70) return 'heat-high'
    if (heat >= 50) return 'heat-medium'
    return 'heat-low'
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'EXTREME': return 'text-[#ff00ff]'
      case 'HIGH': return 'text-[#00ff88]'
      case 'MEDIUM': return 'text-[#00f5ff]'
      default: return 'text-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white grid-bg relative">
      {/* Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00f5ff] opacity-5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff00ff] opacity-5 blur-[150px] rounded-full" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-[#1a1a2e] bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <h1 className="font-['Orbitron'] text-2xl md:text-3xl font-black tracking-wider">
                  <span className="text-[#00f5ff] glow-cyan">NARRATIVE</span>
                  <span className="text-[#ff00ff] glow-magenta ml-2">INTEL</span>
                </h1>
                <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#00f5ff] via-[#ff00ff] to-transparent" />
              </div>
              <div className="hidden md:flex items-center gap-2 text-xs text-[#00f5ff]/60 font-['JetBrains_Mono']">
                <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
                <span>LIVE</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="hidden md:block text-right">
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">System Time</div>
                <div className="font-['Orbitron'] text-[#00f5ff] text-lg tracking-wider">
                  {time.toLocaleTimeString('en-US', { hour12: false })}
                  <span className="text-[#00f5ff]/40">.{String(time.getMilliseconds()).padStart(3, '0').slice(0, 2)}</span>
                </div>
              </div>
              <div className="px-3 py-1 border border-[#00f5ff]/30 rounded bg-[#00f5ff]/5">
                <span className="text-[10px] text-gray-500 block uppercase tracking-widest">Signal</span>
                <span className="font-['Orbitron'] text-[#00ff88] text-lg">{Math.round(signalStrength)}%</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center relative">
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#00f5ff]/10 rounded-full" style={{ animation: 'pulse 4s ease-in-out infinite' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#ff00ff]/10 rounded-full" style={{ animation: 'pulse 4s ease-in-out infinite 0.5s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[#00f5ff]/10 rounded-full" style={{ animation: 'pulse 4s ease-in-out infinite 1s' }} />
            
            <div className="relative">
              <div className="text-[10px] md:text-xs text-[#00f5ff]/60 tracking-[0.3em] uppercase mb-4 font-['JetBrains_Mono']">
                &gt; Analyzing Market Narratives <span className="blink">_</span>
              </div>
              <h2 className="font-['Orbitron'] text-4xl md:text-6xl lg:text-7xl font-black mb-6 glitch">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-white to-[#ff00ff]">
                  SPOT THE ALPHA
                </span>
              </h2>
              <p className="font-['Exo_2'] text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                Different narratives. Different opportunities.
                <br />
                <span className="text-[#00f5ff]">Different compute.</span>
              </p>
              
              {/* Status Bar */}
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#0d0d14] border border-[#1a1a2e] rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
                  <span className="text-xs text-gray-400">Narratives Tracked:</span>
                  <span className="font-['Orbitron'] text-[#00f5ff]">247</span>
                </div>
                <div className="w-px h-4 bg-[#1a1a2e]" />
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">Signals Today:</span>
                  <span className="font-['Orbitron'] text-[#00ff88]">1,847</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Trending Narratives Feed */}
          <div className="lg:col-span-2 panel rounded-lg relative corner-tl corner-tr corner-bl corner-br overflow-hidden">
            <div className="p-4 border-b border-[#1a1a2e] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse" />
                <h3 className="font-['Orbitron'] text-sm tracking-wider text-[#00f5ff]">TRENDING NARRATIVES</h3>
              </div>
              <span className="text-[10px] text-gray-500 font-['JetBrains_Mono']">LIVE FEED</span>
            </div>
            <div className="divide-y divide-[#1a1a2e]">
              {narratives.map((narrative, index) => (
                <div 
                  key={narrative.id}
                  className={`p-4 transition-all duration-500 hover:bg-[#00f5ff]/5 ${
                    index === activeNarrative ? 'bg-[#00f5ff]/10 border-l-2 border-[#00f5ff]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-gradient-to-br from-[#00f5ff]/20 to-[#ff00ff]/20 flex items-center justify-center">
                        <span className="font-['Orbitron'] text-xs text-[#00f5ff]">#{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-['Exo_2'] font-semibold text-white">{narrative.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] text-gray-500">{narrative.tweets} mentions</span>
                          <span className={`text-[10px] font-bold ${narrative.change.startsWith('+') ? 'text-[#00ff88]' : 'text-[#ff3366]'}`}>
                            {narrative.change}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs font-['Orbitron'] tracking-wider ${getStatusColor(narrative.status)}`}>
                        {narrative.status}
                      </div>
                      <div className="mt-2 w-24 h-2 bg-[#1a1a2e] rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${getHeatClass(narrative.sentiment)}`}
                          style={{ width: `${narrative.sentiment}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunity Radar */}
          <div className="panel rounded-lg relative corner-tl corner-tr corner-bl corner-br overflow-hidden">
            <div className="p-4 border-b border-[#1a1a2e]">
              <h3 className="font-['Orbitron'] text-sm tracking-wider text-[#00f5ff] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ff00ff] rounded-full" style={{ animation: 'pulse 1s ease-in-out infinite' }} />
                OPPORTUNITY RADAR
              </h3>
            </div>
            <div className="p-6">
              <div className="relative w-full aspect-square">
                {/* Radar circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full border border-[#00f5ff]/20 rounded-full" />
                </div>
                <div className="absolute inset-[15%] flex items-center justify-center">
                  <div className="w-full h-full border border-[#00f5ff]/15 rounded-full" />
                </div>
                <div className="absolute inset-[30%] flex items-center justify-center">
                  <div className="w-full h-full border border-[#00f5ff]/10 rounded-full" />
                </div>
                <div className="absolute inset-[45%] flex items-center justify-center">
                  <div className="w-full h-full bg-[#00f5ff]/5 rounded-full" />
                </div>
                
                {/* Crosshairs */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f5ff]/30 to-transparent" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#00f5ff]/30 to-transparent" />
                </div>
                
                {/* Sweep line */}
                <div 
                  className="absolute inset-0 flex items-center justify-center origin-center"
                  style={{ transform: `rotate(${radarAngle}deg)` }}
                >
                  <div className="w-1/2 h-[2px] bg-gradient-to-r from-[#00f5ff] to-transparent ml-[50%]" />
                </div>
                
                {/* Sweep glow trail */}
                <div 
                  className="absolute inset-0 origin-center"
                  style={{ transform: `rotate(${radarAngle}deg)` }}
                >
                  <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 -translate-y-1/2 origin-left">
                    <div 
                      className="w-full h-full bg-gradient-to-r from-[#00f5ff]/20 to-transparent"
                      style={{ 
                        clipPath: 'polygon(0 50%, 100% 0, 100% 100%)',
                        transform: 'rotate(-30deg)',
                        transformOrigin: 'left center'
                      }}
                    />
                  </div>
                </div>
                
                {/* Opportunity blips */}
                {opportunities.map((opp, index) => (
                  <div
                    key={index}
                    className="absolute group cursor-pointer"
                    style={{ 
                      left: `${opp.x}%`, 
                      top: `${opp.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div 
                      className={`rounded-full ${
                        opp.strength === 'high' ? 'bg-[#00ff88]' : 
                        opp.strength === 'medium' ? 'bg-[#00f5ff]' : 'bg-[#ffcc00]'
                      }`}
                      style={{ 
                        width: opp.size, 
                        height: opp.size,
                        animation: 'blipPulse 2s ease-in-out infinite',
                        animationDelay: `${index * 0.3}s`
                      }}
                    />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-[#0d0d14] border border-[#00f5ff]/30 px-2 py-1 rounded text-[10px] text-[#00f5ff] whitespace-nowrap font-['JetBrains_Mono']">
                        {opp.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Legend */}
              <div className="mt-4 flex justify-center gap-4 text-[10px] font-['JetBrains_Mono']">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#00ff88] rounded-full" />
                  <span className="text-gray-500">High</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#00f5ff] rounded-full" />
                  <span className="text-gray-500">Medium</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#ffcc00] rounded-full" />
                  <span className="text-gray-500">Low</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Cards */}
        <div className="mt-6">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="font-['Orbitron'] text-sm tracking-wider text-[#00f5ff]">NARRATIVE CATEGORIES</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00f5ff]/30 to-transparent" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <div 
                key={cat.name}
                className="panel rounded-lg p-4 relative group hover:border-[#00f5ff]/50 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Heat glow */}
                <div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity ${getHeatClass(cat.heat)}`}
                />
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-['Exo_2'] font-semibold text-white">{cat.name}</h4>
                    <div className={`text-xs font-['Orbitron'] ${
                      cat.heat >= 85 ? 'text-[#ff00ff]' : 
                      cat.heat >= 70 ? 'text-[#00ff88]' : 
                      cat.heat >= 50 ? 'text-[#00f5ff]' : 'text-gray-500'
                    }`}>
                      {cat.heat}°
                    </div>
                  </div>
                  
                  {/* Heat bar */}
                  <div className="w-full h-1 bg-[#1a1a2e] rounded-full overflow-hidden mb-3">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${getHeatClass(cat.heat)}`}
                      style={{ width: `${cat.heat}%` }}
                    />
                  </div>
                  
                  <div className="flex justify-between text-[10px] text-gray-500 font-['JetBrains_Mono']">
                    <span>{cat.projects} projects</span>
                    <span className="text-[#00f5ff]">{cat.volume}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signal Strength Panel */}
        <div className="mt-6 panel rounded-lg relative corner-tl corner-tr corner-bl corner-br overflow-hidden">
          <div className="p-4 border-b border-[#1a1a2e] flex items-center justify-between">
            <h3 className="font-['Orbitron'] text-sm tracking-wider text-[#00f5ff]">AGGREGATE SIGNAL STRENGTH</h3>
            <span className="text-[10px] text-[#00ff88] font-['JetBrains_Mono'] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
              OPTIMAL CONDITIONS
            </span>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-8">
              {/* Large signal display */}
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle 
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke="#1a1a2e" 
                      strokeWidth="8"
                    />
                    <circle 
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke="url(#signalGradient)" 
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${signalStrength * 2.83} 283`}
                      className="transition-all duration-300"
                    />
                    <defs>
                      <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00f5ff" />
                        <stop offset="50%" stopColor="#00ff88" />
                        <stop offset="100%" stopColor="#ff00ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-['Orbitron'] text-3xl font-black text-white">
                        {Math.round(signalStrength)}
                      </div>
                      <div className="text-[10px] text-gray-500">/ 100</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Signal bars */}
              <div className="flex-1">
                <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                  {Array.from({ length: 10 }).map((_, i) => {
                    const height = 20 + Math.random() * 60
                    const isActive = i < Math.floor(signalStrength / 10)
                    return (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div className="w-full h-20 bg-[#1a1a2e] rounded relative overflow-hidden">
                          <div 
                            className={`absolute bottom-0 w-full rounded transition-all duration-300 ${
                              isActive ? 'bg-gradient-to-t from-[#00f5ff] to-[#00ff88]' : 'bg-[#1a1a2e]'
                            }`}
                            style={{ 
                              height: `${height}%`,
                              opacity: isActive ? 1 : 0.3,
                              animation: isActive ? `signalPulse ${1 + Math.random()}s ease-in-out infinite` : 'none'
                            }}
                          />
                        </div>
                        <span className="text-[8px] text-gray-600 font-['JetBrains_Mono']">
                          {(i + 1) * 10}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            
            {/* Status indicators */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Market Sentiment', value: 'Bullish', color: '#00ff88' },
                { label: 'Volatility Index', value: 'Moderate', color: '#ffcc00' },
                { label: 'Narrative Velocity', value: 'Accelerating', color: '#00f5ff' },
                { label: 'Alpha Potential', value: 'High', color: '#ff00ff' },
              ].map((item) => (
                <div key={item.label} className="bg-[#0a0a0f] border border-[#1a1a2e] rounded p-3">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="font-['Orbitron'] text-sm" style={{ color: item.color }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#1a1a2e] bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-gray-600 text-xs font-['JetBrains_Mono']">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00ff88] rounded-full" />
                System Online
              </span>
              <span className="text-[#1a1a2e]">|</span>
              <span>v1.0.0</span>
            </div>
            <div className="text-gray-500 text-[11px] font-['JetBrains_Mono'] tracking-wide">
              Requested by <span className="text-gray-400">@aixbt_agent</span> · Built by <span className="text-gray-400">@clonkbot</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App