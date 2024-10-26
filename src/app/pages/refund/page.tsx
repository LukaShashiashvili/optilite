import Header from '@/app/header/header';
import styles from '../page.module.css';
import Footer from '@/app/footer/footer';

export default function Refund(){
    return(
        <main className={styles.container}>
            <Header></Header>
            <div className={styles.content}>
                <h3>Refund Policy</h3>
                <div className={styles.text}>
                    <ul>
                        <span className={styles.bold}>Returns & 30-Day Money-Back Guarantee:</span>
                        <li>The item can be returned within <span className={styles.bold}>30 days </span>of the original receipt date for a <span className={styles.bold}>full refund. </span>The item must be in its original packaging, unused, and in new condition.</li>
                        <li>Keep in mind that OPTILITE PRO does not cover return shipping costs.</li>
                    </ul>
                    <ul>
                        <span className={styles.bold}>Lost Packages or Missing Items:</span>
                        <li>Some carriers may mark an item as "delivered" when it reaches a local facility, rather than the final delivery address. Please allow <span className={styles.bold}>72 hours </span>for the package to arrive at your address after receiving a delivery notification.</li>
                        <li>If you are unable to locate your order after 72 hours, check your residence and with neighbors, then contact us via <span className={styles.bold}>support@optilitepro.com </span><span className={styles.bold}>30 days </span>of the order date to file a claim.</li>
                        <li>OPTILITE PRO is not responsible for lost or stolen packages that show confirmed delivery to the provided shipping address. Upon inquiry, we will confirm the shipment details for you to investigate further with the carrier.</li>
                    </ul>
                    <ul>
                        <span className={styles.bold}>Damaged Items:</span>
                        <li>Claims for damaged items must be reported within <span className={styles.bold}>5 days </span>of receiving your order. Please provide <span className={styles.bold}>photo evidence </span>of the damaged packaging, damaged and undamaged items, and a clear photo of the packing slip.</li>
                        <li>Send all photos and details to <span className={styles.bold}>support@optilite.pro</span>Upon review, we will send replacement items at no charge if the claim is approved.</li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}