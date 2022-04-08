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
