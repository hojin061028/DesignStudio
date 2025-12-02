import styles from './MasonryGrid.module.css'
import { prefixPath } from '@/utils/prefix'

export default function MasonryGrid({ items, type = 'image' }) {
    return (
        <div className={styles.grid}>
            {items.map((item, index) => (
                <div key={index} className={styles.item}>
                    {type === 'image' ? (
                        <img src={prefixPath(item.src)} alt={item.alt || `Gallery item ${index}`} className={styles.image} />
                    ) : (
                        <div className={styles.videoWrapper}>
                            <video
                                src={prefixPath(item.src)}
                                className={styles.video}
                                controls
                                muted
                                loop
                                playsInline
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
