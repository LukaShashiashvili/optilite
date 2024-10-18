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
                    <p>The package will include the Screen Hanging light, USB cable, user manual, Once it arrives, all you need to do is open the box and push the button to turn it on.</p>
                </div>
                <div className={styles.down}>
                    <div className={styles.icons}>
                        <div className={styles.items}>
                            <Image src={'/miniProduct.png'} alt={''} width={70} height={20}></Image>
                            <span>1x Optilite Pro</span>
                        </div>
                        <div className={styles.items}>
                            <Image src={'/usb.png'} alt={''} width={40} height={30}></Image>
                            <span>1x USB Cable</span>
                        </div>
                        <div className={styles.items}>
                            <Image src={'/manual.png'} alt={''} width={45} height={40}></Image>
                            <span>1x User Manual</span>
                        </div>
                    </div>
                    <Link className={styles.button} href={''}>
                        <Button title={'GET OPTILITE PRO NOW ⚡'}></Button>
                    </Link>
                </div>
            </div>
            <Image className={styles.photo} src={'/includePhoto.png'} alt={''} width={500} height={500}></Image>
        </main>
    )
}