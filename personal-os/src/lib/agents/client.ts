import Anthropic from '@anthropic-ai/sdk'
import { AgentConfig, AgentMessage, AgentResponse } from './types'
import { AGENT_CONFIGS } from './configs'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function runAgent(
  agentId: string,
  messages: AgentMessage[],
  userContext?: string
): Promise<AgentResponse> {
  const config = AGENT_CONFIGS[agentId]
  if (!config) throw new Error(`Unknown agent: ${agentId}`)

  const systemPrompt = userContext
    ? `${config.systemPrompt}\n\nUser Context:\n${userContext}`
    : config.systemPrompt

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 4096,
    system: systemPrompt,
    messages: messages.map(m => ({
      role: m.role,
      content: m.content,
    })),
  })

  const content = response.content[0].type === 'text'
    ? response.content[0].text
    : ''

  return {
    content,
    agentId: config.id,
    timestamp: new Date(),
  }
}

export async function* streamAgent(
  agentId: string,
  messages: AgentMessage[],
  userContext?: string
): AsyncGenerator<string> {
  const config = AGENT_CONFIGS[agentId]
  if (!config) throw new Error(`Unknown agent: ${agentId}`)

  const systemPrompt = userContext
    ? `${config.systemPrompt}\n\nUser Context:\n${userContext}`
    : config.systemPrompt

  const stream = anthropic.messages.stream({
    model: 'claude-sonnet-4-6',
    max_tokens: 4096,
    system: systemPrompt,
    messages: messages.map(m => ({
      role: m.role,
      content: m.content,
    })),
  })

  for await (const chunk of stream) {
    if (
      chunk.type === 'content_block_delta' &&
      chunk.delta.type === 'text_delta'
    ) {
      yield chunk.delta.text
    }
  }
}

export { AGENT_CONFIGS }
