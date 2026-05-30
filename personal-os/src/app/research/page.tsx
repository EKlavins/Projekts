import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, Plus } from 'lucide-react'

export default function ResearchPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#e8e8f0]">Research</h1>
          <p className="text-[#6b6b80] mt-1">Market intelligence, trends, and opportunity reports</p>
        </div>
        <Button><Plus className="h-4 w-4 mr-2" /> New Research</Button>
      </div>
      <Card>
        <CardContent className="p-12 text-center">
          <Search className="h-12 w-12 text-[#2a2a3e] mx-auto mb-4" />
          <h3 className="font-semibold text-[#e8e8f0] mb-2">Deep research on demand</h3>
          <p className="text-sm text-[#6b6b80] mb-4">Ask the Research agent to analyze markets, trends, and opportunities — get executive-level summaries</p>
          <Button>Start Research</Button>
        </CardContent>
      </Card>
    </div>
  )
}
