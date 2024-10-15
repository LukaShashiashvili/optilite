import Button from '@/app/components/button/button';
import styles from './hero.module.css';
import Link from 'next/link';
import Image from 'next/image';
import HeroDown from './heroDown';


interface Props{
        clName?: string;
    }

export default function Hero(props: Props){
    const classNames = [styles.container]

    if(props.clName){
        classNames.push(props.clName);
    }
    
    return(
        <main className={classNames.join(' ')}>
            <Image className={styles.photo} src={'/heroPhoto.png'} alt="photo" width={850} height={800}></Image>
            <div className={styles.right}>
                <div className={styles.text}>
                    <div className={styles.paragraph}>
                        <h1>Advanced Computer Screen Eye Protection Lamp</h1>
                        <p>Create clutter-free, comfortable, eye protection designed specifically for long-term computer users</p>
                    </div>
                <Link href={'https://4a5406-31.myshopify.com/products/asymmetric-office-eye-protection-screen-light-electrodeless-dimming'}>
                    <Button title={'GET OPTILITE PRO NOW⚡'}></Button>
                </Link>
            </div>
                <HeroDown></HeroDown>
            </div>
            
        </main>
    )
}