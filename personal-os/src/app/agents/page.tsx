'use client'
import { useState, useRef, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Send, Loader2, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const AGENTS = [
  { id: 'automotive', name: 'Automotive', emoji: '🔧', color: 'from-orange-500 to-red-600' },
  { id: 'wealth', name: 'Wealth', emoji: '💰', color: 'from-green-500 to-emerald-600' },
  { id: 'stocks', name: 'Stocks', emoji: '📈', color: 'from-blue-500 to-cyan-600' },
  { id: 'income', name: 'Income', emoji: '🚀', color: 'from-purple-500 to-violet-600' },
  { id: 'business', name: 'Business', emoji: '🏢', color: 'from-yellow-500 to-amber-600' },
  { id: 'self-mastery', name: 'Self Mastery', emoji: '🧠', color: 'from-pink-500 to-rose-600' },
  { id: 'research', name: 'Research', emoji: '🔬', color: 'from-teal-500 to-cyan-600' },
  { id: 'execution', name: 'Execution', emoji: '⚡', color: 'from-indigo-500 to-blue-600' },
  { id: 'opportunity-scanner', name: 'Opp Scanner', emoji: '🎯', color: 'from-red-500 to-orange-600' },
]

interface Message {
  role: 'user' | 'assistant'
  content: string
  agentId?: string
}

export default function AgentsPage() {
  const [selectedAgent, setSelectedAgent] = useState(AGENTS[0])
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function sendMessage() {
    if (!input.trim() || loading) return
    const userMsg: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/agents/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agentId: selectedAgent.id,
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })),
        }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.content, agentId: selectedAgent.id }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error connecting to agent. Please add your ANTHROPIC_API_KEY to .env.local', agentId: selectedAgent.id }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Agent selector */}
      <div className="border-b border-[#1e1e2e] p-4 bg-[#0d0d14]">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {AGENTS.map(agent => (
            <button
              key={agent.id}
              onClick={() => { setSelectedAgent(agent); setMessages([]) }}
              className={cn(
                'flex items-center gap-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all cursor-pointer',
                selectedAgent.id === agent.id
                  ? 'bg-violet-600/20 text-violet-400 border border-violet-600/30'
                  : 'text-[#6b6b80] hover:text-[#e8e8f0] hover:bg-[#1a1a26]'
              )}
            >
              <span>{agent.emoji}</span>
              <span className="font-medium">{agent.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <span className="text-5xl mb-4">{selectedAgent.emoji}</span>
            <h2 className="text-xl font-bold text-[#e8e8f0] mb-2">{selectedAgent.name} Agent</h2>
            <p className="text-[#6b6b80] max-w-md text-sm">
              Ask me anything about {selectedAgent.name.toLowerCase()}. I'm here to give you data-driven, honest advice.
            </p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
            {msg.role === 'assistant' && (
              <div className={`mr-3 h-8 w-8 rounded-full bg-gradient-to-br ${selectedAgent.color} flex items-center justify-center text-sm flex-shrink-0 mt-1`}>
                {selectedAgent.emoji}
              </div>
            )}
            <div
              className={cn(
                'max-w-[75%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap',
                msg.role === 'user'
                  ? 'bg-violet-600 text-white rounded-tr-sm'
                  : 'bg-[#111118] border border-[#1e1e2e] text-[#e8e8f0] rounded-tl-sm'
              )}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-3">
            <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${selectedAgent.color} flex items-center justify-center text-sm`}>
              {selectedAgent.emoji}
            </div>
            <div className="bg-[#111118] border border-[#1e1e2e] rounded-2xl rounded-tl-sm px-4 py-3">
              <Loader2 className="h-4 w-4 animate-spin text-[#6b6b80]" />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="border-t border-[#1e1e2e] p-4 bg-[#0d0d14]">
        <div className="flex gap-3 max-w-4xl mx-auto">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
            placeholder={`Ask the ${selectedAgent.name} agent...`}
            className="flex-1 bg-[#1a1a26] border border-[#1e1e2e] rounded-xl px-4 py-3 text-sm text-[#e8e8f0] placeholder:text-[#6b6b80] focus:outline-none focus:border-violet-600/50"
          />
          <Button onClick={sendMessage} disabled={loading || !input.trim()} size="icon">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
