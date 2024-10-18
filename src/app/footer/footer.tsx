import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';

export default function Footer(){
    return(
        <div className={styles.container}>
            <Link href={'#'} ><Image className={styles.left} src={'/logo.png'} alt={''} width={150} height={65}></Image></Link>
            <div className={styles.mid}>
                <span>Copyright 2024. All rights reserved.</span>
                <div className={styles.links}>
                    <Link href={'../pages/terms'}>Terms of Service</Link>
                    <Link href={'../pages/privacy'}>Privacy Policy</Link>
                    <Link href={'../pages/refund'}>Refund Policy</Link>
                    <Link href={'../pages/contact'}>Contact Information</Link>
                </div>
            </div>
            <div className={styles.icons}>
                <Image src={''} alt={'payment'} height={100} width={100}></Image>
                <Image src={''} alt={'payment'} height={100} width={100}></Image>
                <Image src={''} alt={'payment'} height={100} width={100}></Image>
                <Image src={''} alt={'payment'} height={100} width={100}></Image>
                <Image src={''} alt={'payment'} height={100} width={100}></Image>
            </div>
        </div>
    )
}