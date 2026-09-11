export type Project = {
  nameKey: string
  descriptionKey: string
  categoryKey: string
  technologies: string[]
  roleKey: string
}

export const projects: Project[] = [
  { nameKey: 'hcms.name', descriptionKey: 'hcms.description', categoryKey: 'hcms.category', technologies: ['Odoo', 'Vue.js', 'PostgreSQL', 'REST API'], roleKey: 'hcms.role' },
  { nameKey: 'helmet.name', descriptionKey: 'helmet.description', categoryKey: 'helmet.category', technologies: ['Laravel', 'Go', 'Nuxt', 'IoT'], roleKey: 'helmet.role' },
  { nameKey: 'travel.name', descriptionKey: 'travel.description', categoryKey: 'travel.category', technologies: ['NestJS', 'PostgreSQL', 'Docker'], roleKey: 'travel.role' },
  { nameKey: 'oil.name', descriptionKey: 'oil.description', categoryKey: 'oil.category', technologies: ['REST API', 'Node.js', 'PostgreSQL'], roleKey: 'oil.role' }
]
