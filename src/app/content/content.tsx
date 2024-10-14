import styles from './content.module.css';
import Hero from './hero/hero';
import HeroDown from './hero/heroDown';
import InfoFirst from './infoFirst/infoFirst';

export default function Content(){
    return(
        <main className={styles.container}>
            <Hero></Hero>
            <HeroDown></HeroDown>
            <InfoFirst></InfoFirst>
        </main>
    )
}