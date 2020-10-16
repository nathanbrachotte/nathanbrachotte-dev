import React from 'react'
import Layout from '../Layout.tsx'
import Landing from '../screens/Landing.tsx'
import About from '../screens/About.tsx'
import Projects from '../screens/Projects.tsx'
import Writing from '../screens/Writing.tsx'
import Header from '../components/Header/Header.tsx'
import Footer from '../components/Footer/Footer.tsx'

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Writing />
    <Footer />
  </Layout>
)

export default IndexPage
