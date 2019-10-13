import React, { Component } from 'react'
import PropTypes from 'prop-types'
import pdfjsLib from 'pdfjs-dist/webpack'
import styled from 'styled-components'
import ReactGA from 'react-ga'

import Viewer from './Viewer'
import Toolbar from './Toolbar'

import { colors } from '../styles/colors'
import { isMobile } from '../utils/web'

const AppWrapper = styled.div`
  text-align: center;
`
const AppHeader = styled.div`
  background-color: ${colors.DARK_BACKGROUND};
  height: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextHeader = styled.p`
  margin: 0;
  flex: 1;
  font-size: 20;
`
const AppBody = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
  bottom: 0;
  background-color: ${colors.BACKGROUND};
`

class App extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-149903423-1')
    ReactGA.pageview(window.location.pathname + window.location.search)

    let loadingTask = pdfjsLib.getDocument(this.props.url)
    loadingTask.promise.then(
      doc => {
        console.log(`Document ${this.props.url} loaded ${doc.numPages} page`)
        this.viewer.setState({
          doc,
        })
      },
      reason => {
        console.error(`Error during ${this.props.url} loading: ${reason}`)
      },
    )
  }

  zoomIn(e) {
    console.log({ scale: this.viewer.state.scale, e })

    this.viewer.setState({
      scale: this.viewer.state.scale * 1.1,
    })
  }

  zoomOut(e) {
    this.viewer.setState({
      scale: this.viewer.state.scale / 1.1,
    })
  }

  displayScaleChanged(e) {
    this.toolbar.setState({
      scale: e.scale,
    })
  }

  render() {
    return (
      <AppWrapper>
        <AppHeader>
          <TextHeader>
            My personal website is under construction, for now you may already
            want to take a look at my resume. Thank you for passing by 👨🏼‍💻
          </TextHeader>
        </AppHeader>
        <Toolbar
          ref={ref => (this.toolbar = ref)}
          onZoomIn={e => this.zoomIn(e)}
          onZoomOut={e => this.zoomOut(e)}></Toolbar>
        <AppBody>
          <Viewer
            ref={ref => (this.viewer = ref)}
            onScaleChanged={e => this.displayScaleChanged(e)}></Viewer>
        </AppBody>
      </AppWrapper>
    )
  }
}

App.propTypes = {
  url: PropTypes.string,
}

export default App
