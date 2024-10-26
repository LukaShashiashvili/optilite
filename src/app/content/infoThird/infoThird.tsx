import Link from 'next/link';
import styles from './infoThird.module.css';
import Image from 'next/image'
import Button from '@/app/components/button/button';

export default function InfoThird(){
    return(
        <main className={styles.container}>
            <div className={styles.mainH}>
                <h2>
                    KEY SPECIFICATIONS
                </h2>
                <p>
                    This combination of specifications and functionality makes Optilite Pro an essential tool for creating an efficient and pleasant environment.
                </p>
                <Link className={styles.button} href={'#Buy'}>
                    <Button title={'GET OPTILITE PRO NOW ⚡'}></Button>
               </Link>
            </div>
            <div className={styles.icons}>
                <div>
                    <Image src={'/icons/1.png'} alt={''} width={50} height={50}></Image>
                    <span>Asymmetric Light Source</span>
                </div>
                <div>
                    <Image src={'/icons/2.png'} alt={''} width={50} height={50}></Image>
                    <span>1 Second Installation</span>
                </div>
                <div>
                    <Image src={'/icons/3.png'} alt={''} width={50} height={50}></Image>
                    <span>Space Saving</span>
                </div>
                <div>
                    <Image src={'/icons/4.png'} alt={''} width={50} height={50}></Image>
                    <span>Stepless Dimming </span>
                </div>
                <div>
                    <Image src={'/icons/5.png'} alt={''} width={50} height={50}></Image>
                    <span>No Blue Light </span>
                </div>
                <div>
                    <Image src={'/icons/6.png'} alt={''} width={50} height={50}></Image>
                    <span>No Screen Glare</span>
                </div>
                <div>
                    <Image src={'/icons/7.png'} alt={''} width={50} height={50}></Image>
                    <span>3 Light Color Mode</span>
                </div>
                <div>
                    <Image src={'/icons/8.png'} alt={''} width={50} height={50}></Image>
                    <span>Timer Mode</span>
                </div>
                <div>
                    <Image src={'/icons/9.png'} alt={''} width={50} height={50}></Image>
                    <span>USB Powered</span>
                </div>
            </div>
        </main>
    )
}