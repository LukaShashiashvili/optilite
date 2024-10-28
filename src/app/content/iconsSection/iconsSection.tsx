import styles from './iconsSection.module.css';
import Image from 'next/image';

export default function IconsSection(){
    return(
        <main className={styles.container}>
            <div className={styles.icon}>
                <Image src={'/1.png'} alt={'1'} width={100} height={100}></Image>
                <h5>Secure Your Vision, Support Sustainability</h5>
                <p>Contribute to a greener planet by choosing an energy-efficient lighting solution that lowers energy consumption and reduces your carbon footprint.</p>
            </div>
            <div className={styles.icon}>
                <Image src={'/2.png'} alt={'2'} width={100} height={100}></Image>
                <h5>No lamp base needed</h5>
                <p>Maximize your desktop space and experience the difference in comfort and productivity.</p>
            </div>
            <div className={styles.icon}>
                <Image src={'/3.png'} alt={'3'} width={100} height={100}></Image>
                <h5>Respectful & peaceful co-existence in shared space</h5>
                <p>Allow more space to enjoy activities without disturbing others.</p>
            </div>
            <div className={styles.icon}>
                <Image src={'/4.png'} alt={'4'} width={100} height={100}></Image>
                <h5>A Companion for All Ages</h5>
                <p>Designed to be useful, enjoyable, and beneficial for individuals for all ages.</p>
            </div>
        </main>
    )
}