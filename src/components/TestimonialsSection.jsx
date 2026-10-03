import { useState } from 'react'

import {
  Users,
  Star,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react'

import { officeItems } from '../data/siteData'
import Reveal from './Reveal'


/* =========================================================
   GOOGLE REVIEW URL
   ---------------------------------------------------------
   YAHAN APNA ACTUAL GOOGLE REVIEW / GOOGLE BUSINESS URL
   PASTE KARNA HAI.
========================================================= */

const GOOGLE_RATING_URL =
  'PASTE_YOUR_GOOGLE_REVIEW_URL_HERE'


export default function TestimonialsSection() {

  /* =======================================================
     OFFICE CAROUSEL
  ======================================================= */

  const [officeIndex, setOfficeIndex] = useState(0)


  /* =======================================================
     TWO BRAND PROOF CARDS
  ======================================================= */

  const proofCards = [
    {
      id: 'reach',
      value: '40K+',
      description: 'Business owners reached',
      icon: Users,
      clickable: false,
    },

    {
      id: 'rating',
      value: '4.8★',
      description: 'Google review rating',
      icon: Star,
      clickable: true,
    },
  ]


  /* =======================================================
     OFFICE DATA
  ======================================================= */

  const office = officeItems?.[0]

  const officeImages = office?.images || []

  const currentOfficeMedia =
    officeImages.length > 0
      ? officeImages[
          Math.min(officeIndex, officeImages.length - 1)
        ]
      : null


  /* =======================================================
     CHECK IF MEDIA IS VIDEO
  ======================================================= */

  const isOfficeVideo =
    typeof currentOfficeMedia === 'string' &&
    /\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i.test(
      currentOfficeMedia
    )


  /* =======================================================
     PREVIOUS OFFICE MEDIA
  ======================================================= */

  const handlePreviousOffice = () => {

    if (officeImages.length <= 1) return

    setOfficeIndex((prev) =>
      prev === 0
        ? officeImages.length - 1
        : prev - 1
    )
  }


  /* =======================================================
     NEXT OFFICE MEDIA
  ======================================================= */

  const handleNextOffice = () => {

    if (officeImages.length <= 1) return

    setOfficeIndex((prev) =>
      (prev + 1) % officeImages.length
    )
  }


  return (

    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-16
        font-['Inter',Arial,Helvetica,sans-serif]
        sm:py-20
        lg:py-24
      "
    >

      {/* =====================================================
          SOFT BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_85%_8%,rgba(207,27,40,0.055),transparent_34%)]
        "
      />


      {/* =====================================================
          DIAGONAL BACKGROUND SHINE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[-20%_-10%]
          bg-[linear-gradient(135deg,transparent_42%,rgba(207,27,40,0.025)_42%,rgba(207,27,40,0.025)_54%,transparent_54%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-[-20%_-10%]
          opacity-70
          bg-[linear-gradient(135deg,transparent_60%,rgba(207,27,40,0.018)_60%,rgba(207,27,40,0.018)_70%,transparent_70%)]
        "
      />


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1220px]
          px-5
          sm:px-6
          lg:px-8
        "
      >


        {/* ===================================================
            EYEBROW
        =================================================== */}

        <Reveal>

          <div
            className="
              mb-4
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                h-[2px]
                w-9
                shrink-0
                bg-[#CF1B28]
                sm:w-10
              "
            />

            <span
              className="
                text-[10px]
                font-[900]
                uppercase
                tracking-[3px]
                text-[#CF1B28]
                sm:text-[11px]
              "
            >
              WHY BRANDMASTER
            </span>

          </div>

        </Reveal>


        {/* ===================================================
            MAIN HEADING
        =================================================== */}

        <Reveal delay={0.05}>

          <h2
            className="
              max-w-[850px]
              text-[42px]
              font-[900]
              leading-[0.98]
              tracking-[-2.5px]
              text-[#111820]
              sm:text-[58px]
              sm:tracking-[-3.5px]
              lg:text-[68px]
              lg:leading-[0.96]
            "
          >

            Built for businesses ready

            <br />

            <span
              className="
                text-[#CF1B28]
              "
            >
              to look like brands
            </span>

          </h2>

        </Reveal>


        {/* ===================================================
            BRAND PROOF CARDS
        =================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-2
            gap-3
            sm:mt-12
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-2
            lg:gap-5
          "
        >

          {proofCards.map((card, index) => {

            const Icon = card.icon


            /* =================================================
               CARD CONTENT
            ================================================= */

            const cardContent = (

              <div
                className="
                  group
                  relative
                  flex
                  min-h-[205px]
                  flex-col
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-[#EBCFD2]
                  bg-white
                  p-5
                  shadow-[0_10px_35px_rgba(20,10,10,0.035)]
                  transition-all
                  duration-400
                  hover:-translate-y-1
                  hover:border-[#CF1B28]/35
                  hover:shadow-[0_18px_45px_rgba(207,27,40,0.08)]
                  sm:min-h-[220px]
                  sm:p-6
                  lg:min-h-[180px]
                  lg:p-7
                "
              >

                {/* ===========================================
                    TOP LIGHT EFFECT
                =========================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-32
                    w-32
                    rounded-full
                    bg-[#CF1B28]/[0.035]
                    blur-2xl
                    transition-all
                    duration-500
                    group-hover:bg-[#CF1B28]/[0.08]
                  "
                />


                {/* ===========================================
                    ICON
                =========================================== */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-[13px]
                    border
                    border-[#F3CBCD]
                    bg-[#FFF4F4]
                    text-[#CF1B28]
                    transition-all
                    duration-300
                    group-hover:border-[#CF1B28]/35
                    group-hover:bg-[#CF1B28]
                    group-hover:text-white
                    sm:h-14
                    sm:w-14
                  "
                >

                  <Icon
                    size={25}
                    strokeWidth={1.9}
                  />

                </div>


                {/* ===========================================
                    VALUE
                =========================================== */}

                <div
                  className="
                    relative
                    z-10
                    mt-5
                  "
                >

                  <div
                    className="
                      text-[30px]
                      font-[900]
                      leading-none
                      tracking-[-1.4px]
                      text-[#111820]
                      sm:text-[36px]
                      sm:tracking-[-1.8px]
                      lg:text-[38px]
                    "
                  >
                    {card.value}
                  </div>


                  {/* =========================================
                      DESCRIPTION
                  ========================================= */}

                  <div
                    className="
                      mt-2
                      text-[11px]
                      font-medium
                      leading-[1.45]
                      text-[#64727B]
                      sm:text-[13px]
                      sm:leading-[1.5]
                    "
                  >
                    {card.description}
                  </div>

                </div>


                {/* ===========================================
                    GOOGLE LINK INDICATOR
                =========================================== */}

                {card.clickable && (

                  <div
                    className="
                      absolute
                      bottom-5
                      right-5
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#E7D7D8]
                      bg-white
                      text-[#CF1B28]
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                      sm:bottom-6
                      sm:right-6
                    "
                  >

                    <ArrowUpRight
                      size={14}
                      strokeWidth={2.3}
                    />

                  </div>

                )}

              </div>

            )


            /* =================================================
               GOOGLE CARD = CLICKABLE
            ================================================= */

            if (card.clickable) {

              return (

                <Reveal
                  key={card.id}
                  delay={0.08 + index * 0.06}
                >

                  <a
                    href={
                      GOOGLE_RATING_URL.startsWith('http')
                        ? GOOGLE_RATING_URL
                        : '#'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View BrandsMaster Google reviews"
                    onClick={(event) => {

                      if (
                        !GOOGLE_RATING_URL.startsWith('http')
                      ) {
                        event.preventDefault()
                      }

                    }}
                    className="
                      block
                      h-full
                      cursor-pointer
                    "
                  >

                    {cardContent}

                  </a>

                </Reveal>

              )
            }


            /* =================================================
               NORMAL CARD
            ================================================= */

            return (

              <Reveal
                key={card.id}
                delay={0.08 + index * 0.06}
              >

                {cardContent}

              </Reveal>

            )

          })}

        </div>


        {/* ===================================================
            OUR OFFICE
        =================================================== */}

        {office && officeImages.length > 0 && (

          <Reveal delay={0.2}>

            <div
              className="
                mt-6
                overflow-hidden
                rounded-[22px]
                border
                border-[#E8DCDD]
                bg-white
                shadow-[0_10px_35px_rgba(0,0,0,0.045)]
                sm:mt-8
              "
            >

              {/* =============================================
                  MEDIA AREA
              ============================================= */}

              <div
                className="
                  relative
                  aspect-[4/3]
                  overflow-hidden
                  bg-[#F8F4F4]
                  sm:aspect-[16/7]
                  lg:aspect-[16/6]
                "
              >

                {/* =========================================
                    VIDEO
                ========================================= */}

                {isOfficeVideo ? (

                  <video
                    key={currentOfficeMedia}
                    src={currentOfficeMedia}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />

                ) : (

                  /* =======================================
                     IMAGE
                  ======================================= */

                  <img
                    key={currentOfficeMedia}
                    src={currentOfficeMedia}
                    alt={office.title || 'Our Office'}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                    "
                  />

                )}


                {/* =========================================
                    DARK OVERLAY
                ========================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/25
                    via-transparent
                    to-transparent
                  "
                />


                {/* =========================================
                    OUR OFFICE LABEL
                ========================================= */}

                <div
                  className="
                    absolute
                    left-4
                    top-4
                    z-20
                    rounded-full
                    border
                    border-white/40
                    bg-white/90
                    px-3
                    py-1.5
                    text-[9px]
                    font-[900]
                    uppercase
                    tracking-[1.5px]
                    text-[#CF1B28]
                    backdrop-blur-md
                    sm:left-5
                    sm:top-5
                  "
                >
                  OUR OFFICE
                </div>


                {/* =========================================
                    VIDEO LABEL
                ========================================= */}

                {isOfficeVideo && (

                  <div
                    className="
                      absolute
                      right-4
                      top-4
                      z-20
                      rounded-full
                      border
                      border-white/30
                      bg-black/55
                      px-3
                      py-1.5
                      text-[9px]
                      font-[900]
                      uppercase
                      tracking-[1.5px]
                      text-white
                      backdrop-blur-md
                      sm:right-5
                      sm:top-5
                    "
                  >
                    VIDEO
                  </div>

                )}


                {/* =========================================
                    COUNTER
                ========================================= */}

                {officeImages.length > 1 && (

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      z-20
                      rounded-full
                      bg-black/55
                      px-3
                      py-1.5
                      text-[10px]
                      font-[800]
                      text-white
                      backdrop-blur-md
                      sm:bottom-5
                      sm:left-5
                    "
                  >
                    {officeIndex + 1}/{officeImages.length}
                  </div>

                )}


                {/* =========================================
                    NAVIGATION ARROWS
                ========================================= */}

                {officeImages.length > 1 && (

                  <div
                    className="
                      absolute
                      bottom-4
                      right-4
                      z-20
                      flex
                      items-center
                      gap-2
                      sm:bottom-5
                      sm:right-5
                    "
                  >

                    {/* PREVIOUS */}

                    <button
                      type="button"
                      aria-label="Previous office media"
                      onClick={handlePreviousOffice}
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/50
                        bg-white/90
                        text-[#111820]
                        shadow-lg
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:bg-[#CF1B28]
                        hover:text-white
                        sm:h-10
                        sm:w-10
                      "
                    >

                      <ArrowLeft size={15} />

                    </button>


                    {/* NEXT */}

                    <button
                      type="button"
                      aria-label="Next office media"
                      onClick={handleNextOffice}
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/50
                        bg-white/90
                        text-[#111820]
                        shadow-lg
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:bg-[#CF1B28]
                        hover:text-white
                        sm:h-10
                        sm:w-10
                      "
                    >

                      <ArrowRight size={15} />

                    </button>

                  </div>

                )}

              </div>


              {/* =============================================
                  OFFICE CONTENT
              ============================================= */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  p-5
                  sm:p-6
                  lg:p-7
                "
              >

                <div>

                  <p
                    className="
                      text-[10px]
                      font-[800]
                      uppercase
                      tracking-[2px]
                      text-[#CF1B28]
                    "
                  >
                    OUR OFFICE
                  </p>

                  <h3
                    className="
                      mt-1.5
                      text-[20px]
                      font-[900]
                      tracking-[-0.5px]
                      text-[#111820]
                      sm:text-[22px]
                    "
                  >
                    {office.title || 'Our Office'}
                  </h3>

                </div>


                {/* =========================================
                    ARROW ICON
                ========================================= */}

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#E8DCDD]
                    text-[#111820]/50
                    transition-all
                    duration-300
                    hover:border-[#CF1B28]
                    hover:bg-[#CF1B28]
                    hover:text-white
                  "
                >

                  <ArrowUpRight size={16} />

                </div>

              </div>

            </div>

          </Reveal>

        )}


        {/* ===================================================
            BOTTOM TRUST LINE
        =================================================== */}

        <Reveal delay={0.35}>

          <div
            className="
              mt-8
              flex
              items-center
              gap-3
              sm:mt-9
            "
          >

            <span
              className="
                h-[2px]
                w-9
                shrink-0
                bg-[#CF1B28]
                sm:w-10
              "
            />

            <span
              className="
                text-[9px]
                font-[800]
                uppercase
                tracking-[2.5px]
                text-[#87939A]
                sm:text-[10px]
                sm:tracking-[3px]
              "
            >
              Trusted by ambitious businesses
            </span>

          </div>

        </Reveal>

      </div>


      {/* =====================================================
          RESPONSIVE CSS
      ===================================================== */}

      <style>{`

        /* =========================================
           TABLET
        ========================================= */

        @media (min-width: 640px) and (max-width: 1023px) {

          .brandmaster-proof-card {
            min-height: 210px;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 639px) {

          section {
            overflow: hidden;
          }

        }


        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {

          * {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }

        }

      `}</style>

    </section>

  )
}