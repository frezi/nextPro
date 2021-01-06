import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>跟着文档 coding</h1>

        <p className={styles.description}>go</p>
      </main>

      <footer className={styles.footer}>end</footer>
    </div>
  );
}
