import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Download from '../assets/svg/Download'
import { colors } from '../styles/colors'

const Button = styled.a``

const DownloadWrapper = styled.div`
  position: fixed;
  right: 2%;
  bottom: 20px;
  padding: 2px;
  z-index: 10;
`

class DownloadComponent extends PureComponent {
  render() {
    const { url } = this.props
    return (
      <DownloadWrapper>
        <Button href={url} download>
          <Download size={50} />
        </Button>
      </DownloadWrapper>
    )
  }
}

export const DownloadSection = DownloadComponent
