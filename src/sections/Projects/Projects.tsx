import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Fade from 'react-reveal/Fade'
import ProjectCard from '../../components/ProjectCard'
import Section from '../../components/Section'
import Heading3 from '../../shared/Heading3'
import Triangle from '../../shared/Triangle'

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />
    <Triangle
      color="primaryLight"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
)

const Projects: React.FC = () => (
  <Section.Container id="projects" Background={Background} minHeight={20}>
    <Section.Header
      name="Projects"
      icon="💻"
      label="notebook"
      Subtitle={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <div className="mb-2">
          <Heading3>A curated list of projects I worked on:</Heading3>
        </div>
      }
    />

    <StaticQuery
      query={graphql`
        query ProjectsQuery {
          allContentfulProject(sort: { fields: publishedDate, order: DESC }) {
            nodes {
              id
              name
              description
              projectUrl
              repositoryUrl
              publishedDate(formatString: "YYYY")
              type
              logo {
                title
                image: resize(width: 200, quality: 100) {
                  src
                }
              }
              slug
              isSideProject
            }
          }
        }
      `}
      render={({ allContentfulProject }) => {
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
            {allContentfulProject.nodes.map((p, i) => {
              return (
                <Fade bottom delay={i * 200} key={p.id}>
                  <ProjectCard {...p} />
                </Fade>
              )
            })}
          </div>
        )
      }}
    />
  </Section.Container>
)

export default Projects
