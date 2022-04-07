import { PageProps } from 'gatsby'
import React from 'react'
import Footer from '../components/Footer/Footer'
import SimpleHeader from '../components/Header/SimpleHeader'
import HeaderSection from '../components/Project/HeaderSection'
import { richText } from '../components/RichText'
import Layout from '../Layout'
import { Project } from '../types'

const project: React.FC<PageProps> = ({ pageContext }) => {
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
