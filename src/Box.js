import React from 'react'
import {color} from './constants'

const boxStyle = (w, h) => {
    const size = Math.min(w, h) / 2
    const width = `${size}px`
    const height = `${size}px`
    const left = `${w / 2 - size}px`
    const top = `${h / 2 - size}px`
    const border = `5px solid ${color}`
    const position = 'absolute'
    return {width, height, position, left, top, border}
}

const Box = ({w, h, children, onClick}) => {
    return (<div onClick = {onClick} style = {boxStyle(w, h)}>
              {children}
          </div>)
}

export default Box
