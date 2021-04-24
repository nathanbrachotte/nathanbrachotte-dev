import React from 'react'
import { PageProps } from 'gatsby'
import SimpleHeader from '../components/Header/SimpleHeader'
import Footer from '../components/Footer/Footer'

import Layout from '../Layout'
import Post from '../screens/Post/Post'

const PostPage: React.FC<PageProps> = ({ ...pageProps }) => {
  return (
    <Layout>
      <SimpleHeader />
      <Post {...pageProps} />
      <Footer />
    </Layout>
  )
}

export default PostPage