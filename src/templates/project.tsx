import React from 'react'
import { PageProps } from 'gatsby'

import { richText } from '../components/RichText'
import Layout from '../Layout'

import Section from '../components/Section'
import Background from './Background'
import SimpleHeader from '../components/Header/SimpleHeader'
import Footer from '../components/Footer/Footer'
import Heading1 from '../shared/Heading1'
import LinkAnimated from '../components/LinkAnimated'

import AppStore from '../../media/AppStore'
import PlayStore from '../../media/PlayStore'
import { getTechnoIcon } from '../helpers/getTechnoIcon'
import Image from '../shared/Image'
import HeaderProjectImage from '../components/Project/HeaderProjectImage'

const project: React.FC<PageProps> = ({ pageContext, ...rest }) => {
  const data = pageContext
  const currentPost = null
  const createdAt2 = 'dsa'
  const headerImageUrl = data?.headerImage?.file?.url

  console.log({ headerImageUrl, pageContext })

  const technos = data?.tool

  return (
    <Layout>
      <SimpleHeader />
      {/* <Section.Container id="none" Background={Background} minHeight={84}> */}
      <div className="relative right-0">
        <div>
          <div className="flex flex-1 flex-row">
            <div className="flex-1">
              <LinkAnimated selected>
                <span className="text-3xl text-textDark">{data.name} </span>
              </LinkAnimated>
            </div>
            <div className="flex-1">
              {headerImageUrl && (
                <HeaderProjectImage
                  url={headerImageUrl}
                  // width={50}
                  // height={50}
                  alt="project header"
                />
              )}
            </div>
          </div>
          {technos && technos.length > 0 && (
            <div className="flex flex-row">
              {data.tool.map((t) => {
                return getTechnoIcon(t)
              })}
            </div>
          )}
          <div className="self-center w-full sm:w-4/5  md:w-2/3">
            {richText(data.content.content)}
          </div>
          <div className="flex flex-row">
            {data.appleStoreUrl && <AppStore width={100} />}
            {data.playStoreUrl && <PlayStore width={100} />}
          </div>
        </div>
      </div>
      {/* </div> */}
      <Footer />
    </Layout>
  )
}

export default project
