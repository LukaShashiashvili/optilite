'use client'
import styles from './buy.module.css';
import Image from 'next/image';
import PaymentMethods from '@/app/components/payments/payments';
import Modal from '@/app/components/modal/modal';

export default function Buy(){
    return(
        <main id='Buy' className={styles.container}>
            <div className={styles.header}>
                <h2>DO NOT WASTE TIME!</h2>
                <h2>BUY NOW</h2>
            </div>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <Image className={styles.product} src={'/product.png'} alt={'Product'} width={200} height={150}></Image>
                    <h4 className={styles.type1}>MOST CHOICE</h4>
                    <h3>BUY 1 OPTILITE PRO</h3>
                    <div className={styles.price}>
                        <div className={styles.discount1}>
                            <span>Sale</span>
                            <span>$39.99</span>
                        </div>
                        <div className={styles.standardprice}>
                            <span>Standard Price</span>
                            <span>$80</span>
                        </div>
                    </div>
                    <div className={styles.ship}>
                        <span>+ FREE SHIPPING</span>
                        <span>IN THE UNITED STATES</span> 
                    </div>
                    <div className={styles.special}>
                        <span className={styles.sale1}>SAVE 50%</span>
                        <span className={styles.specialprice}>Winter sale!</span>
                    </div>
                    <div className={styles.remaining}>
                        <Image className={styles.clock} src={'/icons/clock.svg'} alt={'Clock'} width={15} height={15}></Image>
                        <span>Sale will end soon!</span>    
                    </div>
                    <div className={styles.buyButtons}>
                        <Modal quantity={1} static={true}></Modal>
                    </div>
                    <PaymentMethods></PaymentMethods>
                </div>
                <div className={styles.box}>
                    <Image className={styles.product} src={'/product2.png'} alt={'Product'} width={200} height={150}></Image>
                    <h4 className={styles.type2}>MOST POPULAR</h4>
                    <h3>BUY 2 OPTILITE PRO</h3>
                    <div className={styles.price}>
                        <div className={styles.discount2}>
                            <span>Sale</span>
                            <span>$79.98</span>
                        </div>
                        <div className={styles.standardprice}>
                            <span>Standard Price</span>
                            <span>$140</span>
                        </div>
                    </div>
                    <div className={styles.ship}>
                        <span>+ FREE SHIPPING</span>
                        <span>IN THE UNITED STATES</span> 
                    </div>
                    <div className={styles.special}>
                        <span className={styles.sale1}>SAVE 50%</span>
                        <span className={styles.specialprice}>Winter sale!</span>
                    </div>
                    <div className={styles.remaining}>
                        <Image className={styles.clock} src={'/icons/clock.svg'} alt={'Clock'} width={15} height={15}></Image>
                        <span>Sale will end soon!</span>
                    </div>
                    <div className={styles.buyButtons}>
                        <Modal quantity={2} static={true}></Modal>
                    </div>
                    <PaymentMethods></PaymentMethods>
                </div>
                <div className={styles.box}>
                    <Image className={styles.product} src={'/product3.png'} alt={'Product'} width={200} height={150}></Image>
                    <h4 className={styles.type3}>BEST BUNDLE</h4>
                    <h3>BUY 3+ OPTILITE PRO</h3>
                    <div className={styles.price}>
                        <div className={styles.discount3}>
                            <span>Sale</span>
                            <span>$119.97</span>
                        </div>
                        <div className={styles.standardprice}>
                            <span>Standard Price</span>
                            <span>$240</span>
                        </div>
                    </div>
                    <div className={styles.ship}>
                        <span>+ FREE SHIPPING</span>
                        <span>IN THE UNITED STATES</span>
                    </div>
                    <div className={styles.special}>
                        <span className={styles.sale1}>SAVE 50%</span>
                        <span className={styles.specialprice}>Winter sale!</span>
                    </div>
                    <div className={styles.remaining}>
                        <Image className={styles.clock} src={'/icons/clock.svg'} alt={'Clock'} width={15} height={15}></Image>
                        <span>Sale will end soon!</span>
                    </div>
                    <div className={styles.buyButtons}>
                    <Modal static={false}></Modal>
                    </div>
                    <PaymentMethods></PaymentMethods>
                </div>
            </div>
            
        </main>
    )
}