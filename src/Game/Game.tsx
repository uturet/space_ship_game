import React, { useEffect, useState } from 'react'

function Game (): JSX.Element {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>()
  const width = window.innerWidth
  const height = window.innerHeight
  const [x, setX] = useState(width / 2)
  const [y, setY] = useState(height / 2)

  useEffect(() => {
    const interval = setInterval(() => {
      setX((v) => v + 1)
      setY((v) => v + 1)
    }, 16)
    return () => { clearInterval(interval) }
  }, [x, y])

  useEffect(() => {
    if (ctx !== null && ctx !== undefined) {
      const a = 2 * Math.PI / 6
      const r = 50
      ctx.clearRect(0, 0, width, height)


      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i))
      }
      ctx.closePath()
      ctx.stroke()
    }
  }, [ctx, x, y])

  return <canvas
    ref={(canvas) => {
      const context = canvas?.getContext('2d')
      if (context !== null && context !== undefined) {
        setCtx(context)
      }
    }}
    width={width}
    height={height}
    className="w-screen h-screen">

  </canvas>
}

export default Game
