import Header from '@/app/header/header';
import styles from '../page.module.css';
import Footer from '@/app/footer/footer';

export default function Terms(){
    return(
        <main className={styles.container}>
            <Header></Header>
            <div className={styles.content}>
                <h3>Terms of Services</h3>
                <div className={styles.text}>
                    <ul>
                        <span className={styles.bold}>Acceptance of Terms: </span>By using this website, you agree to comply with these terms and conditions.
                        <li><span className={styles.bold}>Use of Content: </span>All materials on the site are for personal, non-commercial use only.</li>
                        <li><span className={styles.bold}>Intellectual Property: </span>All content is protected by copyright and trademark laws.</li>
                        <li><span className={styles.bold}>Disclaimer of Warranties: </span>The materials are provided "as is" without warranties of any kind.</li>
                        <li><span className={styles.bold}>Limitation of Liability: </span>OPTILITE PRO is not liable for any damages arising from your use of the site.</li>
                        <li><span className={styles.bold}>Modifications: </span>These terms may be updated at any time without notice, and you are responsible for reviewing them regularly.</li>
                    </ul>
                    <p>By continuing to use the website, you acknowledge and accept these key points.</p>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}