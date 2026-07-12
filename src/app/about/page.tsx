'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 font-display">
              About Me
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Passionate developer and designer creating amazing digital experiences
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-4 md:px-8 bg-slate-950">
          <div className="max-w-4xl mx-auto">
            <div className="card-premium mb-8">
              <h2 className="text-3xl font-bold mb-6 font-display">My Journey</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                With over a decade of experience in web development and design, I've helped countless businesses
                transform their digital presence. My passion lies in creating beautiful, functional, and user-centric
                digital solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in modern web technologies, animation frameworks, and creating premium digital experiences
                that leave lasting impressions.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
