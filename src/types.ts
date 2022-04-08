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

export interface Project {
  name: string
  description: string
  projectUrl?: string
  repositoryUrl?: string
  type: string
  publishedDate: string
  logo: {
    image: {
      src: string
    }
    title: string
  }
  slug: string
  headerImage: { file: { url: string } }
  workDone: string
  appleStoreUrl: string
  playStoreUrl: string
  tool: string[]
  content: { content: string }
  isSideProject: boolean
}
