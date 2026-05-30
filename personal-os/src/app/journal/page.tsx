import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Plus } from 'lucide-react'

export default function JournalPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#e8e8f0]">Journal</h1>
          <p className="text-[#6b6b80] mt-1">Reflections, insights, and personal growth tracking</p>
        </div>
        <Button><Plus className="h-4 w-4 mr-2" /> New Entry</Button>
      </div>
      <Card>
        <CardContent className="p-12 text-center">
          <BookOpen className="h-12 w-12 text-[#2a2a3e] mx-auto mb-4" />
          <h3 className="font-semibold text-[#e8e8f0] mb-2">Start your journal</h3>
          <p className="text-sm text-[#6b6b80] mb-4">Daily reflections analyzed by your Self-Mastery agent for patterns and insights</p>
          <Button>Write First Entry</Button>
        </CardContent>
      </Card>
    </div>
  )
}
