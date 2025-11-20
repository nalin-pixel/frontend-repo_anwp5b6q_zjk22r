import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Socials from './components/Socials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Grain from './components/Grain'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#070B0D] text-white">
      {loading && <Loader />}

      {/* Subtle animated grain */}
      <Grain opacity={0.07} />

      {/* Floating emerald highlight bar */}
      <div className="pointer-events-none fixed top-16 left-1/2 -translate-x-1/2 h-24 w-[68vw] rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Neon border around page */}
      <div className="pointer-events-none fixed inset-0 p-3">
        <div className="h-full w-full rounded-[22px] border border-emerald-500/10" />
      </div>

      <Hero />

      {/* Divider */}
      <div className="mx-auto my-16 h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

      <Socials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
