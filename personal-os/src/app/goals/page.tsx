import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Target, Plus } from 'lucide-react'

export default function GoalsPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#e8e8f0]">Goals</h1>
          <p className="text-[#6b6b80] mt-1">Financial, business, personal, and automotive goals</p>
        </div>
        <Button><Plus className="h-4 w-4 mr-2" /> Add Goal</Button>
      </div>
      <Card>
        <CardContent className="p-12 text-center">
          <Target className="h-12 w-12 text-[#2a2a3e] mx-auto mb-4" />
          <h3 className="font-semibold text-[#e8e8f0] mb-2">Set your goals</h3>
          <p className="text-sm text-[#6b6b80] mb-4">Define clear goals with targets and deadlines — your Execution agent will break them into weekly actions</p>
          <Button>Set First Goal</Button>
        </CardContent>
      </Card>
    </div>
  )
}
