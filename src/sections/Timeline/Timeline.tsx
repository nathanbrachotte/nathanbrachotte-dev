import React from 'react'
import { SimpleTimeline } from '../SimpleTimeline/SimpleTimeline'
import Section from '../../components/Section'
import Background from './Background'

const Timeline: React.FC = () => {
  return (
    <Section.Container id="Recommendations" Background={Background}>
      <Section.Header name="Recommendations" icon="✨" label="speech bubble" />
      <div className="pl-4 md:p-4">
        <SimpleTimeline />
      </div>
    </Section.Container>
  )
}

export default Timeline
