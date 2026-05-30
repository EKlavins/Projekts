'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard, Brain, TrendingUp, DollarSign, Rocket,
  Building2, Target, Search, Zap, Wrench, BookOpen, ChevronRight
} from 'lucide-react'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/agents', label: 'AI Agents', icon: Brain },
  { href: '/portfolio', label: 'Portfolio', icon: TrendingUp },
  { href: '/wealth', label: 'Wealth', icon: DollarSign },
  { href: '/opportunities', label: 'Opportunities', icon: Target },
  { href: '/income', label: 'Income Streams', icon: Rocket },
  { href: '/business', label: 'Businesses', icon: Building2 },
  { href: '/projects', label: 'Projects', icon: Wrench },
  { href: '/journal', label: 'Journal', icon: BookOpen },
  { href: '/research', label: 'Research', icon: Search },
  { href: '/goals', label: 'Goals', icon: Zap },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0d0d14] border-r border-[#1e1e2e] flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 border-b border-[#1e1e2e]">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-bold text-[#e8e8f0] text-sm">PersonalOS</p>
            <p className="text-[10px] text-[#6b6b80] uppercase tracking-wider">AI Command Center</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 overflow-y-auto">
        <div className="space-y-0.5">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all group',
                  active
                    ? 'bg-violet-600/15 text-violet-400 font-medium'
                    : 'text-[#6b6b80] hover:text-[#e8e8f0] hover:bg-[#1a1a26]'
                )}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                <span className="flex-1">{label}</span>
                {active && <ChevronRight className="h-3 w-3 opacity-60" />}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#1e1e2e]">
        <div className="flex items-center gap-2.5 px-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center text-xs font-bold text-white">
            EK
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-[#e8e8f0] truncate">Eduards</p>
            <p className="text-[10px] text-[#6b6b80]">Premium Plan</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
