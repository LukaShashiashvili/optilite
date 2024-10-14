import Button from '@/app/components/button/button';
import styles from './hero.module.css';
import Link from 'next/link';

export default function Hero(){


    return(
        <main className={styles.container}>
            <img className={styles.photo} src={'/photo.webp'} alt="photo" />
            <div className={styles.text}>
                <h1>Advanced Computer Screen Eye Protection Lamp</h1>
                <p>Your Guardian for Eye Comfort</p>
                <Link href={'https://4a5406-31.myshopify.com/products/asymmetric-office-eye-protection-screen-light-electrodeless-dimming'}><Button title={'GET PRODUCT NOW'}></Button></Link>
            </div>
        </main>
    )
}