import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const StaggeredMenu = ({
  items = [],
  position = "right",
  isFixed = true,
  accentColor = "#EF4444",
  menuButtonColor = "#FFFFFF",
  openMenuButtonColor = "#FFFFFF",
  changeMenuColorOnOpen = true,
  logoUrl = "",
  logoAlt = "Logo",
  className = "",
}) => {
  const [open, setOpen] = useState(false);

  const panelRef = useRef(null);
  const prelayersRef = useRef(null);
  const contentRef = useRef(null);
  const menuItemsRef = useRef(null);
  const timelineRef = useRef(null);

  const isLeft = position === "left";
  const getOffset = () => (isLeft ? -100 : 100);

  useEffect(() => {
    const panel = panelRef.current;
    const prelayers = prelayersRef.current;

    if (!panel) return;

    gsap.set(panel, {
      xPercent: getOffset(),
      autoAlpha: 1,
    });

    if (prelayers) {
      gsap.set(prelayers.children, {
        xPercent: getOffset(),
      });
    }

    if (contentRef.current) {
      gsap.set(contentRef.current, {
        autoAlpha: 0,
        y: 25,
      });
    }

    if (menuItemsRef.current) {
      gsap.set(menuItemsRef.current.children, {
        autoAlpha: 0,
        y: 25,
      });
    }
  }, [position]);

  const openMenu = useCallback(() => {
    if (!panelRef.current) return;

    timelineRef.current?.kill();
    setOpen(true);

    const panel = panelRef.current;
    const prelayers = prelayersRef.current;
    const content = contentRef.current;
    const menuItems = menuItemsRef.current;

    const tl = gsap.timeline();
    timelineRef.current = tl;

    if (prelayers?.children.length) {
      tl.to(
        prelayers.children,
        {
          xPercent: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power4.out",
        },
        0
      );
    }

    tl.to(
      panel,
      {
        xPercent: 0,
        duration: 0.75,
        ease: "power4.out",
      },
      0.08
    );

    if (content) {
      tl.to(
        content,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
        },
        0.42
      );
    }

    if (menuItems?.children.length) {
      tl.to(
        menuItems.children,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.09,
        },
        0.48
      );
    }
  }, []);

  const closeMenu = useCallback(() => {
    if (!panelRef.current) return;

    timelineRef.current?.kill();

    const panel = panelRef.current;
    const prelayers = prelayersRef.current;
    const content = contentRef.current;
    const menuItems = menuItemsRef.current;

    const tl = gsap.timeline({
      onComplete: () => setOpen(false),
    });

    timelineRef.current = tl;

    if (menuItems?.children.length) {
      tl.to(
        menuItems.children,
        {
          autoAlpha: 0,
          y: 15,
          duration: 0.2,
          stagger: 0.035,
        },
        0
      );
    }

    if (content) {
      tl.to(
        content,
        {
          autoAlpha: 0,
          y: 15,
          duration: 0.2,
        },
        0
      );
    }

    tl.to(
      panel,
      {
        xPercent: getOffset(),
        duration: 0.55,
        ease: "power3.in",
      },
      0.15
    );

    if (prelayers?.children.length) {
      tl.to(
        prelayers.children,
        {
          xPercent: getOffset(),
          duration: 0.45,
          stagger: 0.06,
        },
        0.2
      );
    }
  }, [position]);

  const toggleMenu = () => {
    if (open) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && open) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeMenu]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <div
      className={`sm-root ${isFixed ? "sm-fixed" : ""} ${className}`}
      style={{
        "--sm-accent": accentColor,
        "--sm-menu-color": menuButtonColor,
        "--sm-open-color": openMenuButtonColor,
      }}
    >
      {/* Navbar */}
      <header className="sm-header">
        <div className="sm-logo">
          {logoUrl && (
            <Link to="/" onClick={handleLinkClick}>
              <img src={logoUrl} alt={logoAlt} />
            </Link>
          )}
        </div>

        <button
          type="button"
          className={`sm-toggle ${open ? "is-open" : ""}`}
          onClick={toggleMenu}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="sm-navigation-panel"
          style={{
            color:
              open && changeMenuColorOnOpen
                ? openMenuButtonColor
                : menuButtonColor,
          }}
        >
          <span className="sm-toggle-label">
            {open ? "CLOSE" : "MENU"}
          </span>

          <span className="sm-toggle-icon">
            <span />
            <span />
          </span>
        </button>
      </header>

      {/* Overlay */}
      {open && (
        <button
          type="button"
          className="sm-backdrop"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      )}

      {/* Background Layers */}
      <div
        ref={prelayersRef}
        className={`sm-prelayers ${isLeft ? "sm-prelayers-left" : ""}`}
        aria-hidden="true"
      >
        <div className="sm-prelayer sm-prelayer-one" />
        <div className="sm-prelayer sm-prelayer-two" />
        <div className="sm-prelayer sm-prelayer-three" />
      </div>

      {/* Navigation Panel */}
      <aside
        ref={panelRef}
        id="sm-navigation-panel"
        className={`sm-panel ${isLeft ? "sm-panel-left" : ""}`}
        aria-hidden={!open}
        style={{
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div ref={contentRef} className="sm-panel-content">
          <div className="sm-panel-header">
            {logoUrl ? (
              <Link
                to="/"
                className="sm-panel-logo"
                onClick={handleLinkClick}
                tabIndex={open ? 0 : -1}
              >
                <img src={logoUrl} alt={logoAlt} />
              </Link>
            ) : (
              <span className="sm-panel-label">NAVIGATION</span>
            )}

            <span className="sm-panel-index">MENU / 01</span>
          </div>

          <nav className="sm-navigation" aria-label="Main navigation">
            <ul ref={menuItemsRef} className="sm-menu-list">
              {items.map((item, index) => {
                const label =
                  item.label || item.name || `Link ${index + 1}`;

                const href =
                  item.href || item.link || item.path || "/";

                const isExternal =
                  href.startsWith("http://") ||
                  href.startsWith("https://");

                return (
                  <li
                    className="sm-menu-item"
                    key={`${label}-${index}`}
                  >
                    {isExternal ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={handleLinkClick}
                        tabIndex={open ? 0 : -1}
                      >
                        <span className="sm-item-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="sm-item-label">{label}</span>
                        <span className="sm-item-arrow">↗</span>
                      </a>
                    ) : (
                      <Link
                        to={href}
                        onClick={handleLinkClick}
                        tabIndex={open ? 0 : -1}
                      >
                        <span className="sm-item-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="sm-item-label">{label}</span>
                        <span className="sm-item-arrow">↗</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="sm-panel-footer">
            <span>LET'S BUILD SOMETHING GREAT</span>
            <span className="sm-footer-dot" />
          </div>
        </div>
      </aside>

      {/* CSS */}
      <style>{`
        .sm-root {
          --sm-accent: #EF4444;
          --sm-panel-bg: #0A0A12;
          --sm-text: #FFFFFF;
          --sm-muted: #9999A8;
          --sm-border: rgba(255,255,255,0.12);
          font-family: inherit;
        }

        .sm-fixed {
          position: fixed;
          inset: 0;
          z-index: 9999;
          pointer-events: none;
        }

        /* NAVBAR BACKGROUND */
        .sm-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          padding: 0 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          background: rgba(10,10,18,0.94);
          backdrop-filter: blur(20px) saturate(150%);
          -webkit-backdrop-filter: blur(20px) saturate(150%);

          border-bottom: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 8px 30px rgba(0,0,0,0.25);

          pointer-events: auto;
          z-index: 10003;
          box-sizing: border-box;
        }

        .sm-logo img,
        .sm-panel-logo img {
          display: block;
          max-width: 150px;
          max-height: 44px;
          object-fit: contain;
        }

        .sm-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 12px 18px;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: background 0.25s ease, border-color 0.25s ease;
        }

        .sm-toggle:hover {
          background: var(--sm-accent);
          border-color: var(--sm-accent);
        }

        .sm-toggle-label {
          line-height: 1;
        }

        .sm-toggle-icon {
          width: 20px;
          height: 16px;
          position: relative;
          display: inline-block;
        }

        .sm-toggle-icon span {
          position: absolute;
          left: 0;
          width: 20px;
          height: 2px;
          border-radius: 2px;
          background: currentColor;
          transition: transform 0.3s ease, top 0.3s ease;
        }

        .sm-toggle-icon span:first-child {
          top: 4px;
        }

        .sm-toggle-icon span:last-child {
          top: 11px;
        }

        .sm-toggle.is-open .sm-toggle-icon span:first-child {
          top: 8px;
          transform: rotate(45deg);
        }

        .sm-toggle.is-open .sm-toggle-icon span:last-child {
          top: 8px;
          transform: rotate(-45deg);
        }

        .sm-backdrop {
          position: fixed;
          inset: 0;
          z-index: 10000;
          border: 0;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(3px);
          cursor: default;
          pointer-events: auto;
        }

        .sm-prelayers {
          position: absolute;
          inset: 0;
          z-index: 10001;
          overflow: hidden;
          pointer-events: none;
        }

        .sm-prelayer {
          position: absolute;
          top: 0;
          right: 0;
          width: min(620px, 100%);
          height: 100%;
          border-radius: 28px 0 0 28px;
        }

        .sm-prelayer-one {
          background: #450A0A;
        }

        .sm-prelayer-two {
          background: #991B1B;
        }

        .sm-prelayer-three {
          background: var(--sm-accent);
        }

        .sm-prelayers-left .sm-prelayer {
          right: auto;
          left: 0;
          border-radius: 0 28px 28px 0;
        }

        .sm-panel {
          position: absolute;
          top: 0;
          right: 0;
          width: min(620px, 100%);
          height: 100%;
          z-index: 10002;
          overflow-y: auto;
          background:
            radial-gradient(
              120% 60% at 100% 0%,
              rgba(239,68,68,0.3),
              transparent 60%
            ),
            linear-gradient(
              180deg,
              rgba(255,255,255,0.06),
              rgba(255,255,255,0.02)
            ),
            #0A0A12;
          color: var(--sm-text);
          border-left: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px 0 0 28px;
          will-change: transform;
          pointer-events: none;
        }

        .sm-panel-left {
          right: auto;
          left: 0;
          border-left: 0;
          border-right: 1px solid rgba(255,255,255,0.08);
          border-radius: 0 28px 28px 0;
        }

        .sm-panel-content {
          min-height: 100%;
          display: flex;
          flex-direction: column;
          padding: 110px 48px 32px;
          box-sizing: border-box;
        }

        .sm-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-bottom: 26px;
          border-bottom: 1px solid var(--sm-border);
        }

        .sm-panel-label,
        .sm-panel-index {
          color: var(--sm-muted);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .sm-navigation {
          flex: 1;
          padding: 28px 0;
        }

        .sm-menu-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .sm-menu-item {
          margin: 0;
          padding: 0;
          border-bottom: 1px solid var(--sm-border);
        }

        .sm-menu-item a {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 21px 0;
          color: var(--sm-text);
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .sm-menu-item a:hover {
          color: var(--sm-accent);
        }

        .sm-item-number {
          min-width: 24px;
          color: var(--sm-accent);
          font-size: 12px;
          font-weight: 700;
        }

        .sm-item-label {
          flex: 1;
          font-size: clamp(23px, 3.5vw, 34px);
          font-weight: 700;
          letter-spacing: -1px;
          line-height: 1.2;
          transition: transform 0.25s ease;
        }

        .sm-menu-item a:hover .sm-item-label {
          transform: translateX(6px);
        }

        .sm-item-arrow {
          font-size: 22px;
          color: var(--sm-muted);
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .sm-menu-item a:hover .sm-item-arrow {
          color: var(--sm-accent);
          transform: translate(3px, -3px);
        }

        .sm-panel-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 24px;
          border-top: 1px solid var(--sm-border);
          color: var(--sm-muted);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.6px;
        }

        .sm-footer-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--sm-accent);
          box-shadow: 0 0 12px var(--sm-accent);
        }

        @media (max-width: 640px) {
          .sm-header {
            top: 12px;
            left: 12px;
            right: 12px;
            height: 64px;
            width: auto;
            padding: 0 16px;
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 18px;
            background: rgba(10,10,18,0.94);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
          }

          .sm-toggle {
            gap: 10px;
            padding: 10px 13px;
            font-size: 11px;
          }

          .sm-panel,
          .sm-prelayer {
            width: 100%;
            border-radius: 0;
          }

          .sm-panel-left,
          .sm-prelayers-left .sm-prelayer {
            border-radius: 0;
          }

          .sm-panel-content {
            padding: 100px 24px 26px;
          }

          .sm-panel-header {
            padding-bottom: 20px;
          }

          .sm-navigation {
            padding: 20px 0;
          }

          .sm-menu-item a {
            gap: 14px;
            padding: 19px 0;
          }

          .sm-item-label {
            font-size: clamp(22px, 6vw, 30px);
          }

          .sm-item-arrow {
            font-size: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sm-toggle,
          .sm-toggle-icon span,
          .sm-menu-item a,
          .sm-item-label,
          .sm-item-arrow {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default StaggeredMenu;