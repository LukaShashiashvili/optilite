import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';

export default function header(){
    return(
        <header className={styles.container}>
            <div className={styles.left}>
                <Image src={'/delivery.png'} alt="" width={60} height={40}></Image>
                <div>
                    <span className={styles.diff}>
                        FREE SHIPPING IN
                    </span>
                    <div>THE UNITED STATES!</div>
                </div>
            </div>
            <Link href= {'/'} className={styles.mid}>
                <Image src={'/logo.png'} alt="" width={150} height={65}></Image>
            </Link>
            <div className={styles.right}>
                <Image src={'/guarantee.png'} alt="" width={50} height={40}></Image>
                <div>
                    <span className={styles.diff}>30 DAY </span>100% MONEY
                    <div>BACK GUARANTEE</div>
                </div>
            </div>
        </header>
    )
}