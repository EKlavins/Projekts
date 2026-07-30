import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Building2, Plus } from 'lucide-react'

export default function BusinessPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#e8e8f0]">Businesses</h1>
          <p className="text-[#6b6b80] mt-1">Build and track your business ventures</p>
        </div>
        <Button><Plus className="h-4 w-4 mr-2" /> Add Business</Button>
      </div>
      <Card>
        <CardContent className="p-12 text-center">
          <Building2 className="h-12 w-12 text-[#2a2a3e] mx-auto mb-4" />
          <h3 className="font-semibold text-[#e8e8f0] mb-2">Launch your ventures</h3>
          <p className="text-sm text-[#6b6b80] mb-4">Track revenue, profit, and KPIs for all your businesses in one place</p>
          <Button>Add Business</Button>
        </CardContent>
      </Card>
    </div>
  )
}
