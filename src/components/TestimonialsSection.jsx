import { Star } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { testimonials } from '../data/siteData'

export default function TestimonialsSection() {
  // Duplicate testimonials for seamless scrolling
  const marqueeTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="bg-white pt-10 sm:pt-24 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Client proof"
            title="Real businesses."
            accent="Real feedback."
            align="left"
          />
        </Reveal>
      </div>

      {/* Marquee */}
      <div className="mt-12 w-full overflow-hidden">
        <div className="testimonial-marquee flex w-max gap-5 hover:[animation-play-state:paused]">
          {marqueeTestimonials.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="w-[300px] sm:w-[380px] shrink-0"
            >
              <div className="rounded-2xl border border-[#0a0a12]/10 bg-[#ffcaca] p-7 min-h-[230px] h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={13}
                      className="fill-amber-600 text-amber-600"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-[15px] text-[#0a0a12]/80 leading-relaxed mb-6">
                  "{t.quote}"
                </p>

                {/* Client Info */}
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-[#aa2a2a]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[#0a0a12]/50">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation */}
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