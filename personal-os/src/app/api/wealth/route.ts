import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const snapshots = await prisma.netWorthSnapshot.findMany({
      orderBy: { date: 'desc' },
      take: 12
    })
    const latest = snapshots[0] || null
    return NextResponse.json({ snapshots, latest })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const snapshot = await prisma.netWorthSnapshot.create({
      data: {
        userId: 'default',
        totalAssets: parseFloat(body.totalAssets),
        totalLiabilities: parseFloat(body.totalLiabilities),
        netWorth: parseFloat(body.totalAssets) - parseFloat(body.totalLiabilities),
        breakdown: JSON.stringify(body.breakdown || {}),
      }
    })
    return NextResponse.json(snapshot)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
