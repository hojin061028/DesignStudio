import MasonryGrid from '@/components/layout/MasonryGrid'
import styles from './page.module.css'

// User assets
const videos = [
    { src: '/assets/videos/Hailuo_Video_visuals_ An extreme close-up, _447022792336445444.mp4', alt: 'User Video 2' },
    { src: '/assets/videos/social_u7263244593_httpss.mj.run0OnANKQE0A4_--ar_11_--video_1_758dc436-aa2f-477a-a66b-e3c25354685c_2.mp4', alt: 'User Video 3' },
    { src: '/assets/videos/social_u7263244593_httpss.mj.runoLLH0zmjdxU_--ar_11_--video_1_feea0747-254d-43a6-b42c-a99b18db84bc_1.mp4', alt: 'User Video 4' },
]

export default function VideosPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Videos</h1>
            </div>
            <MasonryGrid items={videos} type="video" />
        </div>
    )
}
