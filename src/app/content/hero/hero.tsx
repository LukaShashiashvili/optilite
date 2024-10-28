import Button from '@/app/components/button/button';
import styles from './hero.module.css';
import Link from 'next/link';
import Image from 'next/image';
import HeroDown from './heroDown';


export default function Hero(){
    
    return(
        <main className={styles.container}>
            <Image className={styles.photo} src={'/heroPhoto.png'} alt={"optilite"} width={650} height={500}></Image>
            <div className={styles.right}>
                <div className={styles.text}>
                    <div className={styles.paragraph}>
                        <h1>TOP SCREEN HANGING LIGHT BAR FOR EYE COMFORT</h1>
                        <span>Create a warm, inviting workspace with eye protection hanging light bar designed especially for screen users.</span>
                    </div>
                <Image className={styles.photoResp} src={'/heroPhoto.png'} alt={"optilite"} width={527} height={428}></Image>
                <Link className={styles.button} href={'#Buy'}>
                    <Button clName={styles.button} title={'GET OPTILITE PRO NOW⚡'}></Button>
                </Link>
            </div>
                <HeroDown></HeroDown>
            </div>
            
        </main>
    )
}