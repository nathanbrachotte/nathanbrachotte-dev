import React from 'react'
import { Heading, Box } from 'rebass/styled-components'
import Layout from '../Layout'
import Section from '../components/Section'
import Triangle from '../shared/Triangle'

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="secondaryLight"
      height={['10vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
      invertY
    />
  </div>
)

const NotFoundPage = () => (
  <Layout>
    <Section.Container id="404" Background={Background}>
      <Box width={[320, 400, 600]} m="auto">
        <Heading color="textDark" fontSize={['8rem', '12rem', '14rem']} as="h1">
          404
        </Heading>
        <Heading color="text" fontSize={['4rem', '5rem', '6rem']} as="h2">
          There isn&apos;t anything here
        </Heading>
      </Box>
    </Section.Container>
  </Layout>
)

export default NotFoundPage
