import styles from './places.module.css';
import Image from 'next/image';

export default function Places(){
    return(
        <main className={styles.container}>
            <div className={styles.left}>
                <Image src={'/places/1.jpg'} alt='' width={200} height={150}></Image>
                <Image src={'/places/2.jpg'} alt='' width={150} height={200}></Image>
                <Image src={'/places/4.jpg'} alt='' width={170} height={150}></Image>
                <Image src={'/places/3.jpg'} alt='' width={200} height={150}></Image>
            </div>
            <div className={styles.text}>
                <div className={styles.headers}>
                    <h2>Highly Portable</h2>
                    <h3>Ideal for Use Anywhere</h3>
                </div>
                <p>OPTILITE PRO is designed for ultimate portability, featuring a lightweight and compact design that makes it easy to carry and set up anywhere. Whether you are working from home, traveling, or simply moving from room to room, its convenient hanging mechanism ensures you have optimal lighting at your fingertips, enhancing your productivity and comfort wherever you go.</p>
            </div>
        </main>
    )
}