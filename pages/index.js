import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "./components/Layout";
import utilStyles from "/styles/utils.module.css";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return( 
  <Layout>
    <section className={utilStyles.headingMd}>
      <p>
        関西学院大学三田キャンパスで情報工学を専攻しています。
      </p>
    </section>


    <section>
      <h2>📝エンジニアのブログ</h2>
      <div className={styles.grid}>
      <article>
        <Link href="/">
        <img 
        src="/images/thumbnail01.jpg"
        className={styles.thumbnailImage} 
        />
        </Link>
        <Link href="/" className={utilStyles.boldText}>
       SSGとSSRの使い分けの場面はいつなのか?
        </Link>
        <br />
        <small className={utilStyles.lightText}>
          Febuary23,2023
        </small>
      </article>
      <article>
        <Link href="/">
        <img 
        src="/images/thumbnail01.jpg"
        className={styles.thumbnailImage} 
        />
        </Link>
        <Link href="/" className={utilStyles.boldText}>
       SSGとSSRの使い分けの場面はいつなのか?
        </Link>
        <br />
        <small className={utilStyles.lightText}>
          Febuary23,2023
        </small>
      </article>
      <article>
        <Link href="/">
        <img 
        src="/images/thumbnail01.jpg"
        className={styles.thumbnailImage} 
        />
        </Link>
        <Link href="/" className={utilStyles.boldText}>
       SSGとSSRの使い分けの場面はいつなのか?
        </Link>
        <br />
        <small className={utilStyles.lightText}>
          Febuary23,2023
        </small>
      </article>
      <article>
        <Link href="/">
        <img 
        src="/images/thumbnail01.jpg"
        className={styles.thumbnailImage} 
        />
        </Link>
        <Link href="/" className={utilStyles.boldText}>
       SSGとSSRの使い分けの場面はいつなのか?
        </Link>
        <br />
        <small className={utilStyles.lightText}>
          Febuary23,2023
        </small>
      </article>
    </div>
    </section>
  </Layout>);
}
