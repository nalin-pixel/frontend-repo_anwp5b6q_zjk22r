import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Tell us about your vision</h3>
            <p className="mt-4 text-neutral-300 max-w-xl">Share goals, timeline, and what makes this special. We reply within 24 hours with next steps.</p>
            <ul className="mt-6 space-y-2 text-neutral-400 text-sm">
              <li>• AI product/feature definition</li>
              <li>• Creative direction & cinematic visuals</li>
              <li>• Full-stack engineering with automation</li>
            </ul>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl p-[1px] bg-gradient-to-tr from-emerald-500/40 to-emerald-300/40"
          >
            <div className="rounded-2xl bg-neutral-900/60 border border-emerald-400/20 p-6 md:p-8 backdrop-blur-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-neutral-300 mb-2">Name</label>
                  <input required className="w-full rounded-lg bg-black/40 border border-emerald-400/20 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm text-neutral-300 mb-2">Email</label>
                  <input required type="email" className="w-full rounded-lg bg-black/40 border border-emerald-400/20 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="jane@company.com" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-neutral-300 mb-2">Project details</label>
                  <textarea rows="5" className="w-full rounded-lg bg-black/40 border border-emerald-400/20 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="What are we creating together?" />
                </div>
              </div>

              {status === 'idle' && (
                <button className="mt-6 group relative inline-flex items-center justify-center rounded-xl px-6 py-3 text-black">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-emerald-400 to-emerald-300" />
                  <span className="absolute inset-0 -z-10 rounded-xl blur-xl bg-emerald-500/40 group-hover:bg-emerald-500/60 transition-colors" />
                  <span className="relative font-semibold">Send message</span>
                </button>
              )}

              {status === 'loading' && (
                <div className="mt-6 inline-flex items-center gap-3 text-emerald-300">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-400 border-t-transparent" />
                  Sending...
                </div>
              )}

              {status === 'success' && (
                <div className="mt-6 rounded-lg border border-emerald-400/30 bg-black/30 p-4 text-emerald-200">
                  Thanks! Your message has been received. We	ll get back to you shortly.
                </div>
              )}

              <div id="calendar" className="mt-10">
                <p className="text-sm text-neutral-400 mb-2">Prefer a quick call?</p>
                <a href="https://cal.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-black/30 px-4 py-2 text-emerald-300 hover:border-emerald-400/60 transition">
                  Open calendar
                </a>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
