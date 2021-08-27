export interface ThemeType {
  background: string
  backgroundDark: string
  textLight: string
  text: string
  textDark: string

  primary: string
  primaryVeryLight: string
  primaryLight: string
  primaryDark: string

  secondaryLight: string
  secondary: string
  secondaryDark: string

  alwaysWhite: string
}

export type Color = keyof ThemeType
