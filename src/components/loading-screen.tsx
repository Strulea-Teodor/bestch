import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'

import bestChisinau from '../assets/best-chisinau.png'

type LoadingScreenProps = {
  ready?: boolean
  onZoomComplete?: () => void
  onComplete?: () => void
}

const LoadingScreen = ({ ready = false, onZoomComplete, onComplete }: LoadingScreenProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const logoRef = useRef<HTMLImageElement | null>(null)
  const [showHint, setShowHint] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const timer = window.setTimeout(() => setShowHint(true), 3000)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (!ready) return

    // The pulse fights the zoom, so drop it once the exit starts.
    logoRef.current?.classList.remove('animate-pulse')

    // Anchor the zoom on the wordmark's B stem (measured from the PNG:
    // x 1518-1567 of 2560, cap center y 49.5%) so the stem stays pinned at
    // the viewport center while it grows past every edge.
    gsap.set(logoRef.current, { transformOrigin: '60.27% 49.5%' })

    // Scale at which the stem (~3.9px wide on the rendered 200px logo, i.e.
    // 50px of the 2560px source) covers the viewport width with margin.
    const coverageScale = Math.ceil(window.innerWidth * 0.42)
    let fired = false

    const tl = gsap.timeline()
    // Ramp to full white during the zoom so the coverage frame is pure
    // white instead of the resting opacity-80 tone.
    tl.to(logoRef.current, { opacity: 1, duration: 0.4 }, 0)
      .to(logoRef.current, {
        scale: 3000,
        duration: 1.3,
        ease: 'power2.in',
        onUpdate: () => {
          const scale = gsap.getProperty(logoRef.current!, 'scale') as number
          if (!fired && scale >= coverageScale) {
            // The B's white stem now covers the whole screen: fade in.
            fired = true
            onZoomComplete?.()
          }
        }
      })
      .to(rootRef.current, {
        // Reveal the page fading in underneath the white.
        opacity: 0,
        duration: 0.8,
        ease: 'power1.inOut',
        onComplete: () => onComplete?.()
      })

    return () => {
      tl.kill()
    }
  }, [ready, onZoomComplete, onComplete])

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[999] bg-[#141414] flex justify-center items-center overflow-hidden"
    >
      <img
        ref={logoRef}
        src={bestChisinau}
        alt="BEST Chisinau"
        className="w-[200px] opacity-80 animate-pulse"
      />
      <p
        className={`absolute left-1/2 -translate-x-1/2 top-[calc(50%+70px)] text-sm font-nohemi text-white pointer-events-none whitespace-nowrap transition-opacity duration-300 ${
          showHint && !ready ? 'opacity-60' : 'opacity-0'
        }`}
      >
        {t('This is taking longer than usual.')}
      </p>
    </div>
  )
}

export default LoadingScreen
