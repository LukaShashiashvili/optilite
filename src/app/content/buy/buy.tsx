import Product from '@/app/components/product/product';
import styles from './buy.module.css';
import Image from 'next/image';

export default function Buy(){
    return(
        <main id='Buy' className={styles.container}>
            <div className={styles.header}>
                <h2>DO NOT WASTE TIME!</h2>
                <h2>BUY NOW</h2>
            </div>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <Image src={'/product.png'} alt={''} width={200} height={150}></Image>
                    <h3>BUY 1 OPTILITE PRO</h3>
                    <div className={styles.price}>
                        <span>Standard Price</span>
                        <span>$49.99</span>
                    </div>
                    <div className={styles.ship}>
                        <span>FREE SHIPPING</span>
                        <span>IN THE USA</span> 
                    </div>
                    <span>Special online price!</span>
                    <div className={styles.buyButtons}>
                        <Product variantId={'49446916391210'} quantity={1} title={'BUY BLACK OPTILITE'}></Product>
                        <Product variantId={'49446916423978'} quantity={1} title={'BUY WHITE OPTILITE'}></Product>
                    </div>
                    <div className={styles.payments}>

                    </div>
                </div>
                <div className={styles.box}>
                    <Image className={styles.photo} src={'/product.png'} alt={''} width={200} height={150}></Image>
                    <h3>BUY 2 OPTILITE PRO</h3>
                    <div className={styles.price}>
                        <span>Best Price</span>
                        <span>$99.98</span>
                    </div>
                    <div className={styles.ship}>
                        <span>FREE SHIPPING</span>
                        <span>IN THE USA</span> 
                    </div>
                    <span>Special online price!</span>
                    <div className={styles.buyButtons}>
                        <Product variantId={'49446916391210'} quantity={2} title={'BUY BLACK OPTILITE'}></Product>
                        <Product variantId={'49446916423978'} quantity={2} title={'BUY WHITE OPTILITE'}></Product>
                    </div>
                    <div className={styles.payments}>

                    </div>
                </div>
                <div className={styles.box}>
                    <Image src={'/product.png'} alt={''} width={200} height={150}></Image>
                    <h3>BUY 3 OPTILITE PRO</h3>
                    <div className={styles.price}>
                        <span>Popular Price</span>
                        <span>$149.97</span>
                    </div>
                    <div className={styles.ship}>
                        <span>FREE SHIPPING</span>
                        <span>IN THE USA</span> 
                    </div>
                    <span>Special online price!</span>
                    <div className={styles.buyButtons}>
                        <Product variantId={'49446916391210'} quantity={3} title={'BUY BLACK OPTILITE'}></Product>
                        <Product variantId={'49446916423978'} quantity={3} title={'BUY WHITE OPTILITE'}></Product>
                    </div>
                    <div className={styles.payments}>

                    </div>
                </div>
            </div>
        </main>
    )
}