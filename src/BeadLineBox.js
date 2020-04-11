import BeadLine from './BeadLine'
import Box from './Box'
import {useDimension, useAnimatedScale} from './hooks'
import React from 'react'

const beadLines = (n, gap, scale, size) => {
    const beadLineArray = []
    for (var i = 0; i < n; i++) {
        beadLineArray.push(<BeadLine size = {size} n = {n} scale = {scale}/ gap = {gap} i = {i}/>)
    }
    return beadLineArray
}
const BeadLineBox = ({n}) => {
    const {w,h,resize} = useDimension()
    const {scale, start} = useAnimatedScale(0.02, 20)
    const gap = (w / 2) / (n + 1)
    return {
        <Box onClick = {start} w = {w} h = {h}>
            {beadLines(n, gap, scale, w / 2)}
        </Box>
    }
}
