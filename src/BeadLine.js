import React from 'react'
import {sinify, divideScale} from './util'
import {color} from './constants'

const beadSizeFactor = 3
const lineWidthFactor = 35



const beadStyle = (size, scale, beadSize) => {
    const width = `${beadSize}px`
    const height = `${beadSize}px`
    const position = 'absolute'
    const left = `${size * scale - beadSize / 2}px`
    const bordeRadius = '50%'
    const background = color
    return {position, width, height, left, bordeRadius}
}

const lineStyle = (size, scale) => {
      const width = `${size * scale}px`
      const height = `${size / lineWidthFactor}px`
      const background = color
      return {width, height, background}
}

const BeadLine = ({size, scale, i, gap, n}) => {
    const sc = divideScale(sinify(scale), i, n)
    return <div style = {position : 'absolute', top : `${gap * i}px`}>
              <div style = {beadStyle(size, sc, gap / beadSizeFactor)}>
              </div>
              <div style = {lineStyle(size, sc)}>
              </div>
          </div>
}
export default BeadLine
