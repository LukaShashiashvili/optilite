import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header/header";
import Content from "./content/content";
import Footer from "./footer/footer";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </main>
  );
}
