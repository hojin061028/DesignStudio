import MasonryGrid from '@/components/layout/MasonryGrid'
import styles from './page.module.css'

// User assets
const images = [
    { src: '/assets/images/adfaf.png', alt: 'User Image 1' },
    { src: '/assets/images/adfasdfasf.png', alt: 'User Image 2' },
    { src: '/assets/images/asdfasdf.png', alt: 'User Image 3' },
    { src: '/assets/images/asdfasfd.png', alt: 'User Image 4' },
    { src: '/assets/images/Generated Image November 04, 2025 - 12_24PM.png', alt: 'Generated Image 1' },
    { src: '/assets/images/Generated Image November 04, 2025 - 12_25PM.png', alt: 'Generated Image 2' },
    { src: '/assets/images/qs.png', alt: 'User Image 5' },
]

export default function ImagesPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Images</h1>
            </div>
            <MasonryGrid items={images} type="image" />
        </div>
    )
}
