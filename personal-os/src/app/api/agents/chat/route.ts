import { NextRequest, NextResponse } from 'next/server'
import { runAgent } from '@/lib/agents'

export async function POST(req: NextRequest) {
  try {
    const { agentId, messages, userContext } = await req.json()

    if (!agentId || !messages) {
      return NextResponse.json({ error: 'agentId and messages required' }, { status: 400 })
    }

    if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === 'your-key-here') {
      return NextResponse.json({
        content: '⚠️ ANTHROPIC_API_KEY not configured. Add your key to .env.local to enable AI agents:\n\n```\nANTHROPIC_API_KEY=sk-ant-...\n```\n\nGet your key at console.anthropic.com',
        agentId,
      })
    }

    const response = await runAgent(agentId, messages, userContext)
    return NextResponse.json({ content: response.content, agentId: response.agentId })
  } catch (error: any) {
    console.error('Agent error:', error)
    return NextResponse.json({ error: error.message || 'Agent failed' }, { status: 500 })
  }
}
