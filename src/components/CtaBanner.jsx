import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

export default function CtaBanner() {
  return (
    <section
      id="contact"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#4A0008]
        px-5
        py-16
        font-['Inter',Arial,Helvetica,sans-serif]
        sm:px-6
        sm:py-20
        lg:py-[88px]
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
          bg-[radial-gradient(circle_at_50%_15%,#B51228_0%,#8A0615_32%,#62000D_62%,#3D0007_100%)]
        "
      />

      {/* Top Red Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          -top-[180px]
          h-[520px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[#D91D3A]/35
          blur-[130px]
        "
      />

      {/* Left Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          top-[25%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#B70E26]/25
          blur-[130px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[220px]
          bottom-[5%]
          h-[480px]
          w-[480px]
          rounded-full
          bg-[#C91435]/25
          blur-[140px]
        "
      />

      {/* Bottom Dark Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-[280px]
          left-1/2
          h-[500px]
          w-[850px]
          -translate-x-1/2
          rounded-full
          bg-[#1A0004]/70
          blur-[120px]
        "
      />

      {/* Diagonal Shine */}
      <div
        className="
          pointer-events-none
          absolute
          inset-[-30%]
          bg-[linear-gradient(135deg,transparent_40%,rgba(255,255,255,0.035)_48%,rgba(255,255,255,0.035)_52%,transparent_60%)]
        "
      />

      {/* Subtle Dot Pattern */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.045]
          bg-[radial-gradient(circle,rgba(255,255,255,0.9)_1px,transparent_1px)]
          bg-[length:26px_26px]
        "
        style={{
          maskImage:
            'radial-gradient(ellipse at center, black 0%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 0%, transparent 78%)',
        }}
      />

      {/* =========================================
          MAIN CTA CONTENT
      ========================================= */}

      <Reveal className="relative z-10 mx-auto w-full max-w-[1000px]">

        <div className="mx-auto max-w-[850px] text-center">

          {/* =========================================
              EYEBROW
          ========================================= */}

          <div
            className="
              mb-5
              inline-flex
              items-center
              justify-center
              gap-2
              text-[10px]
              font-[800]
              uppercase
              tracking-[3px]
              text-white/65
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-[#FFD800]
                  opacity-40
                "
              />

              <span
                className="
                  relative
                  h-2
                  w-2
                  rounded-full
                  bg-[#FFD800]
                "
              />
            </span>

            Ready?
          </div>

          {/* =========================================
              MAIN HEADING
          ========================================= */}

          <h2
            className="
              mx-auto
              max-w-[850px]
              text-[40px]
              font-[900]
              leading-[0.98]
              tracking-[-2.5px]
              text-white
              sm:text-[50px]
              md:text-[58px]
              lg:text-[64px]
              lg:tracking-[-3.5px]
            "
          >
            Let&apos;s make your brand impossible
            <br className="hidden sm:block" />
            <span className="block sm:inline">
              {' '}to ignore.
            </span>
          </h2>

          {/* =========================================
              DESCRIPTION
          ========================================= */}

          <p
            className="
              mx-auto
              mt-6
              max-w-[650px]
              text-[14px]
              font-normal
              leading-[1.65]
              text-white/70
              sm:text-[15px]
              md:text-[16px]
            "
          >
            Book a free 30-minute strategy call. We&apos;ll audit your
            funnel and share 3 wins you can implement this week.
          </p>

          {/* =========================================
              BUTTONS
          ========================================= */}

          <div
            className="
              mt-8
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
              sm:gap-4
            "
          >

            {/* Primary Button */}
            <a
              href="#contact-form"
              className="
                group
                inline-flex
                min-h-[46px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-white
                px-7
                py-3
                text-[13px]
                font-[800]
                text-[#7A0615]
                shadow-[0_12px_35px_rgba(0,0,0,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#FFF8F8]
                hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)]
                sm:w-auto
              "
            >
              Book free consultation

              <ArrowUpRight
                size={15}
                strokeWidth={2.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>

            {/* Secondary Button */}
            <a
              href="#portfolio"
              className="
                group
                inline-flex
                min-h-[46px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/30
                bg-white/[0.03]
                px-7
                py-3
                text-[13px]
                font-[700]
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/55
                hover:bg-white/[0.10]
                sm:w-auto
              "
            >
              See portfolio

              <ArrowUpRight
                size={15}
                strokeWidth={2.3}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>

          </div>

        </div>

      </Reveal>

      {/* =========================================
          BOTTOM FADE
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-20
          bg-gradient-to-t
          from-[#260004]/50
          to-transparent
        "
      />

    </section>
  )
}