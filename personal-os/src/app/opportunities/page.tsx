'use client'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Target, Plus, TrendingUp, Clock, DollarSign, Zap } from 'lucide-react'

const SAMPLE_OPPORTUNITIES = [
  {
    id: 1, title: 'AI Automation Agency', category: 'business',
    description: 'Build a boutique agency automating business workflows using Claude API and n8n.',
    roiPotential: 9, riskLevel: 4, timeRequired: 3, capitalRequired: 2000,
    scalability: 8, difficulty: 5, score: 78,
  },
  {
    id: 2, title: 'SaaS Micro-Tool (AI Niche)', category: 'income',
    description: 'Build a single-purpose AI tool for a specific professional niche (legal, medical, accounting).',
    roiPotential: 8, riskLevel: 5, timeRequired: 4, capitalRequired: 500,
    scalability: 9, difficulty: 6, score: 74,
  },
  {
    id: 3, title: 'Dividend Growth ETF Strategy', category: 'investment',
    description: 'Dollar-cost average into SCHD + VTI for long-term dividend income compounding.',
    roiPotential: 6, riskLevel: 3, timeRequired: 1, capitalRequired: 5000,
    scalability: 7, difficulty: 2, score: 72,
  },
]

function ScoreBar({ value, max = 10, color = 'bg-violet-500' }: { value: number; max?: number; color?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-[#1e1e2e] rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{ width: `${(value / max) * 100}%` }} />
      </div>
      <span className="text-xs text-[#6b6b80] w-4">{value}</span>
    </div>
  )
}

export default function OpportunitiesPage() {
  const [opportunities] = useState(SAMPLE_OPPORTUNITIES)

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#e8e8f0]">Opportunities</h1>
          <p className="text-[#6b6b80] mt-1">Scored by ROI, risk, time, and scalability</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" /> Scan New
        </Button>
      </div>

      <div className="grid gap-4">
        {opportunities
          .sort((a, b) => b.score - a.score)
          .map(opp => (
            <Card key={opp.id} className="hover:border-violet-600/30 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-[#e8e8f0]">{opp.title}</h3>
                      <Badge variant={opp.category === 'investment' ? 'info' : opp.category === 'business' ? 'warning' : 'success'}>
                        {opp.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-[#6b6b80] mb-4">{opp.description}</p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      <div>
                        <p className="text-[10px] text-[#6b6b80] mb-1">ROI Potential</p>
                        <ScoreBar value={opp.roiPotential} color="bg-emerald-500" />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#6b6b80] mb-1">Risk (lower=better)</p>
                        <ScoreBar value={opp.riskLevel} color="bg-red-500" />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#6b6b80] mb-1">Scalability</p>
                        <ScoreBar value={opp.scalability} color="bg-blue-500" />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#6b6b80] mb-1">Difficulty (lower=better)</p>
                        <ScoreBar value={opp.difficulty} color="bg-amber-500" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4 text-xs text-[#6b6b80]">
                      <span className="flex items-center gap-1"><DollarSign className="h-3 w-3" /> ${opp.capitalRequired?.toLocaleString()}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {opp.timeRequired}h/week</span>
                    </div>
                  </div>
                  <div className="text-center flex-shrink-0">
                    <div className={`h-16 w-16 rounded-xl flex items-center justify-center text-2xl font-bold ${
                      opp.score >= 75 ? 'bg-emerald-500/15 text-emerald-400' :
                      opp.score >= 50 ? 'bg-amber-500/15 text-amber-400' :
                      'bg-red-500/15 text-red-400'
                    }`}>
                      {opp.score}
                    </div>
                    <p className="text-[10px] text-[#6b6b80] mt-1">Score</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  )
}
