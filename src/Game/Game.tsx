import React, { useEffect, useState } from 'react'

function Game (): JSX.Element {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>()
  const width = window.innerWidth
  const height = window.innerHeight
  const [x, setX] = useState(width / 2)
  const [y, setY] = useState(height / 2)

  useEffect(() => {
    const interval = setInterval(() => {
      setX((v) => v)
      setY((v) => v)
    }, 16)
    return () => { clearInterval(interval) }
  }, [x, y])

  useEffect(() => {
    if (ctx !== null && ctx !== undefined) {
      ctx.clearRect(0, 0, width, height)
      // const blueColor = '#283891'
      const blueColor = '#983891'
      const grayColor = '#58585A'

      ctx.beginPath()
      ctx.lineWidth = 0
      ctx.strokeStyle = blueColor
      ctx.fillStyle = blueColor
      const midw = 655
      const midh = height / 2
      const shift = 170

      ctx.ellipse(midw, (midh) + 75, 210, 70, 0, Math.PI * 7 / 8, Math.PI * 34 / 16)
      ctx.fill()

      // Wing
      ctx.beginPath()
      ctx.moveTo(midw - shift, 494)
      ctx.lineTo(midw, 430)
      ctx.lineTo(midw + shift, 494)
      ctx.closePath()
      ctx.fillStyle = blueColor
      ctx.fill()

      // Nose
      ctx.beginPath()
      ctx.moveTo(midw - 55, 425)
      ctx.lineTo(midw - 55, 400)
      ctx.lineTo(midw - 10, 335)
      ctx.lineTo(midw + 10, 335)
      ctx.lineTo(midw + 55, 400)
      ctx.lineTo(midw + 55, 425)
      ctx.closePath()
      ctx.stroke()
      ctx.fillStyle = blueColor
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(midw - 55, 425)
      ctx.lineTo(midw - 50, 430)
      ctx.lineTo(midw - 50, 470)
      ctx.lineTo(midw + 50, 470)
      ctx.lineTo(midw + 50, 430)
      ctx.lineTo(midw + 55, 425)
      ctx.closePath()

      ctx.fillStyle = grayColor
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(midw - 50, 580)
      ctx.lineTo(midw - 50, 520)
      ctx.lineTo(midw - 40, 520)
      ctx.lineTo(midw - 35, 510)
      ctx.lineTo(midw - 10, 500)
      ctx.lineTo(midw + 10, 500)
      ctx.lineTo(midw + 35, 510)
      ctx.lineTo(midw + 40, 520)
      ctx.lineTo(midw + 50, 520)
      ctx.lineTo(midw + 50, 580)
      ctx.closePath()

      ctx.fillStyle = grayColor
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(midw - 50, 580)
      ctx.lineTo(midw - 50, 520)
      ctx.lineTo(midw - 40, 520)
      ctx.lineTo(midw - 35, 510)
      ctx.lineTo(midw - 10, 500)
      ctx.lineTo(midw + 10, 500)
      ctx.lineTo(midw + 35, 510)
      ctx.lineTo(midw + 40, 520)
      ctx.lineTo(midw + 50, 520)
      ctx.lineTo(midw + 50, 580)
      ctx.closePath()

      ctx.fillStyle = grayColor

      ctx.fill()
      ctx.translate(midw, midh)
      ctx.rotate(Math.PI / 2)
      ctx.translate(-midw, -midh)
    }
  }, [ctx, x, y])

  return <div>
    <img style={{
      width: '500px',
      position: 'absolute',
      left: '405px',
      top: '209px',
      opacity: 0.5

    }} src="./space-ship.png" alt="" />
    <canvas
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
  </div>
}

export default Game
