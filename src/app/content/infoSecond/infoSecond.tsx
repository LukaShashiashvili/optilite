import Link from 'next/link';
import styles from './infoSecond.module.css';
import Image from 'next/image'
import Button from '@/app/components/button/button';

export default function infoSecond(){
    return(
        <main className={styles.container}>
            <div className={styles.text}>
                <span>This product is only available online!</span>
                <div className={styles.header}>
                    <p>PROTECT YOURSELF</p>
                    <h2>RA90 HIGH COLOUR RENDERING INDEX</h2>
                    <h3>Allows you to see the true colour</h3>
                </div>
                <p className={styles.paragraph}>The colour rendering index of the screen light is as high as RA90 which can trully show the natural color of the object and avoid the bad impression caused by color cast</p>
                <Link className={styles.button} href={'#Buy'}>
                    <Button title={'GET OPTILITE PRO NOW ⚡'}></Button>
                </Link>
            </div>
            <Image className={styles.photo} src={'/productSecond.png'} alt={'Product'} width={650} height={400}></Image>
        </main>
    )
}