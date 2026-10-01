import { useState } from 'react'
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react'

import Reveal from '../components/Reveal'
import { portfolioItems } from '../data/siteData'

export default function PortfolioSection() {

  /* =====================================================
     CATEGORY FILTER
  ===================================================== */

  const [activeCategory, setActiveCategory] = useState('All')


  /* =====================================================
     EACH CARD CURRENT MEDIA INDEX
  ===================================================== */

  const [imageIndexes, setImageIndexes] = useState({})


  /* =====================================================
     FILTER ITEMS
  ===================================================== */

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === activeCategory
        )


  /* =====================================================
     NEXT MEDIA
  ===================================================== */

  const nextImage = (itemIndex, totalImages) => {

    setImageIndexes((prev) => {

      const currentIndex = prev[itemIndex] || 0

      return {
        ...prev,
        [itemIndex]:
          (currentIndex + 1) % totalImages,
      }

    })

  }


  /* =====================================================
     PREVIOUS MEDIA
  ===================================================== */

  const previousImage = (itemIndex, totalImages) => {

    setImageIndexes((prev) => {

      const currentIndex = prev[itemIndex] || 0

      return {
        ...prev,
        [itemIndex]:
          (currentIndex - 1 + totalImages) %
          totalImages,
      }

    })

  }


  /* =====================================================
     CHECK VIDEO
  ===================================================== */

  const isVideoFile = (src) => {

    if (typeof src !== 'string') {
      return false
    }

    const cleanSrc = src.split('?')[0].toLowerCase()

    return (
      cleanSrc.endsWith('.mp4') ||
      cleanSrc.endsWith('.webm') ||
      cleanSrc.endsWith('.ogg') ||
      cleanSrc.endsWith('.mov')
    )

  }


  /* =====================================================
     CATEGORY LIST
  ===================================================== */

  const categories = [
    'All',
    ...Array.from(
      new Set(
        portfolioItems.map((item) => item.category)
      )
    ),
  ]


  return (

    <section
      id="portfolio"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        font-['Inter',Arial,Helvetica,sans-serif]
        sm:py-24
        lg:py-28
      "
    >

      {/* =================================================
          CONTAINER
      ================================================= */}

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


        {/* =================================================
            HEADING
        ================================================= */}

        <Reveal>

          <div className="max-w-[750px]">

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
                  w-10
                  bg-[#CF1B28]
                "
              />

              <span
                className="
                  text-[10px]
                  font-[900]
                  uppercase
                  tracking-[3px]
                  text-[#CF1B28]
                "
              >
                OUR WORK
              </span>

            </div>


            <h2
              className="
                text-[42px]
                font-[900]
                leading-[1]
                tracking-[-2px]
                text-[#111820]
                sm:text-[58px]
                lg:text-[68px]
              "
            >

              Work that makes
              <br />

              <span className="text-[#CF1B28]">
                brands stand out.
              </span>

            </h2>

          </div>

        </Reveal>


        {/* =================================================
            CATEGORY FILTER
        ================================================= */}

        <Reveal delay={0.1}>

          <div
            className="
              mt-8
              flex
              gap-2
              overflow-x-auto
              pb-2
              scrollbar-hide
              sm:mt-10
            "
          >

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`
                  shrink-0
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-[11px]
                  font-[800]
                  uppercase
                  tracking-[1px]
                  transition-all
                  duration-300

                  ${
                    activeCategory === category
                      ? `
                        border-[#CF1B28]
                        bg-[#CF1B28]
                        text-white
                        shadow-[0_8px_25px_rgba(207,27,40,0.18)]
                      `
                      : `
                        border-[#E6D9DA]
                        bg-white
                        text-[#555]
                        hover:border-[#CF1B28]/40
                        hover:text-[#CF1B28]
                      `
                  }
                `}
              >
                {category}
              </button>

            ))}

          </div>

        </Reveal>


        {/* =================================================
            PORTFOLIO GRID
        ================================================= */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {filteredItems.map((item, index) => {

            /* ---------------------------------------------
               GET MEDIA ARRAY
            --------------------------------------------- */

            const images =
              item.images?.length
                ? item.images
                : [item.img]


            /* ---------------------------------------------
               CURRENT INDEX
            --------------------------------------------- */

            const currentIndex =
              imageIndexes[index] || 0


            /* ---------------------------------------------
               CURRENT IMAGE / VIDEO
            --------------------------------------------- */

            const currentImage =
              images[currentIndex]


            /* ---------------------------------------------
               CHECK IF CURRENT MEDIA IS VIDEO
            --------------------------------------------- */

            const isVideo =
              isVideoFile(currentImage)


            return (

              <Reveal
                key={`${item.title}-${index}`}
                delay={index * 0.05}
              >

                <article
                  className="
                    group
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-[#E8DCDD]
                    bg-white
                    shadow-[0_10px_35px_rgba(0,0,0,0.045)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)]
                  "
                >


                  {/* =========================================
                      MEDIA AREA
                  ========================================= */}

                  <div
                    className="
                      relative
                      aspect-[4/3]
                      overflow-hidden
                      bg-[#F8F4F4]
                    "
                  >

                    {/* =======================================
                        VIDEO
                    ======================================= */}

                    {isVideo ? (

                      <video
                        key={currentImage}
                        src={currentImage}
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

                      /* =====================================
                         IMAGE
                      ===================================== */

                      <img
                        key={currentImage}
                        src={currentImage}
                        alt={item.title}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-all
                          duration-500
                          group-hover:scale-[1.03]
                        "
                      />

                    )}


                    {/* =======================================
                        DARK OVERLAY
                    ======================================= */}

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


                    {/* =======================================
                        CATEGORY
                    ======================================= */}

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
                      "
                    >
                      {item.category}
                    </div>


                    {/* =======================================
                        VIDEO LABEL
                    ======================================= */}

                    {isVideo && (

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
                        "
                      >
                        VIDEO
                      </div>

                    )}


                    {/* =======================================
                        CAROUSEL ARROWS
                    ======================================= */}

                    {images.length > 1 && (

                      <div
                        className="
                          absolute
                          bottom-4
                          right-4
                          z-20
                          flex
                          items-center
                          gap-2
                        "
                      >

                        {/* PREVIOUS */}

                        <button
                          type="button"
                          aria-label={`Previous ${item.title} media`}
                          onClick={() =>
                            previousImage(
                              index,
                              images.length
                            )
                          }
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
                          "
                        >

                          <ArrowLeft
                            size={15}
                            strokeWidth={2.2}
                          />

                        </button>


                        {/* NEXT */}

                        <button
                          type="button"
                          aria-label={`Next ${item.title} media`}
                          onClick={() =>
                            nextImage(
                              index,
                              images.length
                            )
                          }
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
                          "
                        >

                          <ArrowRight
                            size={15}
                            strokeWidth={2.2}
                          />

                        </button>

                      </div>

                    )}


                    {/* =======================================
                        MEDIA COUNTER
                    ======================================= */}

                    {images.length > 1 && (

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
                        "
                      >
                        {currentIndex + 1} / {images.length}
                      </div>

                    )}

                  </div>


                  {/* =========================================
                      CARD CONTENT
                  ========================================= */}

                  <div className="p-5 sm:p-6">

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        gap-4
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
                          {item.category}
                        </p>


                        <h3
                          className="
                            mt-1.5
                            text-[19px]
                            font-[900]
                            tracking-[-0.5px]
                            text-[#111820]
                          "
                        >
                          {item.title}
                        </h3>

                      </div>


                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#E8DCDD]
                          text-[#111820]/50
                          transition-all
                          duration-300
                          group-hover:border-[#CF1B28]
                          group-hover:bg-[#CF1B28]
                          group-hover:text-white
                        "
                      >

                        <ArrowUpRight
                          size={15}
                        />

                      </div>

                    </div>

                  </div>

                </article>

              </Reveal>

            )

          })}

        </div>


        {/* =================================================
            EMPTY STATE
        ================================================= */}

        {filteredItems.length === 0 && (

          <div
            className="
              py-20
              text-center
              text-[14px]
              font-medium
              text-[#777]
            "
          >
            No portfolio items found in this category.
          </div>

        )}

      </div>


      {/* =====================================================
          SCROLLBAR CSS
      ===================================================== */}

      <style>{`

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

      `}</style>

    </section>
  )
}