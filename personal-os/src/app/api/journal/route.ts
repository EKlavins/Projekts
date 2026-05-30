export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const entries = await prisma.journalEntry.findMany({
      where: { userId: 'default' },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(entries)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const entry = await prisma.journalEntry.create({
      data: {
        userId: 'default',
        title: body.title,
        content: body.content,
        mood: body.mood ? parseInt(body.mood) : null,
        tags: JSON.stringify(body.tags || []),
      }
    })
    return NextResponse.json(entry)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
