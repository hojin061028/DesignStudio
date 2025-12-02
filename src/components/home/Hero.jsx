import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    <span className={styles.highlight}>Design</span> studio
                </h1>
            </div>
        </section>
    )
}
