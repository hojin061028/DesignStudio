'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import styles from './Contact.module.css'

export default function Contact() {
    const buttonRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        const button = buttonRef.current
        const text = textRef.current

        const handleMouseMove = (e) => {
            const rect = button.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2

            gsap.to(button, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out'
            })

            gsap.to(text, {
                x: x * 0.1,
                y: y * 0.1,
                duration: 0.3,
                ease: 'power2.out'
            })
        }

        const handleMouseLeave = () => {
            gsap.to([button, text], {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)'
            })
        }

        button.addEventListener('mousemove', handleMouseMove)
        button.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            button.removeEventListener('mousemove', handleMouseMove)
            button.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <section className={styles.contact}>
            <h2 className={styles.header}>Ready to start a vision?</h2>
            <button className={styles.button} ref={buttonRef}>
                <span className={styles.text} ref={textRef}>Ignite the Project</span>
            </button>
            <footer className={styles.footer}>
                <p>© 2025 Digital Alchemy. Crafted in 3D Space.</p>
            </footer>
        </section>
    )
}
