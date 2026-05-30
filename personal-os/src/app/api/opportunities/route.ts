export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const opportunities = await prisma.opportunity.findMany({
      where: { userId: 'default' },
      orderBy: { score: 'desc' }
    })
    return NextResponse.json(opportunities)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const roi = parseInt(body.roiPotential) || 5
    const risk = parseInt(body.riskLevel) || 5
    const time = parseInt(body.timeRequired) || 5
    const scalability = parseInt(body.scalability) || 5
    const difficulty = parseInt(body.difficulty) || 5
    const score = Math.round((roi * 3 + scalability * 2 + (10 - risk) * 2 + (10 - difficulty) * 2 + (10 - time)) / 10 * 10)

    const opp = await prisma.opportunity.create({
      data: {
        userId: 'default',
        title: body.title,
        description: body.description,
        category: body.category || 'other',
        roiPotential: roi,
        riskLevel: risk,
        timeRequired: time,
        capitalRequired: body.capitalRequired ? parseFloat(body.capitalRequired) : null,
        scalability,
        difficulty,
        score,
        notes: body.notes,
      }
    })
    return NextResponse.json(opp)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
