import React, { useEffect, useRef } from 'react'

// Canvas-based animated grain for subtle film texture
export default function Grain({ opacity = 0.08 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animationId
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const { width, height } = canvas
      const imageData = ctx.createImageData(width, height)
      for (let i = 0; i < imageData.data.length; i += 4) {
        const val = Math.random() * 255
        imageData.data[i] = val
        imageData.data[i + 1] = val
        imageData.data[i + 2] = val
        imageData.data[i + 3] = opacity * 255
      }
      ctx.putImageData(imageData, 0, 0)
      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [opacity])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 opacity-40 mix-blend-soft-light" />
}
