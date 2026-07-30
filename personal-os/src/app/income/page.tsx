import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Rocket, Plus } from 'lucide-react'

export default function IncomePage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#e8e8f0]">Income Streams</h1>
          <p className="text-[#6b6b80] mt-1">Track and grow all revenue sources</p>
        </div>
        <Button><Plus className="h-4 w-4 mr-2" /> Add Stream</Button>
      </div>
      <Card>
        <CardContent className="p-12 text-center">
          <Rocket className="h-12 w-12 text-[#2a2a3e] mx-auto mb-4" />
          <h3 className="font-semibold text-[#e8e8f0] mb-2">Build multiple income streams</h3>
          <p className="text-sm text-[#6b6b80] mb-4">Add your existing income sources and let the Income Agent identify new opportunities</p>
          <Button>Add Income Stream</Button>
        </CardContent>
      </Card>
    </div>
  )
}
