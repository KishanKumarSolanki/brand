import { Rocket, Share2, Globe, Code2 } from 'lucide-react'

import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

/* =========================================================
   BRAND MASTER SERVICES DATA
========================================================= */

const brandMasterServices = [
  {
    n: '01',
    title: 'Brand Strategy',
    tagline: 'Build a brand with direction.',
    desc: 'Define a clear brand foundation that connects your vision, audience, positioning and long-term business goals.',
    features: [
      'Brand Positioning',
      'Market Research',
      'Target Audience',
      'Brand Direction',
    ],
    icon: Rocket,
  },
  {
    n: '02',
    title: 'Brand Identity',
    tagline: 'Make your brand instantly recognizable.',
    desc: 'Create a distinctive visual identity that communicates who you are and gives your brand a consistent presence everywhere.',
    features: [
      'Logo Design',
      'Color System',
      'Typography',
      'Brand Guidelines',
    ],
    icon: Share2,
  },
  {
    n: '03',
    title: 'Digital Presence',
    tagline: 'Turn your brand into a digital experience.',
    desc: 'Design a premium digital presence that builds trust, communicates value and turns visitors into meaningful opportunities.',
    features: [
      'Website Design',
      'Landing Pages',
      'UI / UX',
      'Responsive Design',
    ],
    icon: Globe,
  },
  {
    n: '04',
    title: 'Brand Growth',
    tagline: 'Turn attention into business growth.',
    desc: 'Build systems and creative assets that help your brand stay consistent, visible and relevant as your business grows.',
    features: [
      'Social Media',
      'Campaign Design',
      'Creative Strategy',
      'Growth Assets',
    ],
    icon: Code2,
  },
]

/* =========================================================
   MAIN SERVICES PAGE
========================================================= */

export default function Services() {
  return (
    <PageTransition>
      <Hero />
      <ServiceList />
    </PageTransition>
  )
}

/* =========================================================
   HERO SECTION
========================================================= */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a12] px-6 pb-16 pt-28 sm:pb-20 sm:pt-40">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.22),transparent_58%)]" />

      {/* Secondary Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-red-500/[0.06] blur-[120px]" />

      <Reveal className="relative z-10 mx-auto max-w-4xl text-center">

        <SectionHeading
          eyebrow="Services"
          title="Everything your brand needs,"
          accent="under one roof."
          dark
        />

        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/60 sm:text-base">
          Brand Master helps ambitious businesses build a powerful brand
          identity, create a premium digital presence and develop the
          creative systems they need to grow with confidence.
        </p>

      </Reveal>
    </section>
  )
}

/* =========================================================
   SERVICES GRID — 4 COLUMNS
========================================================= */

function ServiceList() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a12] px-6 pb-20 sm:pb-28">

      <div className="relative mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {brandMasterServices.map((service, index) => {
            const Icon = service.icon

            return (
              <Reveal
                key={service.n}
                delay={index * 0.07}
                className="h-full"
              >

                <article
                  className="
                    group
                    relative
                    flex
                    h-full
                    min-h-[390px]
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    p-6
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-red-500/40
                    hover:bg-white/[0.045]
                    hover:shadow-[0_25px_70px_rgba(220,38,38,0.10)]
                  "
                >

                  {/* Hover Glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-40
                      w-40
                      rounded-full
                      bg-red-500/0
                      blur-[55px]
                      transition-all
                      duration-500
                      group-hover:bg-red-500/20
                    "
                  />

                  {/* Top Shine */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-red-400/60
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative z-10 flex h-full flex-col">

                    {/* Number + Icon */}
                    <div className="mb-8 flex items-center justify-between">

                      <span className="text-[11px] font-semibold tracking-[0.2em] text-red-400">
                        SERVICE {service.n}
                      </span>

                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-red-400/20
                          bg-red-500/10
                          transition-all
                          duration-300
                          group-hover:border-red-400/40
                          group-hover:bg-red-500/20
                        "
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.8}
                          className="
                            text-red-400
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                        />
                      </div>

                    </div>

                    {/* Title */}
                    <h2 className="mb-3 text-2xl font-bold tracking-tight text-white">
                      {service.title}
                    </h2>

                    {/* Tagline */}
                    <p className="mb-4 text-[13px] font-medium text-red-300">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-[13.5px] leading-relaxed text-white/50">
                      {service.desc}
                    </p>

                    {/* Features */}
                    <div className="mt-auto pt-8">

                      <div className="mb-5 h-px bg-white/10" />

                      <div className="space-y-2.5">

                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-[12px] text-white/65"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                            {feature}
                          </div>
                        ))}

                      </div>

                    </div>

                  </div>

                </article>

              </Reveal>
            )
          })}

        </div>

      </div>

    </section>
  )
}