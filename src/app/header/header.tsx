import Link from 'next/link';
import styles from './header.module.css';

export default function header(){
    return(
        <header className={styles.container}>
            <div className={styles.left}>
                <img src={'/delivery.svg'} alt=""/> 
                <div> FREE SHIPPING 
                    <div>IN UNITED STATES!</div>
                </div>
            </div>
            <Link href= {''} className={styles.mid}>
                <img src={'/logo.png'} alt="" />
            </Link>
            <div className={styles.right}>
                <img src={'/guarantee.png'} alt="" />
                <div>
                    30 DAY 100% MONEY
                    <div>BACK GUARANTEE</div>
                </div>
            </div>
        </header>
    )
}