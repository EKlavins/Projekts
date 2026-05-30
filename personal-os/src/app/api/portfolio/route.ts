import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const items = await prisma.portfolioItem.findMany({
      orderBy: { addedAt: 'desc' }
    })
    const totalValue = items.reduce((sum, item) => sum + item.shares * item.currentPrice, 0)
    const totalCost = items.reduce((sum, item) => sum + item.shares * item.avgCost, 0)
    return NextResponse.json({ items, totalValue, totalCost, totalGain: totalValue - totalCost })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const item = await prisma.portfolioItem.create({
      data: {
        userId: 'default',
        ticker: body.ticker.toUpperCase(),
        name: body.name,
        type: body.type || 'stock',
        shares: parseFloat(body.shares),
        avgCost: parseFloat(body.avgCost),
        currentPrice: parseFloat(body.currentPrice || body.avgCost),
        notes: body.notes,
        thesis: body.thesis,
      }
    })
    return NextResponse.json(item)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
