import styles from './heroDown.module.css';
import Image from 'next/image';



export default function HeroDown(){
    return(
        <main className={styles.container}>
            <ul className={styles.icons}>
                <li><Image src={'/no-flashing.png'} alt="" width={50} height={50}></Image>No Flashin Video</li>
                <li><Image src={'/CRI.png'} alt="" width={50} height={50}></Image> Ra90 High CRI</li>
                <li><Image src={'/brightness.png'} alt="" width={50} height={50}></Image>Brightness Adjustment</li>                    
                <li><Image src={'/color-mode.png'} alt="" width={50} height={50}></Image> 3 Light Color</li>
            </ul>
             <div className={styles.box}>
                <Image className={styles.photo} src={'/customer.webp'} alt={''} width={70} height={70}></Image>
                <div className={styles.text}>
                    <p className={styles.comment}>I have been using this light for a bit, and honestly, OPTILITE PRO is a game changer! No flickering at all, which is great because my eyes do not get tired. The color accuracy is spot on, so everything looks clear and vibrant.</p>
                    <p className={styles.customerName}>⭐⭐⭐⭐⭐ Natalia K. Our Customer</p>                    
                </div>
            </div>
        </main>
    )
}