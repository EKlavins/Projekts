import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp, DollarSign, Target, Zap, ArrowUpRight,
  ArrowDownRight, Brain, Rocket, Building2, Wrench
} from 'lucide-react'

const metrics = [
  { label: 'Net Worth', value: '$0', change: '+0%', icon: DollarSign, color: 'text-emerald-400', trend: 'up' },
  { label: 'Portfolio Value', value: '$0', change: '+0%', icon: TrendingUp, color: 'text-blue-400', trend: 'up' },
  { label: 'Monthly Income', value: '$0', change: '+0%', icon: Rocket, color: 'text-violet-400', trend: 'up' },
  { label: 'Active Goals', value: '0', change: '0 completed', icon: Target, color: 'text-amber-400', trend: 'neutral' },
]

const agents = [
  { name: 'Automotive', emoji: '🔧', status: 'ready', description: 'Performance builds & diagnostics' },
  { name: 'Wealth Builder', emoji: '💰', status: 'ready', description: 'Net worth & financial freedom' },
  { name: 'Stock Market', emoji: '📈', status: 'ready', description: 'Portfolio analysis & opportunities' },
  { name: 'Income Gen', emoji: '🚀', status: 'ready', description: 'New revenue streams' },
  { name: 'Business', emoji: '🏢', status: 'ready', description: 'Build & scale ventures' },
  { name: 'Self Mastery', emoji: '🧠', status: 'ready', description: 'Cognitive performance' },
  { name: 'Research', emoji: '🔬', status: 'ready', description: 'Market intelligence' },
  { name: 'Execution', emoji: '⚡', status: 'ready', description: 'Turn plans to results' },
  { name: 'Opp Scanner', emoji: '🎯', status: 'ready', description: 'High-ROI opportunity finder' },
]

const quickActions = [
  { label: 'Chat with Wealth Agent', href: '/agents?agent=wealth', color: 'from-emerald-600 to-green-700' },
  { label: 'Scan Opportunities', href: '/opportunities', color: 'from-violet-600 to-purple-700' },
  { label: 'Update Net Worth', href: '/wealth', color: 'from-blue-600 to-cyan-700' },
  { label: 'Weekly Review', href: '/journal', color: 'from-amber-600 to-orange-700' },
]

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#e8e8f0]">Command Center</h1>
          <p className="text-[#6b6b80] mt-1">Your AI-powered personal operating system</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-[#6b6b80]">9 agents active</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <Card key={m.label} className="relative overflow-hidden">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-[#6b6b80] uppercase tracking-wider mb-1">{m.label}</p>
                  <p className="text-2xl font-bold text-[#e8e8f0]">{m.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {m.trend === 'up' ? (
                      <ArrowUpRight className="h-3 w-3 text-emerald-400" />
                    ) : m.trend === 'down' ? (
                      <ArrowDownRight className="h-3 w-3 text-red-400" />
                    ) : null}
                    <span className="text-xs text-[#6b6b80]">{m.change}</span>
                  </div>
                </div>
                <div className={`p-2.5 rounded-lg bg-[#1a1a26]`}>
                  <m.icon className={`h-5 w-5 ${m.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-sm font-medium text-[#6b6b80] uppercase tracking-wider mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {quickActions.map((a) => (
            <a
              key={a.label}
              href={a.href}
              className={`bg-gradient-to-r ${a.color} rounded-xl p-4 text-white text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer`}
            >
              {a.label}
            </a>
          ))}
        </div>
      </div>

      {/* Agent Grid */}
      <div>
        <h2 className="text-sm font-medium text-[#6b6b80] uppercase tracking-wider mb-3">AI Agent Board</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {agents.map((agent) => (
            <a
              key={agent.name}
              href={`/agents?agent=${agent.name.toLowerCase().replace(/ /g, '-')}`}
              className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-4 flex items-center gap-4 hover:border-violet-600/50 hover:bg-[#14141e] transition-all group cursor-pointer"
            >
              <span className="text-2xl">{agent.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#e8e8f0] group-hover:text-violet-400 transition-colors">{agent.name}</p>
                <p className="text-xs text-[#6b6b80] truncate">{agent.description}</p>
              </div>
              <Badge variant="success" className="text-[10px] flex-shrink-0">Ready</Badge>
            </a>
          ))}
        </div>
      </div>

      {/* Setup Prompt */}
      <Card className="border-violet-600/30 bg-violet-600/5">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-violet-600/15">
              <Brain className="h-6 w-6 text-violet-400" />
            </div>
            <div>
              <h3 className="font-semibold text-[#e8e8f0] mb-1">Complete Your Profile</h3>
              <p className="text-sm text-[#6b6b80] mb-3">
                Add your financial data, goals, and preferences so your AI agents can give you personalized insights.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="/wealth" className="text-xs bg-[#1e1e2e] hover:bg-[#2a2a3e] text-[#a0a0b0] px-3 py-1.5 rounded-lg transition-colors cursor-pointer">Add Net Worth</a>
                <a href="/portfolio" className="text-xs bg-[#1e1e2e] hover:bg-[#2a2a3e] text-[#a0a0b0] px-3 py-1.5 rounded-lg transition-colors cursor-pointer">Add Portfolio</a>
                <a href="/goals" className="text-xs bg-[#1e1e2e] hover:bg-[#2a2a3e] text-[#a0a0b0] px-3 py-1.5 rounded-lg transition-colors cursor-pointer">Set Goals</a>
                <a href="/income" className="text-xs bg-[#1e1e2e] hover:bg-[#2a2a3e] text-[#a0a0b0] px-3 py-1.5 rounded-lg transition-colors cursor-pointer">Track Income</a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
