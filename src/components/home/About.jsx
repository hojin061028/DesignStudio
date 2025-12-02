'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './About.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
    const textRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        const el = textRef.current

        gsap.to(el, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
            x: '-20%', // Move text horizontally
            skewX: 10, // Skew effect
        })
    }, [])

    return (
        <section className={styles.about} ref={containerRef}>
            <div className={styles.backgroundText} ref={textRef}>
                DIGITAL ALCHEMY VFX DIGITAL ALCHEMY VFX
            </div>

            <div className={styles.content}>
                <h2 className={styles.headline}>Light and Data, Sculpted.</h2>
                <p className={styles.body}>
                    I am a Visual Effects Designer who translates abstract worlds into concrete experiences.
                    Using code and 3D tools, I bridge the gap between imagination and reality.
                </p>
            </div>

            {/* The 3D Tech Stack will be rendered in the main Canvas, controlled by scroll */}
            <div className={styles.techStackPlaceholder}>
                {/* Placeholder for layout purposes */}
            </div>
        </section>
    )
}
