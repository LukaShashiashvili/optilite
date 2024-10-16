import styles from './difference.module.css';
import Image from 'next/image';

export default function Difference(){
    return(
        <main className={styles.container}>
            <div className={styles.text}>
                <h2>Experience Better Lighting, Boost Your Efficience</h2>
                <p>Whether you're working late or just need clearer visibility, a high-quality lamp can reduce eye strain and help you focus better. Compare the difference and elevate your productivity.</p>
            </div>
            <Image src={'/asymmetric.png'} alt={''} width={500} height={400}></Image>
        </main>
    )
}