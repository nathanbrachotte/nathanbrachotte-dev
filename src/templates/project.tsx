import React from 'react'
import { PageProps } from 'gatsby'

import clsx from 'clsx'
import { richText } from '../components/RichText'
import Layout from '../Layout'

import SimpleHeader from '../components/Header/SimpleHeader'
import Footer from '../components/Footer/Footer'
import LinkAnimated from '../components/LinkAnimated'

import AppStore from '../../media/AppStore'
import PlayStore from '../../media/PlayStore'
import { getTechnoIcon } from '../helpers/getTechnoIcon'
import HeaderProjectImage from '../components/Project/HeaderProjectImage'
import { SocialLink } from '../sections/Landing/SocialLink'

const project: React.FC<PageProps> = ({ pageContext, ...rest }) => {
  const data = pageContext
  const currentPost = null
  const createdAt2 = 'dsa'
  const headerImageUrl = data?.headerImage?.file?.url
  const title = data?.name
  const workDone = data?.workDone
  const description = data?.description
  const projectUrl = data?.projectUrl
  const appleStoreUrl = data?.appleStoreUrl
  const playStoreUrl = data?.playStoreUrl

  console.log(pageContext)

  const technos = data?.tool

  return (
    <Layout>
      <SimpleHeader />
      <div className="min-h-screen flex flex-1 flex-col mb-8">
        <div className="flex flex-row mb-16">
          <div className="flex flex-col justify-center items-start basis-2/5 px-16">
            <span className="text-sm mb-4">{workDone}</span>
            <LinkAnimated selected>
              <span className="text-3xl text-textDark">
                <span className={clsx(projectUrl && 'mr-2')}>{title}</span>
                {projectUrl ? (
                  <SocialLink
                    name="See project"
                    fontAwesomeIcon="globe"
                    url={projectUrl}
                  />
                ) : null}
              </span>
            </LinkAnimated>
            <span className="mt-4 mb-4">{description}</span>
            {technos && technos.length > 0 && (
              <div className="flex flex-row items-end mb-8">
                <span className="mr-2 text-md">Built with:</span>
                {data.tool.map((t) => {
                  return (
                    <div className="transition duration-200  hover:scale-110 mr-2">
                      {getTechnoIcon(t, 35)}
                    </div>
                  )
                })}
              </div>
            )}
            {appleStoreUrl || playStoreUrl ? (
              <div className="flex flex-row w-full items-center justify-center">
                {!!appleStoreUrl && (
                  <a href={appleStoreUrl} target="_blank" rel="noreferrer">
                    <AppStore width={100} />
                  </a>
                )}
                {!!playStoreUrl && (
                  <a href={playStoreUrl} target="_blank" rel="noreferrer">
                    <PlayStore width={125} />
                  </a>
                )}
              </div>
            ) : null}
          </div>
          <div className="basis-3/5">
            {headerImageUrl && (
              <HeaderProjectImage url={headerImageUrl} alt="project header" />
            )}
          </div>
        </div>
        <div className="self-center w-full sm:w-4/5  md:w-2/3">
          {richText(data.content.content)}
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default project
