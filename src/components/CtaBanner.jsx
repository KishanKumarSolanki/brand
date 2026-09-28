import { useState } from 'react'
import { ArrowUpRight, Send } from 'lucide-react'
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

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    alert(
      'Form UI is ready. Connect a form backend to receive submissions.'
    )
  }

  return (
    <section
      id="contact"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#220003]
        px-5
        py-16
        font-['Inter',Arial,Helvetica,sans-serif]
        sm:px-6
        sm:py-24
        lg:py-28
      "
    >

      {/* =========================================
          DEEP RED BACKGROUND
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_78%_20%,#D61521_0%,#9C050C_32%,#500006_67%,#220003_100%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(135deg,rgba(0,0,0,0.10)_0%,transparent_42%,rgba(0,0,0,0.25)_100%)]
        "
      />

      {/* Red Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[160px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#D61521]/40
          blur-[140px]
        "
      />

      {/* Left Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          top-[35%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#CF1B28]/20
          blur-[130px]
        "
      />

      {/* Bottom Black Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-[250px]
          left-1/2
          h-[520px]
          w-[850px]
          -translate-x-1/2
          rounded-full
          bg-black/40
          blur-[130px]
        "
      />

      {/* Diagonal Shine */}
      <div
        className="
          pointer-events-none
          absolute
          inset-[-20%_-10%]
          bg-[linear-gradient(135deg,transparent_45%,rgba(255,255,255,0.045)_45%,rgba(255,255,255,0.045)_56%,transparent_56%)]
        "
      />

      {/* Dot Pattern */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.055]
          bg-[radial-gradient(circle,rgba(255,255,255,0.9)_1px,transparent_1px)]
          bg-[length:28px_28px]
        "
        style={{
          maskImage:
            'radial-gradient(ellipse at center, black 0%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 0%, transparent 75%)',
        }}
      />

      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <Reveal className="relative z-10 mx-auto w-full max-w-[1050px]">

        {/* =========================================
            HEADING
        ========================================= */}

        <div className="mx-auto max-w-[780px] text-center">

          {/* Eyebrow */}
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/15
              bg-white/[0.06]
              px-4
              py-2
              text-[10px]
              font-[800]
              uppercase
              tracking-[3px]
              text-white/80
              backdrop-blur-md
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#FFD800] opacity-40" />
              <span className="relative h-2 w-2 rounded-full bg-[#FFD800]" />
            </span>

            Ready to grow?
          </div>

          {/* Heading */}
          <h2
            className="
              text-[40px]
              font-[900]
              leading-[0.98]
              tracking-[-2.5px]
              text-white
              sm:text-[56px]
              lg:text-[68px]
              lg:tracking-[-3.5px]
            "
          >
            Let&apos;s make your brand{' '}
            <span className="text-[#FFD800]">
              impossible to ignore.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-[650px]
              text-[15px]
              font-normal
              leading-[1.7]
              text-white/65
              sm:text-[16px]
            "
          >
            Tell us about your project. Share a few details and let&apos;s
            explore how Brand Master can help your business grow.
          </p>

        </div>

        {/* =========================================
            CONTACT FORM
        ========================================= */}

        <form
          onSubmit={handleSubmit}
          className="
            relative
            mx-auto
            mt-10
            max-w-[900px]
            overflow-hidden
            rounded-[28px]
            border
            border-white/40
            bg-gradient-to-br
            from-white
            via-[#FFF8F8]
            to-[#FFE3E3]
            p-5
            shadow-[0_30px_100px_rgba(0,0,0,0.35)]
            sm:mt-12
            sm:p-8
            lg:p-10
          "
        >

          {/* Form Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-red-200/50
              blur-[80px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-24
              h-64
              w-64
              rounded-full
              bg-red-100/60
              blur-[80px]
            "
          />

          {/* Top Shine */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-[3px]
              w-[55%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-[#CF1B28]
              to-transparent
            "
          />

          <div className="relative z-10">

            {/* Form Header */}
            <div className="mb-7 flex flex-col gap-4 border-b border-[#101010]/10 pb-6 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p
                  className="
                    text-[11px]
                    font-[900]
                    uppercase
                    tracking-[2.5px]
                    text-[#CF1B28]
                  "
                >
                  Start a conversation
                </p>

                <p
                  className="
                    mt-1
                    text-[13px]
                    leading-relaxed
                    text-[#101010]/45
                  "
                >
                  Tell us what you&apos;re building.
                </p>
              </div>

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-[14px]
                  border
                  border-[#F0D5D7]
                  bg-[#FFF4F4]
                  text-[#CF1B28]
                "
              >
                <Send size={18} strokeWidth={1.8} />
              </div>

            </div>

            {/* =========================================
                FORM GRID
            ========================================= */}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Name */}
              <div>
                <label
                  htmlFor="cta-name"
                  className="
                    mb-2
                    block
                    text-[12px]
                    font-[800]
                    tracking-[-0.1px]
                    text-[#101010]
                  "
                >
                  Full Name <span className="text-[#CF1B28]">*</span>
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
                  className="
                    w-full
                    rounded-[13px]
                    border
                    border-[#101010]/10
                    bg-white/80
                    px-4
                    py-3.5
                    text-[13px]
                    text-[#101010]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#101010]/30
                    hover:border-[#CF1B28]/25
                    focus:border-[#CF1B28]/50
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#CF1B28]/[0.08]
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="cta-email"
                  className="
                    mb-2
                    block
                    text-[12px]
                    font-[800]
                    text-[#101010]
                  "
                >
                  Email Address <span className="text-[#CF1B28]">*</span>
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
                  className="
                    w-full
                    rounded-[13px]
                    border
                    border-[#101010]/10
                    bg-white/80
                    px-4
                    py-3.5
                    text-[13px]
                    text-[#101010]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#101010]/30
                    hover:border-[#CF1B28]/25
                    focus:border-[#CF1B28]/50
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#CF1B28]/[0.08]
                  "
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="cta-phone"
                  className="
                    mb-2
                    block
                    text-[12px]
                    font-[800]
                    text-[#101010]
                  "
                >
                  Phone Number <span className="text-[#CF1B28]">*</span>
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
                  className="
                    w-full
                    rounded-[13px]
                    border
                    border-[#101010]/10
                    bg-white/80
                    px-4
                    py-3.5
                    text-[13px]
                    text-[#101010]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#101010]/30
                    hover:border-[#CF1B28]/25
                    focus:border-[#CF1B28]/50
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#CF1B28]/[0.08]
                  "
                />
              </div>

              {/* Date */}
              <div>
                <label
                  htmlFor="cta-date"
                  className="
                    mb-2
                    block
                    text-[12px]
                    font-[800]
                    text-[#101010]
                  "
                >
                  Preferred Date
                </label>

                <input
                  id="cta-date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-[13px]
                    border
                    border-[#101010]/10
                    bg-white/80
                    px-4
                    py-3.5
                    text-[13px]
                    text-[#101010]
                    outline-none
                    transition-all
                    duration-300
                    hover:border-[#CF1B28]/25
                    focus:border-[#CF1B28]/50
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#CF1B28]/[0.08]
                  "
                />
              </div>

              {/* Service */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="cta-service"
                  className="
                    mb-2
                    block
                    text-[12px]
                    font-[800]
                    text-[#101010]
                  "
                >
                  What Service Are You Interested In?{' '}
                  <span className="text-[#CF1B28]">*</span>
                </label>

                <select
                  id="cta-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    rounded-[13px]
                    border
                    border-[#101010]/10
                    bg-white/90
                    px-4
                    py-3.5
                    text-[13px]
                    text-[#101010]
                    outline-none
                    transition-all
                    duration-300
                    hover:border-[#CF1B28]/25
                    focus:border-[#CF1B28]/50
                    focus:ring-4
                    focus:ring-[#CF1B28]/[0.08]
                  "
                >
                  <option
                    value=""
                    disabled
                    className="text-gray-400"
                  >
                    Select a service
                  </option>

                  {serviceOptions.map((service) => (
                    <option
                      key={service}
                      value={service}
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
                  className="
                    mb-2
                    block
                    text-[12px]
                    font-[800]
                    text-[#101010]
                  "
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
                  className="
                    w-full
                    resize-y
                    rounded-[13px]
                    border
                    border-[#101010]/10
                    bg-white/80
                    px-4
                    py-3.5
                    text-[13px]
                    leading-[1.7]
                    text-[#101010]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#101010]/30
                    hover:border-[#CF1B28]/25
                    focus:border-[#CF1B28]/50
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#CF1B28]/[0.08]
                  "
                />
              </div>

            </div>

            {/* =========================================
                SUBMIT AREA
            ========================================= */}

            <div
              className="
                mt-6
                flex
                flex-col
                items-start
                justify-between
                gap-5
                border-t
                border-[#101010]/10
                pt-6
                sm:flex-row
                sm:items-center
              "
            >

              <p
                className="
                  text-[11px]
                  font-medium
                  leading-relaxed
                  text-[#101010]/40
                "
              >
                Fields marked * are required.
              </p>

              <button
                type="submit"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#CF1B28]
                  px-7
                  py-3.5
                  text-[13px]
                  font-[900]
                  text-white
                  shadow-[0_10px_30px_rgba(207,27,40,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#B91420]
                  hover:shadow-[0_15px_40px_rgba(207,27,40,0.35)]
                  sm:w-auto
                "
              >
                Submit Inquiry

                <ArrowUpRight
                  size={16}
                  strokeWidth={2.4}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </button>

            </div>

          </div>
        </form>

        {/* Bottom Brand Line */}
        <div className="mt-8 flex items-center justify-center gap-3 sm:mt-10">

          <div className="h-[2px] w-10 bg-[#FFD800]" />

          <span
            className="
              text-[10px]
              font-[800]
              uppercase
              tracking-[3px]
              text-white/45
            "
          >
            Let&apos;s build something remarkable
          </span>

          <div className="h-[2px] w-10 bg-[#FFD800]" />

        </div>

      </Reveal>

      {/* Bottom Fade */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-[#120000]/50
          to-transparent
        "
      />

    </section>
  )
}