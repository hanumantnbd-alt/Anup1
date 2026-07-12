'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    // Add your form submission logic here
    setTimeout(() => {
      setIsLoading(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Message sent successfully!')
    }, 1000)
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 font-display">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-300">
              Have a project in mind? Let's discuss how I can help.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4 md:px-8 bg-slate-950">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="card-premium">
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full disabled:opacity-50"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
