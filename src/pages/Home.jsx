import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Rocket, Share2, Globe, Code2, GraduationCap, ShoppingBag, Palette, Clapperboard,
  ArrowUpRight, Check, ChevronDown, TrendingUp, Users, Award, Headphones,
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBanner from '../components/CtaBanner'
import TestimonialsSection from '../components/TestimonialsSection'
import BlurText from '../animations/BlurText'
import {
  capabilities, stats, processSteps, faqs, portfolioItems,
} from '../data/siteData'
// trustedBrands
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import yourPhoto from '../assets/webp/Photo.webp'
import ProfileCard from '../animations/ProfileCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollPin } from '../data/useScrollPin'
import About from './About'
import Services from './Services'

gsap.registerPlugin(ScrollTrigger)

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}


const iconMap = { Rocket, Share2, Globe, Code2, GraduationCap, ShoppingBag, Palette, Clapperboard }
const statIconMap = [Users, Award, TrendingUp, Headphones]

export default function Home() {
  return (
    <PageTransition>
      {/* Home / Hero */}
      <div id="home" className="scroll-mt-24">
        <Hero />
      </div>

      {/* Capabilities */}
      <div id="capabilities" className="scroll-mt-24">
        <Capabilities />
      </div>

      {/* Services */}
      <div id="services" className="scroll-mt-24">
        <Services />
      </div>

      {/* Process */}
      <div id="process" className="scroll-mt-24">
        <Process />
      </div>

      {/* Portfolio */}
      <div id="portfolio" className="scroll-mt-24">
        <FeaturedWork />
      </div>

      {/* About */}
      <div id="about" className="scroll-mt-24">
        <About />
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="scroll-mt-24">
        <TestimonialsSection />
      </div>

      {/* FAQ */}
      <div id="faq" className="scroll-mt-24">
        <Faq />
      </div>

      {/* Contact */}
      <div id="contact" className="scroll-mt-24">
        <CtaBanner />
      </div>
    </PageTransition>
  )
}

function Hero() {
  const [accentVisible, setAccentVisible] = useState(false)
  const [tailVisible, setTailVisible] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setAccentVisible(true), 700)
    const t2 = setTimeout(() => setTailVisible(true), 1000)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <section
      className="
        relative isolate overflow-hidden
        min-h-[820px]
        bg-[#CF1B28]
        px-4
        pb-12
        pt-[110px]
        sm:px-6
        sm:pt-[130px]
        lg:pt-[130px]
      "
    >
      {/* =====================================================
          PREMIUM HERO BACKGROUND
      ====================================================== */}

      {/* Main Red → Deep Red → Black Gradient */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_78%_25%,#D61521_0%,#9C050C_33%,#500006_68%,#220003_100%)]
        "
      />

      {/* Subtle Black Overlay */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[linear-gradient(135deg,rgba(0,0,0,0.12)_0%,transparent_42%,rgba(0,0,0,0.18)_100%)]
        "
      />

      {/* Soft Red Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[120px]
          -top-[120px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#D61521]/40
          blur-[120px]
        "
      />

      {/* Dark Bottom Glow */}
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
          bg-black/25
          blur-[120px]
        "
      />

      {/* Diagonal Premium Shine */}
      <div
        className="
          pointer-events-none
          absolute
          inset-[-20%_-10%]
          bg-[linear-gradient(135deg,transparent_45%,rgba(255,255,255,0.045)_45%,rgba(255,255,255,0.045)_56%,transparent_56%)]
        "
      />

      {/* Subtle Dot Pattern */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.08]
          bg-dot-grid
          bg-[length:28px_28px]
        "
        style={{
          maskImage:
            'radial-gradient(ellipse at center, black 0%, transparent 72%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 0%, transparent 72%)',
        }}
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative z-10
          mx-auto
          grid
          w-full
          max-w-[1180px]
          grid-cols-1
          items-center
          gap-12
          lg:grid-cols-[1.02fr_.98fr]
          lg:gap-8
        "
      >

        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <Reveal>
          <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">

            {/* EYEBROW */}
            <div
              className="
                mb-[18px]
                inline-flex
                items-center
                gap-2
                text-[12px]
                font-medium
                uppercase
                tracking-[4px]
                text-white/90
                sm:text-[14px]
                sm:tracking-[5px]
              "
            >
              <span
                className="
                  relative
                  flex
                  h-2
                  w-2
                  shrink-0
                "
              >
                <span
                  className="
                    absolute
                    inline-flex
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
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-[#FFD800]
                  "
                />
              </span>

              Complete Branding Solutions
            </div>

            {/* =================================================
                MAIN HEADING
            ================================================== */}

            <h1
              className="
                m-0
                w-full
                max-w-[850px]
                text-[clamp(54px,7vw,92px)]
                font-[950]
                leading-[0.9]
                tracking-[-5px]
                text-white
              "
            >
              {/* Line 1 */}
              <span className="block">
                <BlurText
                  text="India's Next"
                  delay={120}
                  animateBy="words"
                  direction="top"
                  className="text-white"
                />
              </span>

              {/* Line 2 */}
              <span className="mt-2 block sm:mt-3">
                <span
                  className={`
                    inline-block
                    text-[#FFD800]
                    transition-all
                    duration-700
                    ${
                      accentVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-4 opacity-0'
                    }
                  `}
                >
                  Big
                </span>

                <span
                  className={`
                    ml-3
                    inline-block
                    text-white
                    transition-all
                    duration-700
                    ${
                      tailVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-4 opacity-0'
                    }
                  `}
                >
                  Brands
                </span>
              </span>
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p
              className="
                mt-6
                max-w-[620px]
                text-[18px]
                font-normal
                leading-[1.6]
                text-[#F5DDDD]
                sm:text-[20px]
                lg:text-[22px]
                lg:leading-[1.45]
              "
            >
              Strategy, design, and creativity aligned to craft
              impactful digital solutions. Focused on delivering
              real growth that scales your brand and business.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <div
              className="
                mt-8
                flex
                w-full
                flex-col
                items-center
                gap-[14px]
                sm:w-auto
                sm:flex-row
                sm:flex-wrap
                lg:mt-8
              "
            >
              {/* Primary */}
              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  min-h-[54px]
                  w-full
                  max-w-[340px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-white
                  px-[25px]
                  py-[17px]
                  text-[14px]
                  font-[900]
                  text-[#CF1B28]
                  shadow-[0_15px_40px_rgba(0,0,0,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.30)]
                  sm:w-auto
                  sm:max-w-none
                "
              >
                Book Free Brand Strategy Call

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>

              {/* Secondary */}
              <Link
                to="/services"
                className="
                  group
                  inline-flex
                  min-h-[54px]
                  w-full
                  max-w-[340px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/45
                  bg-white/[0.03]
                  px-[25px]
                  py-[17px]
                  text-[14px]
                  font-[900]
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white/[0.10]
                  sm:w-auto
                  sm:max-w-none
                "
              >
                Explore Services

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>
            </div>

            {/* =================================================
                SOCIAL PROOF
            ================================================== */}

            <div
              className="
                mt-9
                flex
                items-center
                justify-center
                gap-3
                sm:mt-10
                sm:gap-4
                lg:justify-start
              "
            >
              {/* Avatars */}
              <div className="flex shrink-0 -space-x-2.5">
                {[
                  'from-violet-500 to-purple-500',
                  'from-purple-400 to-pink-400',
                  'from-fuchsia-500 to-violet-500',
                  'from-pink-400 to-purple-400',
                ].map((gradient, i) => (
                  <span
                    key={i}
                    className={`
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      border-[#760006]
                      bg-gradient-to-br
                      ${gradient}
                      text-[10px]
                      font-[900]
                      text-white
                      shadow-sm
                    `}
                  >
                    {['SC', 'MW', 'PN', 'DS'][i]}
                  </span>
                ))}
              </div>

              {/* Rating */}
              <div className="text-left">
                <div className="flex gap-[2px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="13"
                      height="13"
                      viewBox="0 0 20 20"
                      className="fill-[#FFD800]"
                    >
                      <path d="M10 1l2.7 6.3 6.8.6-5.2 4.5 1.6 6.6L10 15.7 4.1 19l1.6-6.6L.5 7.9l6.8-.6L10 1z" />
                    </svg>
                  ))}
                </div>

                <p
                  className="
                    mt-1
                    text-[11px]
                    font-medium
                    leading-4
                    text-white/75
                    sm:text-xs
                  "
                >
                  Trusted by 250+ founders
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* =================================================
            RIGHT — PROFILE CARD
        ================================================== */}

        <Reveal delay={0.15}>
          <div
            className="
              relative
              mx-auto
              flex
              w-full
              max-w-[570px]
              items-center
              justify-center
              lg:justify-end
            "
          >

            {/* Background Red Glow */}
            <div
              className="
                pointer-events-none
                absolute
                right-[5%]
                top-[10%]
                h-[280px]
                w-[280px]
                rounded-full
                bg-[#D61521]/50
                blur-[90px]
                sm:h-[380px]
                sm:w-[380px]
              "
            />

            {/* Black Glow */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-[5%]
                left-[20%]
                h-[180px]
                w-[280px]
                rounded-full
                bg-black/30
                blur-[80px]
              "
            />

            <div
              className="
                relative
                z-10
                w-full
                max-w-[280px]
                sm:max-w-[380px]
                lg:max-w-[500px]
              "
            >
              <ProfileCard
                name="Brand Master"
                title="Brand Master"
                contactText="Book a call"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                behindGlowEnabled
                behindGlowColor="rgba(0,0,0,0.38)"
                innerGradient="linear-gradient(145deg,#CF1B2855 0%,#76000670 55%,#00000050 100%)"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-[#220003]/35
          to-transparent
        "
      />
    </section>
  )
}
// Animated "growth dashboard" mockup — a smooth SVG line chart with a
// drawing-in animation, replacing a plain bar chart for a more premium feel.

// function TrustedBy() {
//   // Duplicate the list so the marquee can loop seamlessly at -50%.
//   const loop = [...trustedBrands, ...trustedBrands]
//   return (
//     <section className="bg-[#120000] pb-10 sm:pb-24 px-6 overflow-hidden">
//       <Reveal>
//         <p className="text-center text-[15px] tracking-[0.2em] uppercase text-white/5 0 mb-8">
//           Trusted by ambitious brands
//         </p>
//       </Reveal>
//       <div className="flex w-max gap-16 items-center animate-marquee">
//         {loop.map((b, i) => (
//           <span
//             key={`${b.name}-${i}`}
//             className="flex items-center justify-center whitespace-nowrap transition-opacity aspect-video"
//           >
//             <img
//               src={b.logo}
//               alt={b.name}
//               loading="lazy"
//               draggable={false}
//               className="h-12  sm:h-10 w-auto opacity-100 transition-opacity object-contain"
//             />
//           </span>
//         ))}
//       </div>
//     </section>
//   )
//}
function CapabilityCard({ c, i, Icon }) {
  const [active, setActive] = useState(false)

  return (
    <motion.div
      className={`group relative h-full rounded-2xl border bg-white p-6 pt-10 overflow-visible transition-all duration-300
        hover:shadow-[0_20px_40px_-15px_rgba(185,28,28,0.25)] hover:-translate-y-1 hover:border-red-200
        ${active ? "shadow-[0_20px_40px_-15px_rgba(185,28,28,0.25)] -translate-y-1 border-red-200" : "border-[#120000]/10"}
      `}
      onViewportEnter={() => setActive(true)}
      onViewportLeave={() => setActive(false)}
      viewport={{ amount: 0.6 }}
    >
      {/* CAPABILITIES badge */}
      <span
        className={`absolute -top-3 left-6 z-20 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-white shadow-sm transition-colors duration-300
          ${active ? "bg-red-600" : "bg-[#120000]"} group-hover:bg-red-600
        `}
      >
        Done for you
      </span>

      {/* tint overlay — mirrors hover overlay, driven by scroll on mobile */}
      <div
        className={`absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-red-50/80 to-red-50/60 transition-opacity duration-300
          ${active ? "opacity-100" : "opacity-0"} group-hover:opacity-100
        `}
      />

      <div className="relative z-10 h-full flex flex-col">

        <h3 className="text-[15px] font-semibold text-[#120000] mb-1.5">{c.title}</h3>
        <p className="text-[13px] text-[#120000]/55 leading-relaxed mb-4">{c.desc}</p>
        <Link
          to="/services"
          className="text-[13px] font-medium text-red-600 inline-flex items-center gap-1 hover:gap-1.5 transition-all mt-auto"
        >
          Read more <ArrowUpRight size={13} />
        </Link>
      </div>
    </motion.div>
  )
}

function Capabilities() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-white
        px-5
        pb-12
        pt-16
        sm:px-6
        sm:pb-16
        sm:pt-24
        lg:pb-20
        lg:pt-28
      "
    >
      {/* =========================================
          PREMIUM BACKGROUND GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-120px]
          h-[420px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-red-100/70
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[35%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-red-50
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          bottom-[-100px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-red-100/50
          blur-[120px]
        "
      />

      {/* =========================================
          SUBTLE DIAGONAL SHINE
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[-20%]
          opacity-40
          bg-[linear-gradient(135deg,transparent_44%,rgba(207,27,40,0.025)_44%,rgba(207,27,40,0.025)_55%,transparent_55%)]
        "
      />

      {/* =========================================
          NETWORK DECORATION
      ========================================= */}

      <svg
        className="
          pointer-events-none
          absolute
          right-[-20px]
          top-8
          hidden
          h-[320px]
          w-[480px]
          opacity-50
          lg:block
        "
        viewBox="0 0 420 280"
        fill="none"
      >
        <g stroke="url(#netGrad)" strokeWidth="1">
          <line x1="40" y1="60" x2="150" y2="20" />
          <line x1="150" y1="20" x2="260" y2="70" />
          <line x1="260" y1="70" x2="380" y2="40" />
          <line x1="150" y1="20" x2="180" y2="120" />
          <line x1="180" y1="120" x2="90" y2="150" />
          <line x1="180" y1="120" x2="300" y2="150" />
          <line x1="260" y1="70" x2="300" y2="150" />
          <line x1="300" y1="150" x2="380" y2="180" />
          <line x1="90" y1="150" x2="60" y2="220" />
        </g>

        <g fill="#CF1B28">
          <circle cx="40" cy="60" r="2.5" />
          <circle cx="150" cy="20" r="3.5" />
          <circle cx="260" cy="70" r="2.5" />
          <circle cx="380" cy="40" r="2.5" />
          <circle cx="180" cy="120" r="3.5" />
          <circle cx="90" cy="150" r="2.5" />
          <circle cx="300" cy="150" r="3.5" />
          <circle cx="380" cy="180" r="2.5" />
          <circle cx="60" cy="220" r="2.5" />
        </g>

        <defs>
          <linearGradient
            id="netGrad"
            x1="0"
            y1="0"
            x2="420"
            y2="280"
          >
            <stop
              offset="0%"
              stopColor="#CF1B28"
              stopOpacity="0.45"
            />
            <stop
              offset="100%"
              stopColor="#FCA5A5"
              stopOpacity="0.08"
            />
          </linearGradient>
        </defs>
      </svg>

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="relative z-10 mx-auto w-full max-w-[1180px]">

        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <div className="mb-10 max-w-[800px] sm:mb-12">

          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Everything your brand,"
              accent="needs to look serious"
              align="left"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className="
                mt-5
                max-w-2xl
                text-[15px]
                leading-[1.7]
                text-[#101010]/60
                sm:text-[16px]
              "
            >
              From a sharp logo to a complete visual system, BrandsMaster
              handles the design work that makes a business look credible,
              memorable, and consistent.
            </p>
          </Reveal>
        </div>

        {/* =========================================
            CAPABILITY CARDS
        ========================================= */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {capabilities.map((c, i) => {
            const Icon = iconMap[c.icon]

            return (
              <Reveal
                key={c.title}
                delay={i * 0.06}
              >
                <CapabilityCard
                  c={c}
                  i={i}
                  Icon={Icon}
                />
              </Reveal>
            )
          })}

        </div>

        {/* =========================================
            BOTTOM ACCENT
        ========================================= */}

        <Reveal delay={0.25}>
          <div className="mt-10 flex items-center gap-3 sm:mt-12">
            <div className="h-[2px] w-10 bg-[#CF1B28]" />

            <span className="text-[11px] font-[800] uppercase tracking-[3px] text-[#101010]/40">
              Built for brands that mean business
            </span>
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

// function Difference() {
//   return (
//     <section className="relative bg-[#120000] pt-10 sm:pt-24 py-24 px-6 overflow-hidden">
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-red-600/10 blur-[100px]" />
//       <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
//         <Reveal>
//           <SectionHeading eyebrow="Selected work" title="Design that gives businesses" accent="a stronger presence" align="left" dark />
//           <p className="text-white/55 text-[15px] leading-relaxed mt-5 mb-8 max-w-md">
//             A few examples of the visual direction: identity, packaging, digital presence and brand systems.
//           </p>

//           <ul className="space-y-3.5">
//             {['Senior team — no juniors on your project', 'Fixed timelines, no surprises', 'Weekly Loom updates + Slack channel', 'Design that ships, engineering that scales', 'Custom software Tracking'].map((f) => (
//               <li key={f} className="flex items-start gap-3 text-[14px] text-white/70">
//                 <span className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center mt-0.5 shrink-0">
//                   <Check size={11} className="text-red-400" />
//                 </span>
//                 {f}
//               </li>
//             ))}
//           </ul>
//         </Reveal>
//         <Reveal delay={0.1}>
//           <div className="grid grid-cols-2 gap-5">
//             {stats.map((s, i) => {
//               const Icon = statIconMap[i % statIconMap.length]
//               return (
//                 <div
//                   key={s.label}
//                   className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] hover:border-white/20 transition-colors duration-300"
//                 >
//                   <Icon size={16} className="text-red-400 mb-3" />
//                   <p className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
//                     {s.value}
//                   </p>

//                   <p className="text-xs text-white/50 mt-1 uppercase tracking-wide">{s.label}</p>
//                 </div>
//               )
//             })}
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   )
// }

'use client'
function Process() {
  const sectionRef = useRef(null)
  const pinRef = useRef(null)
  const [lottieFailed, setLottieFailed] = useState(false)
  const stepCount = processSteps.length

  const { progress, activeStep, goToStep } = useScrollPin({
    triggerRef: sectionRef,
    pinRef,
    stepCount,
  })

  useEffect(() => {
    setLottieFailed(false)
  }, [activeStep])

  const active = processSteps[activeStep]
  const fillPercent = progress * 100

  return (
    <section ref={sectionRef} className="relative bg-white">
      <div ref={pinRef} className="relative min-h-screen flex items-center py-10 sm:py-24 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] bg-red-200/25 blur-[90px] sm:blur-[110px] rounded-full pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4">
          <Reveal>
            <SectionHeading eyebrow="Our process" title="A five-step system," accent="Built to win" align="left" />
          </Reveal>

          {/* ══════════════ DESKTOP — horizontal timeline, unchanged/untouched ══════════════ */}
          <div className="hidden md:flex md:flex-col justify-center min-h-[calc(100vh-160px)]">
            <div className="relative mb-16 max-w-4xl mx-auto w-full">
              <div className="relative h-4">
                <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-[2px] bg-[#120000]/10 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full transition-[width] duration-300 ease-out"
                    style={{ width: `${fillPercent}%` }}
                  />
                </div>
                <div className="relative grid h-full" style={{ gridTemplateColumns: `repeat(${stepCount}, 1fr)` }}>
                  {processSteps.map((s, i) => {
                    const isActive = i === activeStep
                    const isDone = i < activeStep
                    return (
                      <div key={s.n} className="flex justify-center">
                        <button
                          type="button"
                          onClick={() => goToStep?.(i)}
                          aria-label={`Go to step ${i + 1}: ${s.title}`}
                          className="relative flex items-center justify-center w-8 h-8 -my-2 cursor-pointer group/dot"
                        >
                          <span
                            className={`block w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover/dot:scale-125 ${isActive
                              ? 'bg-red-600 border-red-600 scale-125 shadow-[0_0_0_5px_rgba(185,28,28,0.15)]'
                              : isDone
                                ? 'bg-red-600 border-red-600'
                                : 'bg-white border-[#120000]/15 group-hover/dot:border-red-400'
                              }`}
                          />
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="relative grid mt-3" style={{ gridTemplateColumns: `repeat(${stepCount}, 1fr)` }}>
                {processSteps.map((s, i) => {
                  const isActive = i === activeStep
                  const isDone = i < activeStep
                  return (
                    <button
                      type="button"
                      key={s.n}
                      onClick={() => goToStep?.(i)}
                      className={`text-[13px] font-medium text-center px-1 transition-colors duration-300 cursor-pointer hover:text-red-600 ${isActive || isDone ? 'text-[#120000]' : 'text-[#120000]/35'
                        }`}
                    >
                      {s.title}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="grid md:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-center max-w-5xl mx-auto w-full">
              <LottiePanel
                active={active}
                lottieFailed={lottieFailed}
                setLottieFailed={setLottieFailed}
                activeStep={activeStep}
              />
              <StepText active={active} activeStep={activeStep} stepCount={stepCount} />
            </div>
          </div>

          {/* ══════════════ MOBILE — vertical timeline, dot-centered line ══════════════ */}
          <div className="grid md:hidden grid-cols-[24px_1fr] gap-4">
            <div className="relative flex justify-center" style={{ minHeight: 460 }}>
              {/* line — positioned to start/end exactly at first/last dot's center (dot = 12px, so 6px inset) */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-[#120000]/10 rounded-full overflow-hidden"
                style={{ top: 6, bottom: 6 }}
              >
                <div
                  className="w-full bg-gradient-to-b from-red-600 to-red-400 rounded-full transition-[height] duration-300 ease-out"
                  style={{ height: `${fillPercent}%` }}
                />
              </div>
              <div className="relative flex flex-col justify-between h-full">
                {processSteps.map((s, i) => {
                  const isActive = i === activeStep
                  const isDone = i < activeStep
                  return (
                    <span
                      key={s.n}
                      className={`block w-3 h-3 rounded-full border-2 transition-all duration-300 bg-white ${isActive
                        ? 'border-red-600 bg-red-600 scale-125 shadow-[0_0_0_4px_rgba(185,28,28,0.15)]'
                        : isDone
                          ? 'border-red-600 bg-red-600'
                          : 'border-[#120000]/15'
                        }`}
                    />
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="rounded-3xl bg-gradient-to-br from-red-50 to-red-50 border border-[#120000]/5 p-4 overflow-hidden w-full max-w-[300px] aspect-square relative mx-auto">
                <LottiePanel
                  active={active}
                  lottieFailed={lottieFailed}
                  setLottieFailed={setLottieFailed}
                  activeStep={activeStep}
                  compact
                />
              </div>
              <StepText active={active} activeStep={activeStep} stepCount={stepCount} compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LottiePanel({ active, lottieFailed, setLottieFailed, activeStep, compact = false }) {
  return (
    <div
      className={`relative w-full h-full ${compact
        ? ''
        : 'rounded-3xl bg-gradient-to-br from-red-50 to-red-50 border border-[#120000]/5 p-8 sm:p-10 overflow-hidden max-w-[420px] md:max-w-[560px] mx-auto md:mx-0 aspect-square'
        }`}
    >
      {!compact && (
        <span className="absolute -top-2 -left-2 text-[140px] font-black text-[#120000]/[0.04] leading-none select-none pointer-events-none">
          {active.n}
        </span>
      )}

      <div className="w-full h-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            {!lottieFailed && active.lottie ? (
              <LottieWithFallback key={active.lottie} src={active.lottie} onError={() => setLottieFailed(true)} />
            ) : (
              <FallbackVisual label={active.title} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`badge-${activeStep}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className={`absolute rounded-xl border border-[#120000]/10 bg-white shadow-card ${compact ? 'bottom-2 right-2 px-2.5 py-1.5' : 'bottom-5 right-5 px-4 py-3'
            }`}
        >
          <p className={`${compact ? 'text-[9px]' : 'text-[11px]'} text-[#120000]/40`}>Step {active.n}</p>
          <p
            className={`font-bold bg-gradient-to-r ${active.accent} bg-clip-text text-transparent ${compact ? 'text-xs' : 'text-base'
              }`}
          >
            {active.title}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function StepText({ active, activeStep, stepCount, compact = false }) {
  return (
    <div className={`relative ${compact ? 'min-h-[130px] text-left' : 'min-h-[180px]'}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, x: compact ? 0 : 32, y: compact ? 16 : 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: compact ? 0 : -32, y: compact ? -16 : 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <p className="text-xs font-semibold mb-2 text-red-500">
            Step {String(activeStep + 1).padStart(2, '0')} / {String(stepCount).padStart(2, '0')}
          </p>
          <h3 className={`font-bold text-[#120000] leading-tight mb-3 ${compact ? 'text-2xl' : 'text-3xl sm:text-4xl mb-4'}`}>
            {active.title}
          </h3>
          <p className={`text-[#120000]/55 leading-relaxed ${compact ? 'text-[13.5px]' : 'text-[14px] sm:text-[15px] max-w-lg'}`}>
            {active.desc}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function LottieWithFallback({ src, onError }) {
  const loadedRef = useRef(false)

  useEffect(() => {
    loadedRef.current = false
    const timeout = setTimeout(() => {
      if (!loadedRef.current) onError?.()
    }, 8000)
    return () => clearTimeout(timeout)
  }, [src])

  return (
    <DotLottieReact
      src={src}
      loop
      autoplay
      style={{ width: '100%', height: '100%' }}
      onLoad={() => { loadedRef.current = true }}
      onError={() => onError?.()}
    />
  )
}

function FallbackVisual({ label }) {
  return (
    <div
      className="rounded-2xl flex items-center justify-center shadow-lg"
      style={{
        width: '140px',
        height: '140px',
        background: 'linear-gradient(to bottom right, #b91c1c, #ef4444)',
      }}
    >
      <span className="text-white text-4xl font-bold opacity-80">{label?.[0]}</span>
    </div>
  )
}
function FeaturedWork() {
  const featured = portfolioItems.slice(0, 4)
  return (
    <section className="relative z-20 bg-[#120000] pt-10 sm:pt-24 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <Reveal>
            <SectionHeading eyebrow="Selected work" title="Design that gives businesses" accent="a stronger presence" align="left" dark />
          </Reveal>
          {/* <Reveal delay={0.1}>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-1.5 text-white/70 text-[13px] font-medium hover:text-white transition-colors"
            >
              View all
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal> */}
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <Link
                to="/portfolio"
                className="group block relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#120000]"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 sm:p-5">
                  <p className="inline-block text-[10px] sm:text-[10.5px] uppercase tracking-wide text-red-200 bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-1 mb-2">
                    {p.category}
                  </p>

                  <p className="text-white text-base font-semibold leading-snug">{p.title}</p>
                </div>
                <span className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white transition-all">
                  <ArrowUpRight size={13} className="text-white group-hover:text-[#120000] transition-colors sm:w-[14px] sm:h-[14px]" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div> */}
      </div>
    </section>
  )
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section className="bg-[#120000] pt-10 sm:pt-24 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Questions," accent="answered" dark />
        </Reveal>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className={`rounded-xl border overflow-hidden transition-colors duration-300 ${isOpen ? 'border-red-400/40 bg-white/[0.05]' : 'border-white/10 bg-white/[0.03]'}`}>
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-[14px] font-medium text-white">{f.q}</span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ml-4 transition-colors duration-300 ${isOpen ? 'bg-gradient-to-br from-red-600 to-red-400' : 'bg-white/10'}`}>
                      <ChevronDown
                        size={13}
                        className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-[13.5px] text-white/55 leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}