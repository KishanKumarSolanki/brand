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
      <ServiceList />
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
        bg-white
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
          BACKGROUND GLOWS
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-180px]
          h-[500px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-red-100/70
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[20%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-red-50
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          bottom-[-150px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-red-100/40
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
          inset-[-20%]
          opacity-50
          bg-[linear-gradient(135deg,transparent_44%,rgba(207,27,40,0.025)_44%,rgba(207,27,40,0.025)_55%,transparent_55%)]
        "
      />

      {/* =========================================
          DECORATIVE RED CIRCLE
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-[7%]
          top-[25%]
          hidden
          h-3
          w-3
          rounded-full
          bg-[#CF1B28]
          shadow-[0_0_0_8px_rgba(207,27,40,0.08),0_0_35px_rgba(207,27,40,0.35)]
          lg:block
        "
      />

      {/* =========================================
          CONTENT
      ========================================= */}

      <Reveal className="relative z-10 mx-auto max-w-[820px] text-center">

        <SectionHeading
          eyebrow="Our Services"
          title="Everything your brand needs,"
          accent="under one roof."
          align="center"
        />

        <p
          className="
            mx-auto
            mt-6
            max-w-[680px]
            text-[15px]
            leading-[1.7]
            text-[#101010]/60
            sm:text-[17px]
          "
        >
          Brand Master helps ambitious businesses build a powerful
          brand identity, create a premium digital presence and develop
          the creative systems they need to grow with confidence.
        </p>

        {/* Small Trust Indicator */}

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-[1px] w-8 bg-[#CF1B28]/40" />

          <span
            className="
              text-[10px]
              font-[800]
              uppercase
              tracking-[3px]
              text-[#101010]/40
            "
          >
            Strategy · Design · Growth
          </span>

          <span className="h-[1px] w-8 bg-[#CF1B28]/40" />
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
        bg-white
        px-5
        pb-16
        sm:px-6
        sm:pb-24
        lg:pb-28
      "
    >

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-red-50/60
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[-180px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-red-50
          blur-[100px]
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
                    border-[#EAEAEA]
                    bg-white
                    p-6
                    shadow-[0_12px_40px_rgba(16,16,16,0.05)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#CF1B28]/30
                    hover:shadow-[0_25px_70px_rgba(207,27,40,0.12)]
                    sm:p-7
                  "
                >

                  {/* =========================================
                      CARD HOVER GLOW
                  ========================================= */}

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
                      group-hover:bg-[#CF1B28]/15
                    "
                  />

                  {/* =========================================
                      TOP SHINE
                  ========================================= */}

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

                  {/* =========================================
                      CONTENT
                  ========================================= */}

                  <div className="relative z-10 flex h-full flex-col">

                    {/* =====================================
                        TOP ROW
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

                      {/* Icon */}

                      <div
                        className="
                          relative
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
                          group-hover:border-[#CF1B28]/30
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
              border-[#EAEAEA]
              bg-[#FFFDFB]
              px-6
              py-5
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
                  shadow-[0_8px_25px_rgba(207,27,40,0.22)]
                "
              >
                <Rocket size={16} strokeWidth={2} />
              </span>

              <div>
                <p className="text-[12px] font-[800] text-[#101010]">
                  One brand. One clear direction.
                </p>

                <p className="mt-0.5 text-[11px] text-[#101010]/45">
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
                text-[#CF1B28]
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