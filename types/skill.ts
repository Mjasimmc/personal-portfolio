import { LucideIcon } from 'lucide-react'

export interface Skill {
  name: string
  category: 'Frontend' | 'Backend' | 'Databases' | 'DevOps / Tools' | 'Cloud Platforms' | 'Language' | 'Other'
  icon?: LucideIcon
  description?: string
}
