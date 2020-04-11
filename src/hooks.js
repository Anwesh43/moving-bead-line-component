export const useAnimatedScale = (scGap, dir) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            if (!animated) {
                var currScale  = scale
                setAnimated(true)
                setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                    }
                })
            }
        }
    }
}
