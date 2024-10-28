import Link from 'next/link';
import styles from './htw.module.css';
import Image from 'next/image';

export default function HTW(){
    return (
        <main className={styles.container}>
            <Image className={styles.photo} src={'/laptop.png'} alt={'Laptop'} width={750} height={500}></Image>
            <div className={styles.text}>
                <h2>MAIN FEATURES</h2>
                <ul className={styles.htw}>
                    <li>EASY SET-UP
                        <ul>
                            Quick and hassle-free installation. The process takes just seconds, allowing you to set it up quickly and start using it right away.
                        </ul>
                    </li>
                    <li>USB POWERED
                        <ul>
                            OPTILITE PRO can be quickly connected to any USB outlet, making it ideal for home, office, or travel.
                        </ul>
                    </li>
                    <li>STEPLESS DIMMING
                        <ul>
                            Adjust the brightness level to your exact preference. Simply long-press touch control key to smoothly change the light intensity to perfectly adapt to the lighting needs of different environment and different users.<Image className={styles.power} src={'/power.svg'} alt={'Power'} width={18} height={18}></Image>
                        </ul>
                    </li>
                    <li>3 LIGHT COLOR MODE
                        <ul>
                            Allow users to easily switch between cool, neutral, and warm lighting, offering flexibility for different tasks and moods.
                        </ul>
                    </li>
                    <li>QUICK ACCESS TO FEATURES
                        <ul>
                        Touch mode provides instant access to features such as power on/off, dimming, color adjustments, timer setting, making it convenient for users to adjust their lighting settings instantly.
                        </ul>
                    </li>
                </ul>
                <p>*More information about the technical specifications is available in the file below.</p>
                <Link className={styles.pdf} target='_blank' href={'https://pdfupload.io/docs/b5b1dd06'}>
                    <span>Technical specifications.pdf</span>
                    <span>📃</span>
                </Link>
            </div>
        </main>
    )
}