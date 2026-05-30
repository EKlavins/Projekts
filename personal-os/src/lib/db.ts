import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined
}

function createPrismaClient() {
  return new PrismaClient()
}

export function getPrisma(): PrismaClient {
  if (typeof globalThis.__prisma === 'undefined') {
    globalThis.__prisma = createPrismaClient()
  }
  return globalThis.__prisma
}

// Convenience alias — only call at request-time, never at module scope
export const prisma = {
  get goal() { return getPrisma().goal },
  get journalEntry() { return getPrisma().journalEntry },
  get portfolioItem() { return getPrisma().portfolioItem },
  get netWorthSnapshot() { return getPrisma().netWorthSnapshot },
  get opportunity() { return getPrisma().opportunity },
  get incomeStream() { return getPrisma().incomeStream },
  get business() { return getPrisma().business },
  get project() { return getPrisma().project },
  get memory() { return getPrisma().memory },
  get agentMessage() { return getPrisma().agentMessage },
  get user() { return getPrisma().user },
}
