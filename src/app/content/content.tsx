import styles from './content.module.css';
import Hero from './hero/hero';
import InfoFirst from './infoFirst/infoFirst';

export default function Content(){
    return(
        <main className={styles.container}>
            <Hero></Hero>
            <InfoFirst></InfoFirst>
        </main>
    )
}