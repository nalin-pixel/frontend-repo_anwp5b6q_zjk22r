import React from 'react'
import { Github, Twitter, Linkedin, Mail, Phone, Calendar, MessageCircle } from 'lucide-react'

const items = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter X' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
]

export default function Socials() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-x-0 top-0 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Connect with us</h2>
            <p className="mt-3 text-neutral-300 max-w-xl">We share behind-the-scenes R&D, launch updates, and thought pieces on building premium AI experiences.</p>
            <div className="mt-6 flex items-center gap-4">
              {items.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-black/30 px-4 py-2 text-emerald-300 backdrop-blur-md hover:border-emerald-400/40 transition hover:scale-[1.03]">
                  <Icon className="h-5 w-5 text-emerald-300" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-tr from-emerald-500/40 to-emerald-300/40">
            <div className="rounded-2xl bg-neutral-900/60 border border-emerald-400/20 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 text-emerald-300/90">
                <Mail className="h-5 w-5" />
                <p className="text-sm">hello@eliteai.studio</p>
              </div>
              <div className="mt-3 flex items-center gap-3 text-emerald-300/90">
                <Phone className="h-5 w-5" />
                <p className="text-sm">+1 (555) 012-3456</p>
              </div>
              <a href="#calendar" className="mt-6 inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-black/30 px-4 py-2 text-emerald-300 hover:border-emerald-400/60 transition">
                <Calendar className="h-4 w-4" /> Book a discovery call
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="#contact" className="fixed bottom-6 right-6 group">
        <span className="absolute inset-0 -z-10 blur-xl bg-emerald-500/30 rounded-full scale-110 opacity-80 group-hover:opacity-100 transition" />
        <div className="rounded-full bg-emerald-500 p-4 text-black shadow-[0_0_20px_rgba(16,185,129,0.7)] hover:scale-105 transition">
          <MessageCircle className="h-6 w-6" />
        </div>
      </a>
    </section>
  )
}
