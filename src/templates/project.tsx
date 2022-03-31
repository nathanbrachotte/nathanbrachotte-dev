import React from 'react'
import { PageProps } from 'gatsby'

import { richText } from '../components/RichText'
import Layout from '../Layout'
import Section from '../components/Section'
import Background from './Background'
import SimpleHeader from '../components/Header/SimpleHeader'
import Footer from '../components/Footer/Footer'
import Heading1 from '../shared/Heading1'

const activity: React.FC<PageProps> = ({ pageContext, ...rest }) => {
  const data = pageContext
  console.log({ pageContext })
  const currentPost = null
  const createdAt2 = 'dsa'

  return (
    <Layout>
      <SimpleHeader />
      <Section.Container id="none" Background={Background} maxHeight={84}>
        <div className="flex flex-1 flex-col container mx-auto">
          <div className="self-center">
            <Heading1>{data.name}</Heading1>
          </div>
          <div className="self-center w-full sm:w-4/5  md:w-2/3">
            {richText(data.content.content)}
          </div>
          <div className="flex-auto bg-blue-300" />
        </div>
      </Section.Container>
      <Footer />
    </Layout>
  )
}

export default activity
