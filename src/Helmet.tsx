import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'
import { withTheme } from 'styled-components'

interface Props {
  theme?: Record<any, any>
}

const Helmet: React.FC<Props> = ({ theme = {} }) => (
  <StaticQuery
    query={graphql`
      query HelmetQuery {
        contentfulAbout {
          name
          description
          profile {
            favicon16: resize(width: 16) {
              src
            }
            favicon32: resize(width: 32) {
              src
            }
            bigIcon: resize(width: 192) {
              src
            }
            appleIcon: resize(width: 180) {
              src
            }
          }
          logo {
            file {
              url
            }
          }
        }
      }
    `}
    render={(data) => {
      const { name, description, logo } = data.contentfulAbout
      const title = `${name}`
      const logoUrl = logo.file.url

      return (
        <ReactHelmet htmlAttributes={{ lang: 'en' }}>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="title" content={title} />
          <meta name="description" content={description} />

          <link rel="shortcut icon" href={logoUrl} />
          <meta name="theme-color" content={theme.background} />
          <meta name="image" content={logoUrl} />
          <meta itemProp="name" content={title} />
          <meta itemProp="description" content={description} />
          <meta itemProp="image" content={logoUrl} />
          <link rel="apple-touch-icon" sizes="180x180" href={logoUrl} />
          <link rel="icon" type="image/png" sizes="32x32" href={logoUrl} />
          <link rel="icon" type="image/png" sizes="16x16" href={logoUrl} />

          {/* START: Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta property="twitter:url" content="https://nathanbrachotte.dev/" />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={logoUrl} />
          <meta name="twitter:image:src" content={logoUrl} />
          {/* END: Twitter */}
          {/* START: Open graph / Facebook */}
          <meta property="og:url" content="https://nathanbrachotte.dev" />
          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
          <meta name="og:image" content={logoUrl} />
          <meta name="og:site_name" content={title} />
          <meta name="og:locale" content="en_US" />
          <meta name="og:type" content="website" />
          {/* END: Open graph / Facebook */}
        </ReactHelmet>
      )
    }}
  />
)

export default withTheme(Helmet as any)
