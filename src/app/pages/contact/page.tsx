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
                    <Link className={styles.link} href={'mailto:optilitepro@gmail.com.com'}><Image src={'/contact/mail.svg'} alt={'Gmail'} width={30} height={30}></Image><span>optilitepro@gmail.com</span></Link>
                    <Link className={styles.link} href={'https://www.facebook.com/profile.php?id=61567782181774'}><Image src={'/contact/facebook.svg'} alt={'Facebook'} width={30} height={30}></Image><span>Facebook</span></Link>
                    <Link className={styles.link} href={'https://youtube.com'}><Image src={'/contact/youtube.svg'} alt={'Youtube'} width={30} height={30}></Image><span>Youtube</span></Link>
                    <Link className={styles.link} href={'https://instagram.com'}><Image src={'/contact/instagram.svg'} alt={'Instagram'} width={30} height={30}></Image><span>Instagram</span></Link>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}