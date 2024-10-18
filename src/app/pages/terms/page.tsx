import Header from '@/app/header/header';
import styles from './terms.module.css';
import Footer from '@/app/footer/footer';

export default function Terms(){
    return(
        <main className={styles.container}>
            <Header></Header>
            <div className={styles.content}>
                <h3>Terms of Services</h3>
            </div>
            <Footer></Footer>
        </main>
    )
}