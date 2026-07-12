'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Animate hero elements
    const timeline = gsap.timeline()

    timeline
      .from('.hero-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from(
        '.hero-subtitle',
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      .from(
        '.hero-cta',
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.4'
      )

    setIsLoading(false)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-8">
          <h1 className="hero-title text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 font-display">
            Anup's Portfolio
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Creating world-class digital experiences through innovative design and cutting-edge development
          </p>

          <div className="hero-cta flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/50"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-purple-500 hover:bg-purple-500/10 text-white rounded-lg font-semibold transition-all"
            >
              Get in Touch
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-purple-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-20 px-4 md:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: '/about', title: 'About', icon: '👤' },
              { href: '/skills', title: 'Skills', icon: '⚡' },
              { href: '/services', title: 'Services', icon: '🎯' },
              { href: '/portfolio', title: 'Portfolio', icon: '🖼️' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
