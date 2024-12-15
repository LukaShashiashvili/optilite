import styles from "./page.module.css";
import Header from "./header/header";
import Content from "./content/content";
import Footer from "./footer/footer";
import FacebookPixel from "./components/meta/FacebookPixel";

export default function Home() {
  return (
    <main className={styles.container}>
      <FacebookPixel></FacebookPixel>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </main>
  );
}
