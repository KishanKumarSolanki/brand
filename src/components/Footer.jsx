
import { Link } from 'react-router-dom'
import { Instagram, Youtube, ArrowUpRight, ArrowRight } from 'lucide-react'
import { siteConfig, footerColumns, socialLinks } from '../data/siteData'
import Brand from '../assets/Brands.png'

const socialIconMap = {
  Instagram,
  YouTube: Youtube,
}

// Footer links ko Home page ke sections se connect karega
const getFooterLink = (to) => {
  if (!to) return '/'

  // Already a full route or external link
  if (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')) {
    return to
  }

  // Hash links ko Home page ke saath connect karo
  if (to.startsWith('#')) {
    return `/${to}`
  }

  // Home page section links
  if (to.startsWith('/#')) {
    return to
  }

  return to
}

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#08080d] text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/[0.08] blur-[140px]" />

      <div className="pointer-events-none absolute inset-0 border-t border-white/[0.08]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-8 pt-14 sm:pt-20 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
          {/* Brand Column */}
          <div className="max-w-md">
            <Link to="/" className="mb-6 inline-flex items-center gap-3">
              <img
                src={Brand}
                alt={`${siteConfig.name || 'Brand Master'} logo`}
                className="h-10 w-10 object-contain"
              />

              <span className="text-lg font-bold tracking-tight text-white">
                {siteConfig.name || 'Brand Master'}
                <span className="text-red-500">.</span>
              </span>
            </Link>

            <h3 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Let's build a brand that
              <br />
              <span className="bg-gradient-to-r from-red-400 via-rose-400 to-red-500 bg-clip-text text-transparent">
                means business.
              </span>
            </h3>

            <p className="max-w-sm text-sm leading-7 text-white/55">
              We help ambitious businesses build strong brands through strategy, design, and digital execution.
            </p>

            <a
              href="https://wa.me/919536404366"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 rounded-[10px] border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-red-400/40 hover:bg-red-500/10"
            >
              Let's Talk
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          
          <div>
            Get in Touch
            mobile: <a href="tel:+919536404366" className="text-white/70 hover:text-white">+91 95364 04366</a>  
          </div>
          </div>


          {/* Navigation Columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                {col.heading}
              </p>

              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={getFooterLink(link.to)}
                      className="group inline-flex items-center gap-1 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}

                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 border-t border-white/10 pt-7 sm:mt-20">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-center text-xs leading-relaxed text-white/40 sm:text-left">
              © {new Date().getFullYear()} {siteConfig.name || 'Brand Master'}.
              All rights reserved.

            </p>

          </div>
        </div>
      </div>
    </footer>
  )
}