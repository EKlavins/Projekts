import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DollarSign, Plus, TrendingUp } from 'lucide-react'

export default function WealthPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#e8e8f0]">Wealth Dashboard</h1>
          <p className="text-[#6b6b80] mt-1">Net worth, cash flow, and financial independence tracker</p>
        </div>
        <Button><Plus className="h-4 w-4 mr-2" /> Update Net Worth</Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {['Net Worth', 'Total Assets', 'Total Liabilities', 'FI Number'].map(label => (
          <Card key={label}>
            <CardContent className="p-5">
              <p className="text-xs text-[#6b6b80] uppercase tracking-wider mb-1">{label}</p>
              <p className="text-2xl font-bold text-[#e8e8f0]">$0</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardContent className="p-12 text-center">
          <DollarSign className="h-12 w-12 text-[#2a2a3e] mx-auto mb-4" />
          <h3 className="font-semibold text-[#e8e8f0] mb-2">Track your wealth journey</h3>
          <p className="text-sm text-[#6b6b80] mb-4">Add your assets and liabilities to see your net worth and progress toward financial independence</p>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </div>
  )
}
