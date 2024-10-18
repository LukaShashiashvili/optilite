import Header from '@/app/header/header';
import styles from './privacy.module.css';
import Footer from '@/app/footer/footer';

export default function Privacy(){
    return(
        <main className={styles.container}>
            <Header></Header>
            <div className={styles.content}>
                <h3>Privacy Policy</h3>
            </div>
            <Footer></Footer>
        </main>
    )
}