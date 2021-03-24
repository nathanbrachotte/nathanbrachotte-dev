export enum MAIN_PAGES {
  LANDING = 'LANDING',
  ABOUT = 'ABOUT',
  PROJECT = 'PROJECT',
  WRITING = 'WRITING',
}

export interface Post {
  id: string
  body: string
  createdAt: string
  heroImageUrl: string
  title: string
}
