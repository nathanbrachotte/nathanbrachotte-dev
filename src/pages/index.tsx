import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Layout from '../Layout'
import About from '../sections/About/About'
import BlogPosts from '../sections/BlogPosts/BlogPosts'
import Projects from '../sections/Projects/Projects'
import Timeline from '../sections/Timeline/Timeline'

const IndexPage: React.FC = () => (
  <Layout>
    <Header />
    <About />
    <Projects />
    <BlogPosts />
    <Timeline />
    <Footer />
  </Layout>
)

export default IndexPage
