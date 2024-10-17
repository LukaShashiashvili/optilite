import styles from './video.module.css';
import Image from 'next/image';

export default function Video(){
    return(
        <main className={styles.container}>
            <div className={styles.text}>

            </div>
            <video src={'/video.mp4'} width={40}></video>
        </main>
    )
}