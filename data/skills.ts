import type { Component } from 'vue'
import { Blocks, BrainCircuit, BriefcaseBusiness, Cable, CloudCog, Code2, Landmark, ServerCog } from 'lucide-vue-next'

export type Expertise = { key: string; icon: Component }

export const expertise: Expertise[] = [
  { key: 'enterprise', icon: Landmark },
  { key: 'backend', icon: ServerCog },
  { key: 'integration', icon: Cable },
  { key: 'hris', icon: BriefcaseBusiness },
  { key: 'odoo', icon: Blocks },
  { key: 'saas', icon: CloudCog },
  { key: 'analysis', icon: BrainCircuit },
  { key: 'leadership', icon: Code2 }
]

export const techStacks = [
  { key: 'frontend', items: ['Vue.js', 'Nuxt', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap'] },
  { key: 'backend', items: ['NestJS', 'Laravel', 'Node.js', 'Bun', 'Go', 'REST API'] },
  { key: 'enterprise', items: ['Odoo', 'Python'] },
  { key: 'database', items: ['PostgreSQL', 'MySQL', 'MariaDB', 'Redis'] },
  { key: 'infrastructure', items: ['Docker', 'Linux', 'Git', 'GitHub'] }
]
