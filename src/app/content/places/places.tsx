import styles from './places.module.css';
import Image from 'next/image';

export default function Places(){
    return(
        <main className={styles.container}>
            <div className={styles.left}>
                <Image src={'/places/cafe.png'} alt='' width={200} height={200}></Image>
                <Image src={'/places/bedroom.png'} alt='' width={200} height={200}></Image>
                <Image src={'/places/living.png'} alt='' width={200} height={200}></Image>
                <Image src={'/places/store.png'} alt='' width={200} height={200}></Image>
            </div>
            <div className={styles.text}>
                <h2>Highly Portable</h2>
                <h3>Ideal for Use Anywhere</h3>
                <p>To work effectively with you anytime, anywhere, do not disturb others, create a comfortable and cozy environment.</p>
            </div>
        </main>
    )
}