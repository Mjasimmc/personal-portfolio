'use client'

import { PersonSchema, WebSiteSchema, OrganizationSchema, ProjectSchema, BreadcrumbSchema } from '@/lib/structured-data'

interface StructuredDataProps {
  type: 'person' | 'website' | 'organization' | 'project' | 'breadcrumb'
  data?: any
  breadcrumbItems?: { name: string; url: string }[]
}

export function StructuredData({ type, data, breadcrumbItems }: StructuredDataProps) {
  let schema

  switch (type) {
    case 'person':
      schema = PersonSchema()
      break
    case 'website':
      schema = WebSiteSchema()
      break
    case 'organization':
      schema = OrganizationSchema()
      break
    case 'project':
      schema = ProjectSchema(data)
      break
    case 'breadcrumb':
      schema = BreadcrumbSchema(breadcrumbItems || [])
      break
    default:
      return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

