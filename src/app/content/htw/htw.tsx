import Link from 'next/link';
import styles from './htw.module.css';
import Image from 'next/image';

export default function HTW(){
    return (
        <main className={styles.container}>
            <Image className={styles.photo} src={'/htw.png'} alt={''} width={550} height={500}></Image>
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
                        Adjust the brightness level as you like. Free to adjust by touch control keys, long press <Image className={styles.power} src={'/power.svg'} alt={''} width={18} height={18}></Image> to adjust brightness freely and meet the brightness needs of different environment and different people.
                        </ul>
                    </li>
                    <li>3 LIGHT COLOR MODE
                        <ul>
                        Light Options create a tranquil ambiance that helps reduce stress and anxiety, making it perfect for relaxation after a long day.
                        </ul>
                    </li>
                    <li>BRIGHTNESS ADJUSTMENT
                        <ul>
                        Easy switch between warm and cool light to create the perfect ambiance.
                        </ul>
                    </li>
                </ul>
                <p>*More information about the technical specifications is available in the file below.</p>
                <Link className={styles.pdf} href={''}>
                    <span>Technical specifications.pdf</span>
                    <span>📃</span>
                </Link>
            </div>
        </main>
    )
}