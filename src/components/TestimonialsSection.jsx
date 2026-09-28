import { Star, Quote, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { testimonials } from '../data/siteData'

export default function TestimonialsSection() {
  const marqueeTestimonials = [...testimonials, ...testimonials]

  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#220003]
        py-16
        font-['Inter',Arial,Helvetica,sans-serif]
        sm:py-24
        lg:py-28
      "
    >
      {/* =========================================
          HERO-STYLE BACKGROUND
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_78%_25%,#D61521_0%,#9C050C_33%,#500006_68%,#220003_100%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(135deg,rgba(0,0,0,0.12)_0%,transparent_42%,rgba(0,0,0,0.20)_100%)]
        "
      />

      {/* Red Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[160px]
          -top-[150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#D61521]/40
          blur-[130px]
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-[220px]
          left-1/2
          h-[500px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-black/35
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
          HEADING
      ========================================= */}

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-6">

        <Reveal>
          <SectionHeading
            eyebrow="Client Proof"
            title="Real businesses."
            accent="Real feedback."
            align="left"
            dark
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p
            className="
              mt-5
              max-w-[620px]
              text-[15px]
              font-normal
              leading-[1.7]
              text-white/65
              sm:text-[16px]
            "
          >
            See what founders and businesses say after working with
            BrandsMaster to build a stronger and more professional brand.
          </p>
        </Reveal>

      </div>

      {/* =========================================
          MARQUEE
      ========================================= */}

      <div className="relative z-10 mt-10 w-full overflow-hidden sm:mt-12">

        {/* Edge Fade */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-16
            bg-gradient-to-r
            from-[#500006]
            to-transparent
            sm:w-28
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-16
            bg-gradient-to-l
            from-[#500006]
            to-transparent
            sm:w-28
          "
        />

        <div
          className="
            testimonial-marquee
            flex
            w-max
            gap-5
            hover:[animation-play-state:paused]
          "
        >
          {marqueeTestimonials.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="
                w-[300px]
                shrink-0
                sm:w-[380px]
              "
            >
              <article
                className="
                  group
                  relative
                  flex
                  min-h-[270px]
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/10
                  bg-white
                  p-6
                  shadow-[0_20px_60px_rgba(0,0,0,0.22)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#FFD800]/40
                  hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                  sm:p-7
                "
              >

                {/* Card Glow */}
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
                    blur-[70px]
                    transition-all
                    duration-500
                    group-hover:bg-[#CF1B28]/15
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
                    via-[#FFD800]
                    to-transparent
                    transition-all
                    duration-500
                    group-hover:w-[70%]
                  "
                />

                {/* =========================================
                    TOP ROW
                ========================================= */}

                <div className="relative z-10 flex items-center justify-between">

                  {/* Quote Icon */}
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-[13px]
                      border
                      border-[#F0D5D7]
                      bg-[#FFF4F4]
                    "
                  >
                    <Quote
                      size={17}
                      strokeWidth={2}
                      className="text-[#CF1B28]"
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        strokeWidth={1.5}
                        className="fill-[#FFD800] text-[#FFD800]"
                      />
                    ))}
                  </div>

                </div>

                {/* =========================================
                    REVIEW
                ========================================= */}

                <p
                  className="
                    relative
                    z-10
                    mt-6
                    text-[14px]
                    font-normal
                    leading-[1.7]
                    text-[#101010]/70
                    sm:text-[15px]
                  "
                >
                  "{t.quote}"
                </p>

                {/* =========================================
                    CLIENT INFO
                ========================================= */}

                <div
                  className="
                    relative
                    z-10
                    mt-auto
                    flex
                    items-end
                    justify-between
                    border-t
                    border-[#101010]/[0.08]
                    pt-5
                  "
                >
                  <div>
                    <p
                      className="
                        text-[14px]
                        font-[900]
                        leading-tight
                        tracking-[-0.2px]
                        text-[#101010]
                      "
                    >
                      {t.name}
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        font-medium
                        leading-tight
                        text-[#101010]/45
                      "
                    >
                      {t.role}
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#101010]/10
                      text-[#101010]/35
                      transition-all
                      duration-300
                      group-hover:border-[#CF1B28]
                      group-hover:bg-[#CF1B28]
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight size={14} strokeWidth={2.2} />
                  </div>
                </div>

              </article>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          BOTTOM BRAND LINE
      ========================================= */}

      <div className="relative z-10 mx-auto mt-10 w-full max-w-[1180px] px-5 sm:mt-12 sm:px-6">
        <Reveal delay={0.25}>
          <div className="flex items-center gap-3">
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
              Trusted by ambitious businesses
            </span>
          </div>
        </Reveal>
      </div>

      {/* =========================================
          MARQUEE CSS
      ========================================= */}

      <style>{`
        .testimonial-marquee {
          animation: testimonial-scroll 35s linear infinite;
          will-change: transform;
        }

        @keyframes testimonial-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-marquee {
            animation: none;
          }
        }
      `}</style>

    </section>
  )
}