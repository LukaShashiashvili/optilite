import Image from 'next/image';
import styles from './payments.module.css';

export default function PaymentMethods(){
    return(
        <div className={styles.container}>
            <Image src={'/icons/payments/amex.svg'} alt={'American Express'} width={50} height={50}></Image>
            <Image src={'/icons/payments/dinersclub.svg'} alt={'DinersClub'} width={50} height={50}></Image>
            <Image src={'/icons/payments/discover.svg'} alt={'Discover'} width={50} height={50}></Image>
            <Image src={'/icons/payments/mastercard.svg'} alt={'Master Card'} width={50} height={50}></Image>
            <Image src={'/icons/payments/visa.svg'} alt={'Visa'} width={50} height={50}></Image>
        </div>
    )
}