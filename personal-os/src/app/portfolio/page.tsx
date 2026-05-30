import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Plus, DollarSign } from 'lucide-react'

export default function PortfolioPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#e8e8f0]">Portfolio</h1>
          <p className="text-[#6b6b80] mt-1">Stocks, ETFs, and investment tracking</p>
        </div>
        <Button><Plus className="h-4 w-4 mr-2" /> Add Position</Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {['Total Value', 'Total Gain', 'Dividend Income'].map(label => (
          <Card key={label}>
            <CardContent className="p-5">
              <p className="text-xs text-[#6b6b80] uppercase tracking-wider mb-1">{label}</p>
              <p className="text-2xl font-bold text-[#e8e8f0]">$0</p>
              <p className="text-xs text-[#6b6b80] mt-1">+0.00%</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="p-12 text-center">
          <TrendingUp className="h-12 w-12 text-[#2a2a3e] mx-auto mb-4" />
          <h3 className="font-semibold text-[#e8e8f0] mb-2">No positions yet</h3>
          <p className="text-sm text-[#6b6b80] mb-4">Add your stocks, ETFs, and investments to start tracking</p>
          <Button><Plus className="h-4 w-4 mr-2" /> Add First Position</Button>
        </CardContent>
      </Card>
    </div>
  )
}
