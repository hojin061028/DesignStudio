import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.topRow}>
                <div className={styles.links}>
                    <Link href="/images" className={styles.link}>Image</Link>
                    <Link href="/videos" className={styles.link}>Video</Link>
                </div>
            </div>

            <div className={styles.mainTextContainer}>
                <h1 className={styles.mainText}>DESIGNSTUDIO</h1>
            </div>
        </footer>
    )
}
