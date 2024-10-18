import Header from '@/app/header/header';
import styles from './refund.module.css';
import Footer from '@/app/footer/footer';

export default function Refund(){
    return(
        <main className={styles.container}>
            <Header></Header>
            <div className={styles.content}>
                <h3>Refund Policy</h3>
            </div>
            <Footer></Footer>
        </main>
    )
}