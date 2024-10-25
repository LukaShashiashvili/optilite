import Header from '@/app/header/header';
import styles from './privacy.module.css';
import Footer from '@/app/footer/footer';

export default function Privacy(){
    return(
        <main className={styles.container}>
            <Header></Header>
            <div className={styles.content}>
                <h3>Privacy Policy</h3>
                <div className={styles.text}>
                <h5>At OPTILITE PRO we prioritize your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and protect your data.</h5>
                <ul>
                    <span className={styles.bold}>Information We Collect:</span>
                    <li>
                        <span className={styles.bold}>Personal Data:</span> Name, email, shipping address, payment details (when placing orders or contacting us).
                    </li>
                    <li>
                        <span className={styles.bold}>Automatically Collected Data:</span> IP address, device info, and browsing data via cookies.
                    </li>
                </ul>
                <ul>
                    <span className={styles.bold}>How We Use Your Information:</span>
                    <li>
                        <span className={styles.bold}>Order Processing: </span>To fulfill your purchases and provide customer service.
                    </li>
                    <li>
                        <span className={styles.bold}>Site Improvements: </span>To enhance user experience through data analysis.
                    </li>
                    <li>
                        <span className={styles.bold}>Fraud Prevention: </span>To secure transactions and prevent fraud.
                    </li>
                </ul>
                <h4>Data Sharing:</h4>
                    <p>We only share information with trusted third-party providers for payment processing, shipping, and legal compliance.</p>
                <h4>Data Security:</h4>
                    <p>We use encryption and secure servers to protect your data.</p>
                <ul>
                    <span className={styles.bold}>Your Rights:</span>
                    <li>
                        <span className={styles.bold}>Access & Update: </span>You can access and correct your data.
                    </li>
                    <li>
                        <span className={styles.bold}>Deletion: </span>Request deletion of your data, unless we are required to keep it.
                    </li>
                    <li>
                        <span className={styles.bold}>Opt-Out: </span>Unsubscribe from emails at any time.
                    </li>
                </ul>
                <h4>Contact:</h4>
                <p>For questions or concerns, contact us at <span className={styles.bold}>support@optilite.pro</span></p>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}