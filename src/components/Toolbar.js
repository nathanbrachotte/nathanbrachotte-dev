import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../styles/colors'
import { DownloadSection } from './DownloadSection'

const ZoomWrapper = styled.div`
  position: fixed;
  right: 2%;
  top: 80px;
  width: 100px;
  height: 50px;
  background-color: ${colors.DARK_BACKGROUND};
  border: 2px solid ${colors.SECONDARY};
  border-radius: 7px;
  padding: 2px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`

const Zoom = styled.button`
  border: 1px solid #888;
  border-radius: 10px;
  background-color: ${colors.WHITE};
  width: 20px;
  height: 20px;
  font-weight: bold;
  color: black;
  margin: 2px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`

const ZoomPercent = styled.div`
  flex-grow: 1;
  text-align: center;
  font-size: 16px;
  color: white;
  margin: 2px;
`

class Toolbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scale: 0,
    }
  }

  zoomIn(e) {
    if (this.props.onZoomIn) {
      this.props.onZoomIn(e)
    }
  }

  zoomOut(e) {
    if (this.props.onZoomOut) {
      this.props.onZoomOut(e)
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.scale !== nextState.scale) {
      return true
    }
    return false
  }
  render() {
    const { url } = this.props
    return (
      <Fragment>
        <DownloadSection url={url} />
        <ZoomWrapper>
          <div>
            <Zoom onClick={e => this.zoomIn(e)}>+</Zoom>
            <Zoom onClick={e => this.zoomOut(e)}>-</Zoom>
          </div>
          <ZoomPercent>{(this.state.scale * 100).toFixed(1)}%</ZoomPercent>
        </ZoomWrapper>
      </Fragment>
    )
  }
}

Toolbar.propTypes = {
  onZoomIn: PropTypes.func,
  onZoomOut: PropTypes.func,
}

export default Toolbar
