import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { Rocket, Globe, Award } from 'lucide-react'

function About() {
  const items = [
    {
      title: 'Our Mission',
      desc: 'To make premium design and engineering accessible to founders who care about craft.',
      icon: Rocket,
    },
    {
      title: 'Our Vision',
      desc: 'A world where every ambitious brand looks and performs like a category leader.',
      icon: Globe,
    },
    {
      title: 'Our Belief',
      desc: 'Great work happens at the intersection of taste, systems, and speed.',
      icon: Award,
    },
  ]

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-16
        font-['Inter',Arial,Helvetica,sans-serif]
        sm:px-6
        sm:py-20
        lg:py-24
      "
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.04),transparent_55%)]
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          left-1/2
          h-[400px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-red-500/[0.06]
          blur-[120px]
        "
      />

      {/* Subtle diagonal texture */}
      <div
        className="
          pointer-events-none
          absolute
          inset-[-20%]
          opacity-40
          bg-[linear-gradient(135deg,transparent_45%,rgba(207,27,40,0.018)_45%,rgba(207,27,40,0.018)_56%,transparent_56%)]
        "
      />

      {/* =========================================
          CONTENT
      ========================================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1180px]">

        {/* =========================================
            SECTION HEADING
        ========================================= */}
        <Reveal className="mx-auto max-w-[800px] text-center">

          <SectionHeading
            eyebrow="About"
            title="We're a studio for"
            accent="ambitious brands"
            align="center"
          />

          <p
            className="
              mx-auto
              mt-5
              max-w-[650px]
              text-[15px]
              font-normal
              leading-[1.7]
              tracking-[0]
              text-[#101010]/60
              sm:text-[16px]
            "
          >
            A team that treats every project like it's our own company.
            We ship faster, care harder, and design with obsession.
          </p>

        </Reveal>

        {/* =========================================
            ABOUT CARDS
        ========================================= */}
        <div
          className="
            relative
            mx-auto
            mt-12
            grid
            max-w-[1080px]
            grid-cols-1
            gap-5
            sm:mt-16
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <Reveal
                key={item.title}
                delay={index * 0.08}
                className="h-full"
              >
                <article
                  className="
                    group
                    relative
                    flex
                    h-full
                    min-h-[230px]
                    flex-col
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-[#E5E5E5]
                    bg-white
                    p-7
                    font-['Inter',Arial,Helvetica,sans-serif]
                    shadow-[0_10px_35px_rgba(0,0,0,0.035)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#CF1B28]/30
                    hover:bg-[#FFFDFD]
                    hover:shadow-[0_20px_60px_rgba(207,27,40,0.10)]
                  "
                >

                  {/* Card Glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-40
                      w-40
                      rounded-full
                      bg-[#CF1B28]/0
                      blur-[55px]
                      transition-all
                      duration-500
                      group-hover:bg-[#CF1B28]/10
                    "
                  />

                  {/* Top Shine */}
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
                      group-hover:w-[65%]
                    "
                  />

                  <div className="relative z-10">

                    {/* =========================================
                        ICON
                    ========================================= */}
                    <div
                      className="
                        mb-6
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
                        duration-300
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
                          duration-300
                          group-hover:text-white
                        "
                      />
                    </div>

                    {/* =========================================
                        TITLE
                    ========================================= */}
                    <h3
                      className="
                        mb-3
                        text-[21px]
                        font-[900]
                        leading-[1.1]
                        tracking-[-0.6px]
                        text-[#101010]
                        transition-colors
                        duration-300
                        group-hover:text-[#CF1B28]
                      "
                    >
                      {item.title}
                    </h3>

                    {/* =========================================
                        DESCRIPTION
                    ========================================= */}
                    <p
                      className="
                        max-w-[320px]
                        text-[13.5px]
                        font-normal
                        leading-[1.7]
                        tracking-[0]
                        text-[#101010]/55
                        transition-colors
                        duration-300
                        group-hover:text-[#101010]/70
                      "
                    >
                      {item.desc}
                    </p>

                  </div>

                  {/* Bottom Number */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-5
                      right-6
                      text-[42px]
                      font-[900]
                      leading-none
                      tracking-[-3px]
                      text-[#101010]/[0.035]
                      transition-colors
                      duration-500
                      group-hover:text-[#CF1B28]/[0.07]
                    "
                  >
                    0{index + 1}
                  </div>

                </article>
              </Reveal>
            )
          })}
        </div>

        {/* =========================================
            BOTTOM BRAND LINE
        ========================================= */}
        <Reveal delay={0.25}>
          <div className="mt-10 flex items-center gap-3 sm:mt-12">
            <div className="h-[2px] w-10 bg-[#CF1B28]" />

            <span
              className="
                text-[10px]
                font-[800]
                uppercase
                tracking-[3px]
                text-[#101010]/40
              "
            >
              Built for ambitious brands
            </span>
          </div>
        </Reveal>

      </div>

      {/* Bottom Fade */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-20
          bg-gradient-to-t
          from-[#fffaf2]/40
          to-transparent
        "
      />
    </section>
  )
}

export default About