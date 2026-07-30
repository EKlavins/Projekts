import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Wrench, Plus } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#e8e8f0]">Projects</h1>
          <p className="text-[#6b6b80] mt-1">Automotive builds, personal projects, and more</p>
        </div>
        <Button><Plus className="h-4 w-4 mr-2" /> New Project</Button>
      </div>
      <Card>
        <CardContent className="p-12 text-center">
          <Wrench className="h-12 w-12 text-[#2a2a3e] mx-auto mb-4" />
          <h3 className="font-semibold text-[#e8e8f0] mb-2">Track your projects</h3>
          <p className="text-sm text-[#6b6b80] mb-4">Manage automotive builds, personal projects, and learning goals with budgets and milestones</p>
          <Button>Start a Project</Button>
        </CardContent>
      </Card>
    </div>
  )
}
