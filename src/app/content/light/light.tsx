import styles from './light.module.css';
import Image from 'next/image';

export default function Light(){
    return(
        <main className={styles.container}>
            <div className={styles.text}>
                <h2>ASYMETRIC LIGHT SOURCE DESIGN</h2>
                <p>Provides focused illumination for the desktop area that deliberately refrains from casting light onto the device monitor, thereby ensuring optimal visibility and minimizing distractions.</p>
            </div>
            <Image className={styles.photo} src={'/light.png'} alt={''} width={600} height={400}></Image>
        </main>
    )
}