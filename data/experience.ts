export type Experience = {
  company: string
  period: string
  roleKey: string
  descriptionKey: string
  tags: string[]
}

export const experiences: Experience[] = [
  { company: 'PT Sinergi Informatika Semen Indonesia (SISI)', period: 'Jul 2025 — Present', roleKey: 'odooRole', descriptionKey: 'odooDescription', tags: ['Odoo', 'Employee Central', 'API Integration'] },
  { company: 'PT SISI', period: 'Nov 2022 — Jul 2025', roleKey: 'leadRole', descriptionKey: 'leadDescription', tags: ['HCMS', 'Team Leadership', 'System Integration'] },
  { company: 'PT SISI', period: 'May 2021 — Oct 2022', roleKey: 'fullstackRole', descriptionKey: 'fullstackDescription', tags: ['HRIS', 'Enterprise Application'] },
  { company: 'PT Sprint Karya Inovasi', period: 'Aug 2025 — Present', roleKey: 'ctoRole', descriptionKey: 'ctoDescription', tags: ['SaaS', 'IoT', 'Architecture'] },
  { company: 'Guidesantai GmbH', period: 'May 2025 — Present', roleKey: 'backendRole', descriptionKey: 'backendDescription', tags: ['KapalSantai', 'Perahuku', 'Backend'] },
  { company: 'Vismatech', period: 'Feb 2025 — Present', roleKey: 'softwareRole', descriptionKey: 'softwareDescription', tags: ['REST API', 'Operational Systems'] },
  { company: 'Satriags Developer', period: '2019 — Present', roleKey: 'founderRole', descriptionKey: 'founderDescription', tags: ['Software Products', 'IT Services'] }
]
