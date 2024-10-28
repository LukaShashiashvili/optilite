import styles from './services.module.css';
import Image from 'next/image';

export default function Services(){
    return(
        <main className={styles.container}>
            <div className={styles.box}>
                <Image src={'/delivery.png'} alt='delivery' width={100} height={100}></Image>
                <h4>FREE SHIPPING IN the USA</h4>
                <p>Enjoy the convenience of having your product delivered directly to your doorstep without incurring any additional shipping fees.</p>
            </div>
            <div className={styles.box}>
                <Image src={'/guarantee.png'} alt='guarantee' width={100} height={100}></Image>
                <h4>30 DAY 100% MONEY BACK GUARANTEE</h4>
                <p>We believe you&apos;ll be thrilled with your OPTILITE PRO purchase, so we offer a 30-day satisfaction guarantee! Try it out today without any risk. If it doesn&apos;t meet your expectations, simply return it within 30 days —no questions asked.</p>
            </div>
        </main>
    )
}