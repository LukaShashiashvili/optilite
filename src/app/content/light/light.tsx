import styles from './light.module.css';
import Image from 'next/image';

export default function Light(){
    return(
        <main className={styles.container}>
            <div className={styles.text}>
                <h2>ASYMMETRIC LIGHT SOURCE DESIGN</h2>
                <p>Light is directed at a targeted angle, reducing glare, enhancing visual comfort by preventing harsh shadows and reflections.</p>
            </div>
            <Image className={styles.photo} src={'/light.png'} alt={'Light'} width={600} height={400}></Image>
        </main>
    )
}