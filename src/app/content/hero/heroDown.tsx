import styles from './heroDown.module.css';
import Image from 'next/image';



export default function HeroDown(){
    return(
        <main className={styles.container}>
            <ul className={styles.icons}>
                <li><Image src={'/no-flashing.png'} alt="" width={50} height={50}></Image>No Flashing Video</li>
                <li><Image src={'/CRI.png'} alt="" width={50} height={50}></Image> Ra90 High CRI</li>
                <li><Image src={'/brightness.png'} alt="" width={50} height={50}></Image>Brightness Adjustment</li>                    
                <li><Image src={'/color-mode.png'} alt="" width={50} height={50}></Image> 3 Light Color</li>
            </ul>
             <div className={styles.box}>
                <Image className={styles.photo} src={'/customer.png'} alt={''} width={70} height={70}></Image>
                <div className={styles.text}>
                    <p className={styles.comment}>I absolutely love OPTILITE PRO. I used to experience eye fatigue and discomfort in front of my screen. Since I started using OPTILITE PRO, my eyes feel relaxed and strain-free. The clarity it provides is fantastic and the reduction in blue light is incredibly noticeable. It's a must-have for regular screen uses.</p>
                    <p className={styles.customerName}>⭐⭐⭐⭐⭐ Natalia K. Our Customer</p>                    
                </div>
            </div>
        </main>
    )
}