import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  X,
} from 'lucide-react'

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
     LIGHTBOX / POPUP
  ===================================================== */

  const [lightbox, setLightbox] = useState(null)


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
     NEXT MEDIA - CARD
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
     PREVIOUS MEDIA - CARD
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

    const cleanSrc = src
      .split('?')[0]
      .toLowerCase()

    return (
      cleanSrc.endsWith('.mp4') ||
      cleanSrc.endsWith('.webm') ||
      cleanSrc.endsWith('.ogg') ||
      cleanSrc.endsWith('.mov') ||
      cleanSrc.endsWith('.m4v')
    )

  }


  /* =====================================================
     OPEN LIGHTBOX
  ===================================================== */

  const openLightbox = (itemIndex, mediaIndex) => {

    setLightbox({
      itemIndex,
      mediaIndex,
    })

  }


  /* =====================================================
     CLOSE LIGHTBOX
  ===================================================== */

  const closeLightbox = () => {
    setLightbox(null)
  }


  /* =====================================================
     LIGHTBOX NEXT
  ===================================================== */

  const nextLightbox = () => {

    if (!lightbox) return

    const item = filteredItems[lightbox.itemIndex]

    if (!item) return

    const images =
      item.images?.length
        ? item.images
        : [item.img]

    if (images.length <= 1) return

    setLightbox((prev) => ({
      ...prev,
      mediaIndex:
        (prev.mediaIndex + 1) % images.length,
    }))

  }


  /* =====================================================
     LIGHTBOX PREVIOUS
  ===================================================== */

  const previousLightbox = () => {

    if (!lightbox) return

    const item = filteredItems[lightbox.itemIndex]

    if (!item) return

    const images =
      item.images?.length
        ? item.images
        : [item.img]

    if (images.length <= 1) return

    setLightbox((prev) => ({
      ...prev,
      mediaIndex:
        (prev.mediaIndex - 1 + images.length) %
        images.length,
    }))

  }


  /* =====================================================
     KEYBOARD CONTROLS
  ===================================================== */

  useEffect(() => {

    if (!lightbox) return

    const handleKeyDown = (event) => {

      if (event.key === 'Escape') {
        closeLightbox()
      }

      if (event.key === 'ArrowRight') {
        nextLightbox()
      }

      if (event.key === 'ArrowLeft') {
        previousLightbox()
      }

    }

    document.addEventListener(
      'keydown',
      handleKeyDown
    )

    document.body.style.overflow = 'hidden'

    return () => {

      document.removeEventListener(
        'keydown',
        handleKeyDown
      )

      document.body.style.overflow = ''

    }

  }, [lightbox])


  /* =====================================================
     CATEGORY LIST
  ===================================================== */

  const categories = [
    'All',
    ...Array.from(
      new Set(
        portfolioItems.map(
          (item) => item.category
        )
      )
    ),
  ]


  /* =====================================================
     LIGHTBOX CURRENT DATA
  ===================================================== */

  let lightboxItem = null
  let lightboxImages = []
  let lightboxMedia = null
  let lightboxIsVideo = false

  if (lightbox) {

    lightboxItem =
      filteredItems[lightbox.itemIndex]

    if (lightboxItem) {

      lightboxImages =
        lightboxItem.images?.length
          ? lightboxItem.images
          : [lightboxItem.img]

      lightboxMedia =
        lightboxImages[lightbox.mediaIndex]

      lightboxIsVideo =
        isVideoFile(lightboxMedia)

    }

  }


  return (

    <>

      {/* ===================================================
          PORTFOLIO SECTION
      =================================================== */}

      <section
        id="portfolio"
        className="
          relative
          m-0
          overflow-hidden
          bg-white
          p-0
          pb-[20px]
          font-['Inter',Arial,Helvetica,sans-serif]
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
            px-4
            sm:px-6
            lg:px-8
            m-0
          "
        >


          {/* =================================================
              HEADING
          ================================================= */}

          <Reveal>

            <div className="m-0 max-w-[750px]">

              {/* EYEBROW */}

              <div
                className="
                  m-0
                  flex
                  items-center
                  gap-3
                "
              >

                

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


              {/* HEADING */}

              <h2
                className="
                  m-0
                  mt-2
                  text-[42px]
                  font-[900]
                  leading-[1]
                  tracking-[-2px]
                  text-[#111820]
                  sm:text-[58px]
                  lg:text-[68px]
                "
              >

                Brands we've built.

                <br />

                <span className="text-[#CF1B28]">
                  Businesses we've helped grow
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
                mt-4
                flex
                gap-2
                overflow-x-auto
                p-0
                scrollbar-hide
                sm:mt-5
              "
            >

              {categories.map((category) => (

                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={`
                    shrink-0
                    rounded-full
                    border
                    px-5
                    py-2
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
              mt-4
              grid
              grid-cols-1
              gap-4
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
                 CHECK VIDEO
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

                    {/* =====================================
                        MEDIA AREA
                    ===================================== */}

                    <div
                      className="
                        relative
                        aspect-[4/3]
                        overflow-hidden
                        bg-[#F8F4F4]
                      "
                    >

                      {/* ===================================
                          VIDEO
                      =================================== */}

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

                        /* =================================
                           IMAGE
                        ================================= */

                        <button
                          type="button"
                          onClick={() =>
                            openLightbox(
                              index,
                              currentIndex
                            )
                          }
                          aria-label={`Open ${item.title} image`}
                          className="
                            absolute
                            inset-0
                            block
                            h-full
                            w-full
                            cursor-zoom-in
                            border-0
                            bg-transparent
                            p-0
                          "
                        >

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

                        </button>

                      )}


                      {/* ===================================
                          DARK OVERLAY
                      =================================== */}

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


                      {/* ===================================
                          CATEGORY
                      =================================== */}

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


                      {/* ===================================
                          VIDEO LABEL
                      =================================== */}

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


                      {/* ===================================
                          CAROUSEL ARROWS
                      =================================== */}

                      {images.length > 1 && (

                        <div
                          className="
                            absolute
                            bottom-4
                            right-4
                            z-30
                            flex
                            items-center
                            gap-2
                          "
                        >

                          {/* PREVIOUS */}

                          <button
                            type="button"
                            aria-label={`Previous ${item.title} media`}
                            onClick={(event) => {

                              event.stopPropagation()

                              previousImage(
                                index,
                                images.length
                              )

                            }}
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
                            onClick={(event) => {

                              event.stopPropagation()

                              nextImage(
                                index,
                                images.length
                              )

                            }}
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


                      {/* ===================================
                          MEDIA COUNTER
                      =================================== */}

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


                    {/* =====================================
                        CARD CONTENT
                    ===================================== */}

                    <div className="p-4 sm:p-5">

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
                              m-0
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
                              m-0
                              mt-1
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
                py-10
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
            LIGHTBOX POPUP
        ===================================================== */}

        {lightbox &&
          lightboxItem &&
          lightboxMedia && (

          <div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/90
              p-2
              backdrop-blur-md
              sm:p-4
            "
            role="dialog"
            aria-modal="true"
            aria-label={`${lightboxItem.title} preview`}
            onClick={closeLightbox}
          >

            {/* ===============================================
                POPUP CONTAINER
            =============================================== */}

            <div
              className="
                relative
                flex
                h-full
                w-full
                max-w-[1400px]
                items-center
                justify-center
              "
              onClick={(event) =>
                event.stopPropagation()
              }
            >


              {/* =============================================
                  CLOSE BUTTON
              ============================================= */}

              <button
                type="button"
                aria-label="Close image preview"
                onClick={closeLightbox}
                className="
                  absolute
                  right-1
                  top-1
                  z-[100]
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-[#CF1B28]
                  sm:right-2
                  sm:top-2
                "
              >

                <X
                  size={22}
                  strokeWidth={2}
                />

              </button>


              {/* =============================================
                  TOP TITLE
              ============================================= */}

              <div
                className="
                  absolute
                  left-1
                  top-2
                  z-[90]
                  max-w-[60%]
                  sm:left-2
                "
              >

                <div
                  className="
                    rounded-full
                    border
                    border-white/15
                    bg-black/35
                    px-4
                    py-2
                    text-[10px]
                    font-[800]
                    uppercase
                    tracking-[2px]
                    text-white
                    backdrop-blur-md
                  "
                >
                  {lightboxItem.category}
                </div>

              </div>


              {/* =============================================
                  PREVIOUS BUTTON
              ============================================= */}

              {lightboxImages.length > 1 && (

                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={previousLightbox}
                  className="
                    absolute
                    left-0
                    z-[90]
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:bg-[#CF1B28]
                    sm:left-2
                    sm:h-12
                    sm:w-12
                  "
                >

                  <ArrowLeft
                    size={20}
                    strokeWidth={2}
                  />

                </button>

              )}


              {/* =============================================
                  MEDIA
              ============================================= */}

              <div
                className="
                  flex
                  max-h-[94vh]
                  max-w-[94vw]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[12px]
                  sm:max-h-[94vh]
                  sm:max-w-[90vw]
                "
              >

                {lightboxIsVideo ? (

                  <video
                    key={lightboxMedia}
                    src={lightboxMedia}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="
                      max-h-[94vh]
                      max-w-[94vw]
                      rounded-[12px]
                      object-contain
                      shadow-[0_25px_100px_rgba(0,0,0,0.45)]
                      sm:max-h-[94vh]
                      sm:max-w-[90vw]
                    "
                  />

                ) : (

                  <img
                    key={lightboxMedia}
                    src={lightboxMedia}
                    alt={lightboxItem.title}
                    className="
                      max-h-[94vh]
                      max-w-[94vw]
                      rounded-[12px]
                      object-contain
                      shadow-[0_25px_100px_rgba(0,0,0,0.45)]
                      sm:max-h-[94vh]
                      sm:max-w-[90vw]
                    "
                  />

                )}

              </div>


              {/* =============================================
                  NEXT BUTTON
              ============================================= */}

              {lightboxImages.length > 1 && (

                <button
                  type="button"
                  aria-label="Next image"
                  onClick={nextLightbox}
                  className="
                    absolute
                    right-0
                    z-[90]
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:bg-[#CF1B28]
                    sm:right-2
                    sm:h-12
                    sm:w-12
                  "
                >

                  <ArrowRight
                    size={20}
                    strokeWidth={2}
                  />

                </button>

              )}


              {/* =============================================
                  BOTTOM INFO / COUNTER
              ============================================= */}

              <div
                className="
                  absolute
                  bottom-1
                  left-1/2
                  z-[90]
                  -translate-x-1/2
                  sm:bottom-2
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/15
                    bg-black/45
                    px-4
                    py-2
                    text-[11px]
                    font-[800]
                    text-white
                    backdrop-blur-md
                  "
                >

                  <span>
                    {lightbox.mediaIndex + 1}
                  </span>

                  <span className="text-white/40">
                    /
                  </span>

                  <span>
                    {lightboxImages.length}
                  </span>

                  <span className="mx-1 h-3 w-px bg-white/20" />

                  <span className="max-w-[160px] truncate text-white/70">
                    {lightboxItem.title}
                  </span>

                </div>

              </div>

            </div>

          </div>

        )}

      </section>


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

        /* ================================================
           PORTFOLIO SPACING RESET
        ================================================= */

        #portfolio {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          padding-top: 0 !important;
          
        }

        #portfolio > div {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }

        /* ================================================
           REMOVE DEFAULT ELEMENT SPACING
        ================================================= */

        #portfolio h1,
        #portfolio h2,
        #portfolio h3,
        #portfolio h4,
        #portfolio h5,
        #portfolio h6,
        #portfolio p {
          margin-bottom: 0;
        }

        /* ================================================
           MOBILE LEFT / RIGHT SPACE
        ================================================= */

        @media (max-width: 639px) {

          #portfolio > div {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

        }

        /* ================================================
           TABLET LEFT / RIGHT SPACE
        ================================================= */

        @media (min-width: 640px) and (max-width: 1023px) {

          #portfolio > div {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }

        }

        /* ================================================
           DESKTOP LEFT / RIGHT SPACE
        ================================================= */

        @media (min-width: 1024px) {

          #portfolio > div {
            padding-left: 32px !important;
            padding-right: 32px !important;
          }

        }

        /* ================================================
           HORIZONTAL CATEGORY SCROLL
        ================================================= */

        #portfolio .scrollbar-hide {
          overflow-x: auto;
          overflow-y: hidden;
        }

        /* ================================================
           PREVENT HORIZONTAL PAGE OVERFLOW
        ================================================= */

        #portfolio {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

      `}</style>

    </>

  )
}