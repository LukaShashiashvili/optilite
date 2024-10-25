import { Comparison } from './comparison';
import styles from './difference.module.css';
import Image from 'next/image';

export default function Difference(){
    return(
        <main className={styles.container}>
            <div className={styles.text}>
                <h2>Experience Better Lighting, Boost Your Efficiency</h2>
                <div className={styles.paragraph}>OPTILITE PRO is designed to minimize eye strain and enhance your focus, allowing you to work smarter and more comfortably. 
                    <div>
                        <b>Compare the difference</b> and elevate your productivity.
                    </div>
                </div>
            </div>
            <Comparison></Comparison>
        </main>
    )
}