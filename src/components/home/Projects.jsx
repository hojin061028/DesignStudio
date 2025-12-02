import styles from './Projects.module.css'

const PROJECTS = [
    { id: 1, title: 'The Gravity Zero', category: 'VFX / Simulation', size: 'large' },
    { id: 2, title: 'Neon Genesis', category: 'Motion Graphics', size: 'medium' },
    { id: 3, title: 'Liquid Dreams', category: '3D Art', size: 'small' },
    { id: 4, title: 'Cyber Punk', category: 'Game Asset', size: 'medium' },
    { id: 5, title: 'Abstract Flow', category: 'R&D', size: 'small' },
]

export default function Projects() {
    return (
        <section className={styles.projects}>
            <h2 className={styles.header}>Selected Works</h2>
            <div className={styles.grid}>
                {PROJECTS.map((project) => (
                    <div key={project.id} className={`${styles.card} ${styles[project.size]}`}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.title}>{project.title}</h3>
                            <p className={styles.category}>{project.category}</p>
                        </div>
                        <div className={styles.overlay}></div>
                    </div>
                ))}
            </div>
        </section>
    )
}
