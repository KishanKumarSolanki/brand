import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/siteData'
import Brand from '../assets/Brands.png'
import StaggeredMenu from '../animations/StaggeredMenu'

const socialItems = [
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/creativecrew.co.in_?igsh=MXJ2Y29kczBhaDdzOQ==',
  },
  {
    label: 'Youtube',
    link: 'https://youtu.be/sd1JXv_644Y?si=wyoFOJihFjp3e6Yh',
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const menuItems = navLinks.map((item) => ({
    label: item.label,
    ariaLabel: `Go to ${item.label}`,
    link: item.to,
  }))

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <header
        className={`fixed inset-x-0 top-0 z-50 hidden transition-all duration-300 md:block ${scrolled
            ? 'border-b border-white/10 bg-[#0a0a12]/90 shadow-lg backdrop-blur-xl'
            : 'bg-transparent'
          }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* LOGO */}
          <Link to="/" className="flex shrink-0 items-center gap-2.5">
            <img
              src={Brand}
              alt="Brand Master"
              className="h-12 w-auto object-contain"
              draggable={false}
            />
          </Link>

          {/* NAV LINKS */}
          <ul className="flex items-center gap-9 text-[15px] text-white/70">
            {navLinks.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `relative py-2 transition-colors duration-300 hover:text-white ${isActive ? 'font-semibold text-white' : ''
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* BOOK A CALL */}
          <div className="group relative">
            <div className="pointer-events-none absolute inset-0 scale-110 rounded-full bg-red-500/40 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

            <Link
              to="/#contact"
              className="relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/95 px-5 py-2.5 text-[14px] font-semibold text-[#0a0a12] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Book a Call
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* MOBILE NAVBAR */}
      <div className="fixed inset-x-0 top-0 z-50 md:hidden">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering={false}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#ffffff"
          colors={['#7F1D1D', '#1A0505']}
          logoUrl={Brand}
          logoAlt="Brand Master"
          accentColor="#EF4444"
          isFixed
        />
      </div>
    </>
  )
}