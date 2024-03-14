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
    <div>
      <article>
        <Link href="/">
        <img src="/images/thumbnail101.jpg" alt=""/>
        </Link>
      </article>
    </div>

  </Layout>);
}
