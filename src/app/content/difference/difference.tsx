import { Comparison } from './comparison';
import styles from './difference.module.css';
import Image from 'next/image';

export default function Difference(){
    return(
        <main className={styles.container}>
            <div className={styles.text}>
                <h2>Experience Better Lighting, Boost Your Efficiency</h2>
                <p>Whether you are working late or just need clearer visibility, Optilite Pro can reduce eye strain and help you focus better. Compare the difference and elevate your productivity.</p>
            </div>
            {/* <Image className={styles.photo} src={'/asymmetric.png'} alt={''} width={500} height={400}></Image> */}
            <Comparison></Comparison>
        </main>
    )
}