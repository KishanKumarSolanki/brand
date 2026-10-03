import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'

/* =========================================================
   SERVICE CATEGORIES
========================================================= */

const serviceCategories = [
  { label: 'Logo Design', highlighted: false },
  { label: 'Brand Identity', highlighted: false },
  { label: 'Social Media', highlighted: false },
  { label: 'Packaging', highlighted: true },
  { label: 'Pitch Decks', highlighted: true },
  { label: 'More...', highlighted: true },
]

/* =========================================================
   MAIN SERVICES PAGE
========================================================= */

export default function Services() {
  return (
    <PageTransition>
      <Hero />
    </PageTransition>
  )
}

/* =========================================================
   SERVICES HERO
========================================================= */

function Hero() {
  return (
    <section
      aria-labelledby="services-hero-title"
      className="
        relative isolate
        w-full min-w-0
        overflow-hidden
        bg-[#B50916]
        px-4
        py-[20px]
        sm:px-6
        lg:px-8
      "
    >
      {/* RED GRADIENT — NO BLACK */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 82% 18%, #EF3340 0%, #D61521 32%, #B50916 68%, #980812 100%)',
        }}
      />

      {/* SOFT LIGHT GLOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-24 -top-24
          h-64 w-64
          rounded-full bg-white/10
          blur-[80px]
          sm:h-96 sm:w-96
        "
      />

      {/* WARM RED GLOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-32 -left-24
          h-72 w-72
          rounded-full bg-[#FF5260]/25
          blur-[90px]
          sm:h-96 sm:w-96
        "
      />

      {/* SUBTLE DIAGONAL LIGHT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(125deg, transparent 30%, rgba(255,255,255,0.055) 30%, rgba(255,255,255,0.055) 52%, transparent 52%)',
        }}
      />

      {/* SOFT DOT PATTERN */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(ellipse at center, black 10%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 10%, transparent 78%)',
        }}
      />

      {/* HERO CONTENT */}
      <Reveal className="relative z-10 mx-auto w-full min-w-0 max-w-5xl text-center">
        <div
          className="
            inline-flex max-w-full
            items-center justify-center gap-2
            rounded-full
            border border-white/25
            bg-white/10
            px-4 py-2
            text-[10px] font-bold
            uppercase tracking-[0.18em]
            text-white
            backdrop-blur-md
            sm:px-5 sm:text-xs
          "
        >
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD800]"
          />
          Our Services
        </div>

        <h1
          id="services-hero-title"
          className="
            mx-auto mt-6
            max-w-[900px]
            break-words
            text-[clamp(2rem,6vw,4.5rem)]
            font-extrabold
            leading-[1.12]
            tracking-[-0.035em]
            text-white
          "
        >
          Everything your brand needs,
          <span className="mt-2 block text-[#FFD800]">
            in one place.
          </span>
        </h1>

        <p
          className="
            mx-auto mt-5
            max-w-[680px]
            text-[15px]
            leading-[1.8]
            text-white/85
            sm:mt-6 sm:text-base
            lg:text-lg
          "
        >
          From logo design and brand identity to social media, packaging and
          pitch decks, we create the visual assets your business needs to
          present a consistent, professional brand.
        </p>

        {/* RESPONSIVE SERVICE CATEGORIES */}
        <ul
          aria-label="Our service categories"
          className="
            m-0 mt-7
            flex list-none flex-wrap
            items-center justify-center
            gap-2 p-0
            sm:mt-9 sm:gap-3
          "
        >
          {serviceCategories.map(({ label, highlighted }) => (
            <li key={label} className="max-w-full">
              <span
                className={`
                  inline-flex max-w-full
                  items-center justify-center
                  rounded-full border
                  px-3 py-2.5
                  text-center text-[10px]
                  font-bold uppercase
                  leading-normal tracking-[0.1em]
                  backdrop-blur-md
                  sm:px-5 sm:text-[11px]
                  ${
                    highlighted
                      ? 'border-[#FFD800]/40 bg-[#FFD800]/10 text-[#FFD800]'
                      : 'border-white/25 bg-white/10 text-white'
                  }
                `}
              >
                {label}
              </span>
            </li>
          ))}
        </ul>

        {/* SMALL DECORATIVE ACCENT */}
        <div
          aria-hidden="true"
          className="
            mx-auto mt-8
            h-1 w-12
            rounded-full bg-[#FFD800]
            sm:mt-10
          "
        />
      </Reveal>
    </section>
  )
}