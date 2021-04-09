export interface Post {
  id: string
  body: string
  description: string
  createdAt: string
  image: string
  title: string
}

export const MAIN_PAGES = {
  LANDING: 'LANDING',
  ABOUT: 'ABOUT',
  PROJECT: 'PROJECT',
  WRITING: 'WRITING',
} as const
