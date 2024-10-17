import styles from './video.module.css';

export default function Video(){
    return(
        <main className={styles.container}>
            <div className={styles.text}>

            </div>
            <video src={'/video.mp4'} width={40}></video>
        </main>
    )
}