import React from 'react'

export default function Footer() {
  return (
    <footer className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-emerald-400/20 bg-black/30 backdrop-blur-xl p-6 flex items-center justify-between">
          <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} Elite AI Studio. All rights reserved.</p>
          <div className="text-neutral-400 text-sm">Built with precision & imagination.</div>
        </div>
      </div>
    </footer>
  )
}
