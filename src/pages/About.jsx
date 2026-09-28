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
      className="relative overflow-hidden bg-white px-6 py-16 sm:py-20 lg:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.04),transparent_55%)]" />

      {/* Bottom Subtle Glow */}
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

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="About"
            title="We're a studio for"
            accent="ambitious brands"
          />

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-[15px]
              leading-relaxed
              text-gray-700
              sm:text-base
            "
          >
            A team that treats every project like it's our own company.
            We ship faster, care harder, and design with obsession.
          </p>
        </Reveal>

        {/* Cards */}
        <div
          className="
            relative
            mx-auto
            mt-12
            grid
            max-w-6xl
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
                    h-full
                    min-h-[220px]
                    overflow-hidden
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    p-7
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-red-300
                    hover:bg-red-50/30
                    hover:shadow-[0_20px_60px_rgba(220,38,38,0.10)]
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
                      bg-red-500/0
                      blur-[50px]
                      transition-all
                      duration-500
                      group-hover:bg-red-500/10
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
                      via-red-400/30
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative z-10">

                    {/* Icon */}
                    <div
                      className="
                        mb-5
                        inline-flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-red-200
                        bg-gradient-to-br
                        from-red-50
                        to-rose-100
                        transition-all
                        duration-300
                        group-hover:border-red-300
                        group-hover:from-red-100
                        group-hover:to-rose-100
                      "
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.8}
                        className="
                          text-red-600
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        mb-2
                        text-lg
                        font-bold
                        tracking-tight
                        text-black
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        text-[14px]
                        leading-relaxed
                        text-gray-700
                        transition-colors
                        duration-300
                        group-hover:text-gray-900
                      "
                    >
                      {item.desc}
                    </p>

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

export default About