import {
  Rocket,
  Share2,
  Globe,
  Code2,
  ArrowUpRight,
  Check,
} from 'lucide-react'

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
      {/* <ServiceList /> */}
    </PageTransition>
  )
}

/* =========================================================
   SERVICES HERO
========================================================= */

function Hero() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#760006]
        px-5
        pb-14
        pt-28
        sm:px-6
        sm:pb-20
        sm:pt-36
        lg:pb-24
        lg:pt-40
      "
    >

      {/* =========================================
          MAIN DEEP RED GRADIENT
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_78%_25%,#D61521_0%,#9C050C_33%,#500006_68%,#220003_100%)]
        "
      />

      {/* =========================================
          DARK OVERLAY
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(135deg,rgba(0,0,0,0.12)_0%,transparent_42%,rgba(0,0,0,0.20)_100%)]
        "
      />

      {/* =========================================
          RED GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[150px]
          -top-[150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#D61521]/45
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[180px]
          left-1/2
          h-[420px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-black/30
          blur-[120px]
        "
      />

      {/* =========================================
          DIAGONAL SHINE
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[-20%_-10%]
          bg-[linear-gradient(135deg,transparent_45%,rgba(255,255,255,0.045)_45%,rgba(255,255,255,0.045)_56%,transparent_56%)]
        "
      />

      {/* =========================================
          DOT GRID
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.07]
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
          CONTENT
      ========================================= */}

      <Reveal className="relative z-10 mx-auto max-w-[820px] text-center">

        <SectionHeading
          eyebrow="Our Services"
          title="Everything your brand needs,"
          accent="under one roof."
          dark
          align="center"
        />

        <p
          className="
            mx-auto
            mt-6
            max-w-[680px]
            text-[15px]
            leading-[1.7]
            text-white/70
            sm:text-[17px]
          "
        >
          Brand Master helps ambitious businesses build a powerful
          brand identity, create a premium digital presence and develop
          the creative systems they need to grow with confidence.
        </p>

        {/* =========================================
            SERVICE CATEGORIES
        ========================================= */}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

          <span
            className="
              rounded-full
              border
              border-white/15
              bg-white/[0.06]
              px-4
              py-2
              text-[10px]
              font-[800]
              uppercase
              tracking-[2px]
              text-white/70
              backdrop-blur-sm
            "
          >
            Strategy
          </span>

          <span
            className="
              rounded-full
              border
              border-white/15
              bg-white/[0.06]
              px-4
              py-2
              text-[10px]
              font-[800]
              uppercase
              tracking-[2px]
              text-white/70
              backdrop-blur-sm
            "
          >
            Design
          </span>

          <span
            className="
              rounded-full
              border
              border-white/15
              bg-white/[0.06]
              px-4
              py-2
              text-[10px]
              font-[800]
              uppercase
              tracking-[2px]
              text-white/70
              backdrop-blur-sm
            "
          >
            Digital
          </span>

          <span
            className="
              rounded-full
              border
              border-[#FFD800]/30
              bg-[#FFD800]/10
              px-4
              py-2
              text-[10px]
              font-[800]
              uppercase
              tracking-[2px]
              text-[#FFD800]
              backdrop-blur-sm
            "
          >
            Growth
          </span>

        </div>

      </Reveal>
{/* =========================================
            BOTTOM BRAND STATEMENT
        ========================================= */}

        <Reveal delay={0.3}>

          <div
            className="
              mt-10
              flex
              flex-col
              items-start
              gap-4
              rounded-[22px]
              border
              border-white/10
              bg-black/20
              px-6
              py-5
              backdrop-blur-md
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-7
            "
          >

            <div className="flex items-center gap-3">

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#CF1B28]
                  text-white
                  shadow-[0_8px_25px_rgba(207,27,40,0.35)]
                "
              >
                <Rocket
                  size={16}
                  strokeWidth={2}
                />
              </span>

              <div>
                <p className="text-[12px] font-[800] text-white">
                  One brand. One clear direction.
                </p>

                <p className="mt-0.5 text-[11px] text-white/45">
                  Strategy, identity, digital & growth.
                </p>
              </div>

            </div>

            <div
              className="
                text-[10px]
                font-[800]
                uppercase
                tracking-[2px]
                text-[#FFD800]
              "
            >
              Built to grow
            </div>

          </div>

        </Reveal>
    </section>
    
  )
}

/* =========================================================
   SERVICE LIST
========================================================= */

function ServiceList() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#500006]
        px-5
        pb-16
        pt-6
        sm:px-6
        sm:pb-24
        sm:pt-8
        lg:pb-28
      "
    >

      {/* =========================================
          CONTINUOUS RED BACKGROUND
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(135deg,#220003_0%,#500006_42%,#760006_100%)]
        "
      />

      {/* =========================================
          TOP RED GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-180px]
          h-[500px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[#CF1B28]/25
          blur-[130px]
        "
      />

      {/* =========================================
          SIDE GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[35%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#D61521]/20
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          bottom-[5%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#9C050C]/40
          blur-[120px]
        "
      />

      {/* =========================================
          DIAGONAL SHINE
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[-20%_-10%]
          opacity-80
          bg-[linear-gradient(135deg,transparent_45%,rgba(255,255,255,0.025)_45%,rgba(255,255,255,0.025)_56%,transparent_56%)]
        "
      />

      {/* =========================================
          DOT PATTERN
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          bg-[radial-gradient(circle,rgba(255,255,255,0.9)_1px,transparent_1px)]
          bg-[length:30px_30px]
        "
      />

      {/* =========================================
          CONTAINER
      ========================================= */}

      <div className="relative z-10 mx-auto max-w-[1180px]">

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
                    min-h-[430px]
                    flex-col
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-white/10
                    bg-white
                    p-6
                    shadow-[0_20px_60px_rgba(0,0,0,0.20)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#FFD800]/30
                    hover:shadow-[0_30px_80px_rgba(0,0,0,0.30)]
                    sm:p-7
                  "
                >

                  {/* =====================================
                      CARD HOVER GLOW
                  ===================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-48
                      w-48
                      rounded-full
                      bg-[#CF1B28]/0
                      blur-[65px]
                      transition-all
                      duration-500
                      group-hover:bg-[#CF1B28]/20
                    "
                  />

                  {/* =====================================
                      TOP SHINE
                  ===================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-0
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      bg-gradient-to-r
                      from-transparent
                      via-[#CF1B28]
                      to-transparent
                      transition-all
                      duration-500
                      group-hover:w-[75%]
                    "
                  />

                  <div className="relative z-10 flex h-full flex-col">

                    {/* =====================================
                        NUMBER + ICON
                    ===================================== */}

                    <div className="mb-9 flex items-center justify-between">

                      <span
                        className="
                          text-[10px]
                          font-[900]
                          uppercase
                          tracking-[2.5px]
                          text-[#CF1B28]
                        "
                      >
                        Service {service.n}
                      </span>

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-[15px]
                          border
                          border-[#F0D5D7]
                          bg-[#FFF4F4]
                          transition-all
                          duration-500
                          group-hover:scale-105
                          group-hover:border-[#CF1B28]
                          group-hover:bg-[#CF1B28]
                        "
                      >
                        <Icon
                          size={20}
                          strokeWidth={1.8}
                          className="
                            text-[#CF1B28]
                            transition-all
                            duration-500
                            group-hover:scale-110
                            group-hover:text-white
                          "
                        />
                      </div>

                    </div>

                    {/* =====================================
                        TITLE
                    ===================================== */}

                    <h2
                      className="
                        mb-3
                        text-[24px]
                        font-[900]
                        leading-[1.05]
                        tracking-[-0.8px]
                        text-[#101010]
                        transition-colors
                        duration-300
                        group-hover:text-[#CF1B28]
                      "
                    >
                      {service.title}
                    </h2>

                    {/* =====================================
                        TAGLINE
                    ===================================== */}

                    <p
                      className="
                        mb-4
                        text-[13px]
                        font-[700]
                        leading-[1.5]
                        text-[#CF1B28]
                      "
                    >
                      {service.tagline}
                    </p>

                    {/* =====================================
                        DESCRIPTION
                    ===================================== */}

                    <p
                      className="
                        text-[13.5px]
                        leading-[1.7]
                        text-[#101010]/55
                      "
                    >
                      {service.desc}
                    </p>

                    {/* =====================================
                        FEATURES
                    ===================================== */}

                    <div className="mt-auto pt-8">

                      <div
                        className="
                          mb-5
                          h-px
                          bg-[#101010]/[0.08]
                          transition-colors
                          duration-300
                          group-hover:bg-[#CF1B28]/20
                        "
                      />

                      <div className="space-y-3">

                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="
                              flex
                              items-center
                              gap-2.5
                              text-[12px]
                              font-medium
                              text-[#101010]/60
                              transition-colors
                              duration-300
                              group-hover:text-[#101010]/80
                            "
                          >

                            <span
                              className="
                                flex
                                h-5
                                w-5
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#FFF0F0]
                                text-[#CF1B28]
                                transition-all
                                duration-300
                                group-hover:bg-[#CF1B28]
                                group-hover:text-white
                              "
                            >
                              <Check
                                size={11}
                                strokeWidth={3}
                              />
                            </span>

                            {feature}

                          </div>
                        ))}

                      </div>

                    </div>

                    {/* =====================================
                        BOTTOM ARROW
                    ===================================== */}

                    <div
                      className="
                        mt-7
                        flex
                        items-center
                        justify-between
                        border-t
                        border-[#101010]/[0.07]
                        pt-5
                      "
                    >

                      <span
                        className="
                          text-[10px]
                          font-[800]
                          uppercase
                          tracking-[2px]
                          text-[#101010]/35
                        "
                      >
                        Explore
                      </span>

                      <span
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#101010]/10
                          text-[#101010]/45
                          transition-all
                          duration-300
                          group-hover:border-[#CF1B28]
                          group-hover:bg-[#CF1B28]
                          group-hover:text-white
                        "
                      >
                        <ArrowUpRight
                          size={15}
                          strokeWidth={2.2}
                        />
                      </span>

                    </div>

                  </div>

                </article>

              </Reveal>
            )
          })}

        </div>

        {/* =========================================
            BOTTOM BRAND STATEMENT
        ========================================= */}

        <Reveal delay={0.3}>

          <div
            className="
              mt-10
              flex
              flex-col
              items-start
              gap-4
              rounded-[22px]
              border
              border-white/10
              bg-black/20
              px-6
              py-5
              backdrop-blur-md
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-7
            "
          >

            <div className="flex items-center gap-3">

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#CF1B28]
                  text-white
                  shadow-[0_8px_25px_rgba(207,27,40,0.35)]
                "
              >
                <Rocket
                  size={16}
                  strokeWidth={2}
                />
              </span>

              <div>
                <p className="text-[12px] font-[800] text-white">
                  One brand. One clear direction.
                </p>

                <p className="mt-0.5 text-[11px] text-white/45">
                  Strategy, identity, digital & growth.
                </p>
              </div>

            </div>

            <div
              className="
                text-[10px]
                font-[800]
                uppercase
                tracking-[2px]
                text-[#FFD800]
              "
            >
              Built to grow
            </div>

          </div>

        </Reveal>

      </div>

    </section>
  )
}