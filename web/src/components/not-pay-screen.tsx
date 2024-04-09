'use client'

import React, { useState, useEffect } from 'react'

export default function NotPayScreen() {
  const [emoji, setEmoji] = useState('😕')

  useEffect(() => {
    const interval = setInterval(changeEmoji, 1000)
    return () => clearInterval(interval)
  }, [])

  const changeEmoji = () => {
    const emojis = ['😕', '😮', '🤔', '😩']
    const randomIndex = Math.floor(Math.random() * emojis.length)
    setEmoji(emojis[randomIndex])
  }

  return (
    <div
      className="relative flex h-screen flex-col items-center justify-center bg-neutral-800 text-2xl font-semibold text-white"
      style={{ textAlign: 'center', paddingTop: '50px' }}
    >
      <h2>Ops!</h2>
      <p>O site está temporariamente fora do ar {emoji}</p>
    </div>
  )
}
