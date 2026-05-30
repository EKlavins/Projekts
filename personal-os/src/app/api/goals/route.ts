export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const goals = await prisma.goal.findMany({
      where: { userId: 'default' },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(goals)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const goal = await prisma.goal.create({
      data: {
        userId: 'default',
        title: body.title,
        description: body.description,
        category: body.category || 'personal',
        targetDate: body.targetDate ? new Date(body.targetDate) : null,
        targetValue: body.targetValue ? parseFloat(body.targetValue) : null,
        currentValue: 0,
      }
    })
    return NextResponse.json(goal)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
