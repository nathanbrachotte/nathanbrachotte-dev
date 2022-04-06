import React from 'react'
import { PageProps } from 'gatsby'

import { richText } from '../components/RichText'
import Layout from '../Layout'

import SimpleHeader from '../components/Header/SimpleHeader'
import Footer from '../components/Footer/Footer'

import { Project } from '../types'
import HeaderSection from '../components/Project/HeaderSection'

const project: React.FC<PageProps> = ({ pageContext, ...rest }) => {
  const data = pageContext as Project

  const {
    name: title,
    workDone,
    description,
    projectUrl,
    appleStoreUrl,
    playStoreUrl,
    tool: techs,
    headerImage: {
      file: { url: headerImageUrl },
    },
    content: { content: body },
  } = data

  return (
    <Layout>
      <SimpleHeader />
      <div className="min-h-screen flex flex-1 flex-col mb-8">
        <HeaderSection
          title={title}
          workDone={workDone}
          description={description}
          projectUrl={projectUrl}
          appleStoreUrl={appleStoreUrl}
          playStoreUrl={playStoreUrl}
          techs={techs}
          headerImageUrl={headerImageUrl}
        />
        <div className="self-center w-full px-8 lg:w-2/3 lg:px-16">
          {richText(body)}
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default project
