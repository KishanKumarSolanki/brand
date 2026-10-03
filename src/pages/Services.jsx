import {
  Rocket,
  Share2,
  Globe,
  Code2,
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
        py-[20px]
        px-5
        sm:px-6
        lg:px-8
      "
    >

      {/* MAIN DEEP RED GRADIENT */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_78%_25%,#D61521_0%,#9C050C_33%,#500006_68%,#220003_100%)]
        "
      />

      {/* DARK OVERLAY */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(135deg,rgba(0,0,0,0.12)_0%,transparent_42%,rgba(0,0,0,0.20)_100%)]
        "
      />

      {/* RED GLOW */}

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

      {/* BOTTOM BLACK GLOW */}

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

      {/* DIAGONAL SHINE */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[-20%_-10%]
          bg-[linear-gradient(135deg,transparent_45%,rgba(255,255,255,0.045)_45%,rgba(255,255,255,0.045)_56%,transparent_56%)]
        "
      />

      {/* DOT GRID */}

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

      {/* CONTENT */}

      <Reveal
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[820px]
          text-center
        "
      >

        <SectionHeading
          eyebrow="Our Services"
          title="Everything your brand needs,"
          accent="in one place."
          dark
          align="center"
        />

        {/* DESCRIPTION */}

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
          From logo design and brand identity to social media, packaging and
          pitch decks, we create the visual assets your business needs to
          present a consistent, professional brand.
        </p>

        {/* SERVICE CATEGORIES */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
          "
        >

          {/* LOGO DESIGN */}

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
            Logo Design
          </span>

          {/* BRAND IDENTITY */}

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
            Brand Identity
          </span>

          {/* SOCIAL MEDIA */}

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
            Social Media
          </span>

          {/* PACKAGING */}

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
            Packaging
          </span>

          {/* PITCH DECKS */}

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
            Pitch Decks
          </span>

          {/* MORE */}

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
            More...
          </span>

        </div>

      </Reveal>

    </section>
  )
}