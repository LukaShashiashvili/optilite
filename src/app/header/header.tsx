import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';

export default function header(){
    return(
        <header className={styles.container}>
            <div className={styles.left}>
                <Image src={'/delivery.svg'} alt="" width={50} height={50}></Image>
                <div> FREE SHIPPING 
                    <div>IN UNITED STATES!</div>
                </div>
            </div>
            <Link href= {''} className={styles.mid}>
                <Image src={'/logo.png'} alt="" width={120} height={65}></Image>
            </Link>
            <div className={styles.right}>
                <Image src={'/guarantee.png'} alt="" width={40} height={40}></Image>
                <div>
                    30 DAY 100% MONEY
                    <div>BACK GUARANTEE</div>
                </div>
            </div>
        </header>
    )
}