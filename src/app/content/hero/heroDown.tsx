import styles from './heroDown.module.css';

export default function HeroDown(){
    return(
        <main className={styles.container}>
            <div className={styles.left}>
                <p>Bundles from $28 each</p>
                <div className={styles.box}>
                    <img className={styles.photo} src={'/customer.webp'}/>
                    <div className={styles.text}>
                        <p className={styles.comment}>"I’ve been using this light for a bit, and honestly, OPTILITE PRO is a game changer! No flickering at all, which is great because my eyes don’t get tired. The color accuracy is spot on, so everything looks clear and vibrant”.</p>
                        <p className={styles.customerName}>⭐⭐⭐⭐⭐ Natalia K. Our Customer</p>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <ul className={styles.iconsUp}>
                    <li><img src={'/noflashing.svg'} alt="" /> No Flashin Video</li>
                    <li><img src={'/90.png'} alt="" /> Ra90 High CRI</li>
                    <li><img src={'/temperature.svg'} alt="" /> Brightness Adjustment Warm and Cold Adjustment</li>
                    <li><img src={'/color-mode.svg'} alt="" /> 3 Light Color</li>
                </ul>
                <div className={styles.iconsDown}>
                    <span>Featured In</span>
                    <img className={styles.featuredIcon} src={'/usatoday.avif'} alt="Icon" />
                    <img className={styles.featuredIcon} src={'/fox.png'} alt="Icon" />
                    <img className={styles.featuredIcon} src={'/cbs.png'} alt="Icon" />
                    <img className={styles.featuredIcon} src={'/nbc.png'} alt="Icon" />
                </div>
            </div>
        </main>
    )
}