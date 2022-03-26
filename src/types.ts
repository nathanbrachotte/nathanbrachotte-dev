export interface BlogPost {
  id: string
  body: string
  bodyAst: any[]
  preview: string
  createdAt: string
  image: string
  title: string
  tags: string[]
  video: string
  showInDevOnly: boolean
  slug: string
}

export const MAIN_PAGES = {
  LANDING: 'LANDING',
  ABOUT: 'ABOUT',
  PROJECT: 'PROJECT',
  WRITING: 'WRITING',
} as const

export interface Reference {
  // eslint-disable-next-line camelcase
  contentful_id: string
  createdAt: string
  file: {
    contentType: 'image/png' | 'application/pdf'
    details: { image: { height: number; width: number } }
    fileName: string
    url: string
  }
  id: string
}
