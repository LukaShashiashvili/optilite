import Link from 'next/link';
import styles from './include.module.css';
import Image from 'next/image';
import Button from '@/app/components/button/button';

export default function Include(){
    return(
        <main className={styles.container}>
            <div className={styles.left}>
                <div className={styles.text}>
                    <h2>WHAT&apos;S INCLUDED</h2>
                    <p>The package will include the screen hanging light, USB cable, user manual, Once it arrives, all you need to do is open the box and push the button to turn it on.</p>
                </div>
                <div className={styles.down}>
                    <div className={styles.icons}>
                        <div className={styles.items}>
                            <Image className={styles.item} src={'/product.png'} alt={''} width={65} height={50}></Image>
                            <div>1x Light<div>Bar</div></div>
                        </div>
                        <div className={styles.items}>
                            <Image className={styles.item} src={'/usb.png'} alt={''} width={40} height={30}></Image>
                            <div>1x USB<div>Cable</div></div>
                        </div>
                        <div className={styles.items}>
                            <Image className={styles.item} src={'/manual.png'} alt={''} width={65} height={50}></Image>
                            <div>1x User<div>Manual</div></div>
                        </div>
                    </div>
                    <Image className={styles.photoResp} src={'/includePhoto.png'} alt={''} width={500} height={500}></Image>
                    <Link className={styles.button} href={'#Buy'}>
                        <Button title={'GET OPTILITE PRO NOW ⚡'}></Button>
                    </Link>
                </div>
            </div>
            <Image className={styles.photo} src={'/includePhoto.png'} alt={''} width={500} height={500}></Image>
        </main>
    )
}