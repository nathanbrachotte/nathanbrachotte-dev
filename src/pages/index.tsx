import React from 'react'
import Layout from '../Layout'
import Landing from '../screens/Landing'
import About from '../screens/About'
import Projects from '../screens/Projects'
import BlogPosts from '../screens/BlogPosts'
import Writing from '../screens/Writing'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const IndexPage: React.FC = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <BlogPosts />
    <Writing />
    <Footer />
  </Layout>
)

export default IndexPage
