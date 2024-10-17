import Video from '@/app/components/video/video';
import styles from './videoSection.module.css';

export default function VideoSection(){
    return(
        <main className={styles.container}>
            <div className={styles.text}>
                <h3>Product Video</h3>
                <h2>ENJOY A COZY ATMOSPHERE</h2>
                <p>OPTILITE PRO will allow you to create the environment you want, do not disturb others, protect your eyes from the screen.</p>
            </div>
            <Video></Video>
        </main>
    )
}