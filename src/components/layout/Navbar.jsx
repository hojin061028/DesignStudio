'use client'

import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                {/* Logo removed as requested */}
            </div>
            <ul className={styles.navLinks}>
                <li><Link href="/">home</Link></li>
                <li><Link href="/images">images</Link></li>
                <li><Link href="/videos">videos</Link></li>
                <li><Link href="/option">option</Link></li>
            </ul>
        </nav>
    )
}
