"use client";
import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Copy from '../Components/TextAnimation/Copy'

const serviceChips = [
  { label: 'Food & Catering', icon: '🍽' },
  { label: 'Decor & Florals', icon: '🌸' },
  { label: 'Music & DJ', icon: '🎵' },
  { label: 'Photography', icon: '📸' },
  { label: 'Lighting', icon: '💡' },
  { label: 'MC / Host', icon: '🎤' },
]

const packages = [
  {
    id: 'end-to-end',
    num: '2',
    label: 'Full service',
    title: 'End-to-End Grand',
    description:
      'Complete event management from concept to cleanup. We handle every detail — venue, vendors, timeline — so you can simply enjoy the moment.',
    inclusions: ['Venue Sourcing', 'Vendor Management', 'On-site Coordination', 'Post-event Wrap-up'],
  },
  {
    id: 'social-spark',
    num: '3',
    label: 'Up to 50 guests',
    title: 'Small Get-Together',
    description:
      'Warm, intimate, and personal. Curated for birthdays, anniversaries, baby showers, and cozy house parties that deserve a special touch.',
    inclusions: ['Themed Decor', 'Curated Catering', 'Entertainment Setup'],
  },
  {
    id: 'corporate',
    num: '4',
    label: 'Professional',
    title: 'Corporate & Brand',
    description:
      'Elevate your professional events. Product launches, conferences, office celebrations — executed with precision and polish.',
    inclusions: ['AV & Tech Setup', 'Branding & Signage', 'Guest Registration', 'Live Streaming'],
  },
]

export default function PackagesSection() {
  return (
    <section className="w-screen bg-white py-24 px-4" id="packages">
      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <div className="flex flex-col items-center mb-16">
          <span className="font-body text-xs tracking-[0.18em] border border-gray-300 rounded-full px-5 py-1.5 text-gray-600 mb-6 uppercase">
            Packages
          </span>
         
          <Copy delay={0.5} type="slide">
            <p className="font-body text-2xl text-black text-center max-w-lg ">
              Every event is different — so are our packages. Whether you need us end-to-end or just want to pick and choose, we have a plan built around your needs.
            </p>
          </Copy>
        </div>

        {/* ── Cards grid ── */}
        <div className="flex flex-col md:flex-row gap-3 md:items-stretch">

          {/* ── Featured card: Build Your Own ── */}
          <div className="w-full md:w-[38%] bg-black rounded-2xl p-6 flex flex-col gap-5 justify-between">
            <div>
              <Copy delay={0.3} type="slide">
                <span className="font-title text-6xl text-white leading-none">1</span>
              </Copy>
              <Copy delay={0.4} type="slide">
                <h3 className="font-title text-3xl text-white leading-snug mt-1">
                  Build Your Own Package
                </h3>
              </Copy>
              <span className="inline-block font-body text-[10px] tracking-widest uppercase text-white border border-white rounded-full px-3 py-1 mt-2">
                Most Flexible
              </span>
            </div>

            <Copy delay={0.5} type="slide">
              <p className="font-body text-sm text-white/50 leading-relaxed">
                Your event, your rules. Mix and match services to craft a package that's perfectly tailored to your vision — no compromises, no unnecessary extras.
              </p>
            </Copy>

            {/* Service chips */}
            <div className="flex flex-wrap gap-2">
              {serviceChips.map((chip) => (
                <span
                  key={chip.label}
                  className="font-body text-xs text-white bg-white/10 border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-1.5"
                >
                  <span>{chip.icon}</span>
                  {chip.label}
                </span>
              ))}
              <span className="font-body text-xs text-white/40 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                + more
              </span>
            </div>

            {/* CTA */}
            <div>
              <a
                href="mailto:contact@momentifyevents.com"
                className="inline-flex items-center gap-2 bg-white text-black text-sm font-body px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                Customize Now
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* ── Right side: 3 cards ── */}
          <div className="flex-1 flex flex-col gap-3">

            {/* Top row: 2 cards */}
            <div className="flex flex-col sm:flex-row gap-3 flex-1 items-stretch">
              {packages.slice(0, 2).map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>

            {/* Bottom row: 1 full-width card */}
            <div className="flex flex-1 items-stretch">
              <PackageCard pkg={packages[2]} />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

function PackageCard({ pkg }) {
  return (
    <div className="bg-[#f2f2f0] rounded-2xl p-5 flex flex-col justify-between flex-1">
      {/* Number + title */}
      <div>
        <Copy delay={0.3} type="slide">
          <span className="font-title text-6xl text-black  leading-none">{pkg.num}</span>
        </Copy>
        <div className="flex items-start justify-between mt-1">
          <Copy delay={0.4} type="slide">
            <h3 className="font-title text-2xl text-black leading-snug">{pkg.title}</h3>
          </Copy>
          {/* <span className="font-body text-[10px] tracking-widest uppercase text-gray-400 border border-gray-300 rounded-full px-3 py-1 ml-3 shrink-0 mt-1">
            {pkg.label}
          </span> */}
        </div>
      </div>

      {/* Inclusions */}
      <ul className="flex flex-col gap-1.5 mt-4">
        {pkg.inclusions.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0" />
            <span className="font-body text-xs text-gray-500">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
