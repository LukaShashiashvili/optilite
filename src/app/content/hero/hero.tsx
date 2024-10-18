import Button from '@/app/components/button/button';
import styles from './hero.module.css';
import Link from 'next/link';
import Image from 'next/image';
import HeroDown from './heroDown';


export default function Hero(){
    
    return(
        <main className={styles.container}>
            <Image className={styles.photo} src={'/heroPhoto.png'} alt="photo" width={700} height={540}></Image>
            <div className={styles.right}>
                <div className={styles.text}>
                    <div className={styles.paragraph}>
                        <h1>TOP SCREEN HANGING LIGHT BAR FOR EYE COMFORT</h1>
                        <span>Create a warm, inviting workspace with eye protection hanging light bar designed especially for screen users.</span>
                    </div>
                <Link className={styles.button} href={'https://4a5406-31.myshopify.com/products/asymmetric-office-eye-protection-screen-light-electrodeless-dimming'}>
                    <Button title={'GET OPTILITE PRO NOW⚡'}></Button>
                </Link>
            </div>
                <HeroDown></HeroDown>
            </div>
            
        </main>
    )
}