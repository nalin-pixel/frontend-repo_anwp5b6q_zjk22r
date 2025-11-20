import React from 'react'

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0f12]">
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-2 border-neutral-800"></div>
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-emerald-400/80 drop-shadow-[0_0_18px_rgba(16,185,129,0.8)]"></div>
          <div className="absolute inset-2 rounded-full blur-xl bg-emerald-500/10"></div>
        </div>
        <p className="text-sm tracking-widest uppercase text-neutral-400">
          Loading experience
        </p>
      </div>
    </div>
  )
}
