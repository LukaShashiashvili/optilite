import Header from '@/app/header/header';
import styles from './contact.module.css';
import Footer from '@/app/footer/footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact(){
    return(
        <main className={styles.container}>
            <Header></Header>
            <div className={styles.content}>
                <h3 className={styles.header}>Contact Information</h3>
                <div className={styles.box}>
                    <Link className={styles.link} href={'mailto:example@gmail.com'}><Image src={'/contact/mail.svg'} alt={''} width={30} height={30}></Image><span>optilitepro@gmail.com</span></Link>
                    <Link className={styles.link} href={'facebook.com'}><Image src={'/contact/facebook.svg'} alt={''} width={30} height={30}></Image><span>Facebook</span></Link>
                    <Link className={styles.link} href={'youtube.com'}><Image src={'/contact/youtube.svg'} alt={''} width={30} height={30}></Image><span>Youtube</span></Link>
                    <Link className={styles.link} href={'instagram.com'}><Image src={'/contact/instagram.svg'} alt={''} width={30} height={30}></Image><span>Instagram</span></Link>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}