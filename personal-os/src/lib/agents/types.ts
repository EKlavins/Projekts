export type AgentId =
  | 'automotive'
  | 'wealth'
  | 'stocks'
  | 'income'
  | 'business'
  | 'self-mastery'
  | 'research'
  | 'execution'
  | 'opportunity-scanner'

export interface AgentConfig {
  id: AgentId
  name: string
  emoji: string
  description: string
  systemPrompt: string
  color: string
}

export interface AgentMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface AgentResponse {
  content: string
  agentId: AgentId
  timestamp: Date
}
