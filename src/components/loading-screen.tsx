import { useEffect, useRef } from 'react'
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
  const whiteRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ready) return

    // The pulse fights the zoom, so drop it once the exit starts.
    logoRef.current?.classList.remove('animate-pulse')

    const tl = gsap.timeline()
    tl.to(logoRef.current, {
      // Zoom the logo into the viewport until its white parts engulf it.
      scale: 20,
      duration: 0.9,
      ease: 'power2.in'
    })
      .to(
        whiteRef.current,
        {
          // Complete the coverage: the screen is fully white at this point.
          opacity: 1,
          duration: 0.3,
          ease: 'power1.in',
          onComplete: () => onZoomComplete?.()
        },
        '-=0.25'
      )
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
      <div ref={whiteRef} className="absolute inset-0 bg-white opacity-0 pointer-events-none" />
    </div>
  )
}

export default LoadingScreen
