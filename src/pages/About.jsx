import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

function About() {
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

      {/* Subtle Diagonal Texture */}
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
          MAIN CONTENT
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

        </Reveal>


        {/* =========================================
            MAIN ABOUT PARAGRAPH
        ========================================= */}

        <Reveal
          delay={0.1}
          className="mx-auto mt-8 max-w-[900px] sm:mt-10"
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-[#E9E9E9]
              bg-[#FFFEFE]
              px-6
              py-7
              shadow-[0_15px_50px_rgba(0,0,0,0.04)]
              sm:px-10
              sm:py-9
              lg:px-14
              lg:py-11
            "
          >

            {/* Top Red Accent */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-[3px]
                w-[35%]
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#CF1B28]
                to-transparent
              "
            />

            {/* Soft Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-56
                w-56
                rounded-full
                bg-[#CF1B28]/[0.06]
                blur-[70px]
              "
            />

            <p
              className="
                relative
                z-10
                text-center
                text-[16px]
                font-normal
                leading-[1.85]
                tracking-[-0.1px]
                text-[#101010]/65
                sm:text-[17px]
                sm:leading-[1.85]
                lg:text-[18px]
              "
            >
              We are a creative studio built for ambitious brands that
              refuse to blend in. We combine strategy, design, technology,
              and thoughtful execution to create digital experiences that
              feel distinctive, perform beautifully, and move businesses
              forward. Every project is approached with the mindset of a
              partner, not just a service provider — understanding the
              bigger picture, caring about the smallest details, and
              turning bold ideas into meaningful brand experiences.
            </p>

          </div>

        </Reveal>


        {/* =========================================
            SECONDARY STATEMENT
        ========================================= */}

        <Reveal
          delay={0.2}
          className="mx-auto mt-8 max-w-[760px] text-center sm:mt-10"
        >

          <p
            className="
              text-[13px]
              font-medium
              leading-[1.75]
              text-[#101010]/45
              sm:text-[14px]
            "
          >
            Strategy gives the work direction. Design gives it personality.
            Technology makes it work. Together, they create brands people
            remember.
          </p>

        </Reveal>


        {/* =========================================
            BOTTOM BRAND LINE
        ========================================= */}

        <Reveal delay={0.3}>
          <div
            className="
              mt-10
              flex
              items-center
              justify-center
              gap-3
              sm:mt-12
            "
          >

            <div
              className="
                h-[2px]
                w-10
                bg-[#CF1B28]
                sm:w-14
              "
            />

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

            <div
              className="
                h-[2px]
                w-10
                bg-[#CF1B28]
                sm:w-14
              "
            />

          </div>
        </Reveal>

      </div>


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
          from-[#fffaf2]/40
          to-transparent
        "
      />

    </section>
  )
}

export default About