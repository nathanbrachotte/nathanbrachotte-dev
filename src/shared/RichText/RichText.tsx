import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import { ReactNode } from 'react'
import { options } from './options'

export const richText = (
  text: string,
  extraOptions: Options = options as Options,
): ReactNode | null => {
  const data = text && JSON.parse(text)

  return data ? documentToReactComponents(data, extraOptions) : null
}

export const poorText = (text: string, charLimit: number): ReactNode | null => {
  const data = text && JSON.parse(text)
  const reactComps = documentToReactComponents(data)

  // https://www.npmjs.com/package/@contentful/rich-text-react-renderer
  return data ? reactComps : null
}
