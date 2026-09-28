import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Positions the page before the browser paints, so there's no visible
// "top of page, then jump to footer" flash. Normal navigation still
// jumps to the top of the new page.
export default function ScrollToTop() {
    const { pathname, hash } = useLocation()

    useLayoutEffect(() => {
        // Hide the page until we've set the correct scroll position.
        document.documentElement.style.visibility = 'hidden'

        const reveal = () => {
            document.documentElement.style.visibility = 'visible'
        }

        if (hash) {
            const id = hash.replace('#', '')

            const jumpToHash = () => {
                const el = document.getElementById(id)
                if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY
                    window.scrollTo({ top, left: 0, behavior: 'auto' })
                } else {
                    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
                }
                reveal()
            }

            requestAnimationFrame(() => {
                requestAnimationFrame(jumpToHash)
            })

            return
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        reveal()
    }, [pathname, hash])

    return null
}