import styles from './symetric.module.css';
import Image from 'next/image';

export default function Symetric(){
    return(
        <main className={styles.container}>
            <Image className={styles.photo} src={'/phone.png'} alt={''} width={550} height={500}></Image>
            <div className={styles.text}>
                <div className={styles.headers}>
                    <h2>
                        No Visible Stroboflash
                    </h2>
                    <h3>Reduce Eye Harm</h3> 
                </div>
                <div className={styles.box}>
                    <Image className={styles.camera} src={'/camera.svg'} alt={''} width={50} height={50}></Image>
                    <p className={styles.boxText}>Take out the mobile phone and turn on the camera, aim at the light source to observe the mobile phone screen, there is no stroboscopic ripple.</p>
                </div>
            </div>
            
        </main>
    )
}