import React from 'react'
import Layout from '../Layout'
import Landing from '../sections/Landing/Landing'
import About from '../sections/About/About'
import Projects from '../sections/Projects/Projects'
import BlogPosts from '../sections/BlogPosts/BlogPosts'
import Writing from '../sections/Writing/Writing'
import Timeline from '../sections/Timeline/Timeline'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import TwTriangles from '../shared/TwTriangles'

const IndexPage: React.FC = () => (
  <Layout>
    <Header />
    <About />
    <Projects />
    <BlogPosts />
    <Timeline />
    {/* <Writing /> */}
    <Footer />
  </Layout>
)

export default IndexPage
