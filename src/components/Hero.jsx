import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-[#070B0D]" />

      {/* Neon radial glow */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-emerald-600/10 blur-[140px]" />

      {/* Grain overlay */}
      {/* Added via Grain component at app root */}

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient stroke frame */}
      <div className="pointer-events-none absolute inset-6 rounded-[28px] bg-gradient-to-b from-emerald-500/20 via-transparent to-emerald-500/10 p-[1px]">
        <div className="h-full w-full rounded-[27px] bg-black/20 backdrop-blur-xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-400/5 px-4 py-2 text-xs tracking-widest text-emerald-300/80 backdrop-blur-md">
            ELITE AI STUDIO
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            Let's Create Something Powerful
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl">
            We craft cinematic, intelligent experiences that feel futuristic and effortless. Precision design, bold aesthetics, and automation-first builds.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="group relative inline-flex items-center gap-3 rounded-xl px-6 py-3 text-black">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-emerald-400 to-emerald-300" />
              <span className="absolute inset-0 -z-10 rounded-xl blur-xl bg-emerald-500/40 group-hover:bg-emerald-500/60 transition-colors" />
              <span className="relative font-semibold">Start a Project</span>
            </a>
            <a href="#calendar" className="relative inline-flex items-center gap-3 rounded-xl px-[1px] py-[1px]">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-emerald-400/50 to-emerald-300/50" />
              <span className="relative rounded-[11px] px-6 py-3 text-emerald-300 bg-black/30 backdrop-blur-xl border border-emerald-400/20 hover:border-emerald-400/40 transition-colors">
                Book a Call
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
