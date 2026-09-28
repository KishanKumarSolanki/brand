import { useState } from 'react'
import Reveal from './Reveal'

const serviceOptions = [
  'Brand Strategy',
  'Brand Identity',
  'Digital Presence',
  'Brand Growth',
  'Other',
]

export default function CtaBanner() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Form UI is ready. Connect a form backend to receive submissions.')
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-to-br from-white via-rose-100 to-red-500 px-6 py-16 sm:py-24"
    >
      {/* Premium Red + White Gradient Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.95),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(185,28,28,0.45),transparent_55%)]" />

      {/* Soft Red Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-red-400/20 blur-[100px]" />

      {/* White Glow */}
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/60 blur-[110px]" />

      <Reveal className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-red-700/10 bg-white/60 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-red-700 shadow-sm backdrop-blur-md">
            Ready?
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#260808] sm:text-5xl">
            Let&apos;s make your brand{' '}
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-rose-500 bg-clip-text text-transparent">
              impossible to ignore.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#5B2929]">
            Tell us about your project. Share a few details and let&apos;s explore
            how Brand Master can help your business grow.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-4xl rounded-3xl border border-white/15 bg-gradient-to-br from-[#180909] via-[#100707] to-[#240808] p-5 shadow-[0_25px_80px_rgba(80,0,0,0.28)] sm:mt-12 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label
                htmlFor="cta-name"
                className="mb-2 block text-sm font-medium text-white"
              >
                Full Name <span className="text-red-400">*</span>
              </label>

              <input
                id="cta-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-red-400 focus:bg-white/[0.07] focus:ring-2 focus:ring-red-500/20"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="cta-email"
                className="mb-2 block text-sm font-medium text-white"
              >
                Email Address <span className="text-red-400">*</span>
              </label>

              <input
                id="cta-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-red-400 focus:bg-white/[0.07] focus:ring-2 focus:ring-red-500/20"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="cta-phone"
                className="mb-2 block text-sm font-medium text-white"
              >
                Phone Number <span className="text-red-400">*</span>
              </label>

              <input
                id="cta-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-red-400 focus:bg-white/[0.07] focus:ring-2 focus:ring-red-500/20"
              />
            </div>

            {/* Date */}
            <div>
              <label
                htmlFor="cta-date"
                className="mb-2 block text-sm font-medium text-white"
              >
                Preferred Date
              </label>

              <input
                id="cta-date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-red-400 focus:bg-white/[0.07] focus:ring-2 focus:ring-red-500/20 [color-scheme:dark]"
              />
            </div>

            {/* Service Dropdown */}
            <div className="sm:col-span-2">
              <label
                htmlFor="cta-service"
                className="mb-2 block text-sm font-medium text-white"
              >
                What Service Are You Interested In?{' '}
                <span className="text-red-400">*</span>
              </label>

              <select
                id="cta-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/15 bg-[#180909] px-4 py-3 text-sm text-white outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-500/20"
              >
                <option value="" disabled className="bg-[#180909] text-gray-400">
                  Select a service
                </option>

                {serviceOptions.map((service) => (
                  <option
                    key={service}
                    value={service}
                    className="bg-[#180909] text-white"
                  >
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label
                htmlFor="cta-message"
                className="mb-2 block text-sm font-medium text-white"
              >
                Tell Us About Your Project
              </label>

              <textarea
                id="cta-message"
                name="message"
                rows={5}
                placeholder="Share a few details about your goals, ideas, or project..."
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-y rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm leading-relaxed text-white outline-none transition placeholder:text-gray-500 focus:border-red-400 focus:bg-white/[0.07] focus:ring-2 focus:ring-red-500/20"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center">
            <p className="text-xs text-gray-400">
              Fields marked * are required.
            </p>

            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-rose-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(220,38,38,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:from-red-500 hover:via-rose-500 hover:to-red-600 hover:shadow-[0_12px_35px_rgba(220,38,38,0.4)] sm:w-auto"
            >
              Submit Inquiry
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </button>
          </div>
        </form>
      </Reveal>
    </section>
  )
}