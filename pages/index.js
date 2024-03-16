import Head from "next/document";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout, { siteTitle } from "./components/Layout";
import utilStyles from "/styles/utils.module.css";
import {getPostsData} from "@/lib/post";

import Link from "next/link";

//SSGの場合 
export async function getStaticProps(){
 const allPostsData = getPostsData(); //id,title,date,thumbnail
 console.log(allPostsData);

 return {
  props: {
    allPostsData,
  }
 }
}

//SSRの場合
// export async function getServerSideProps(context){

//   return {
//     props: {
//       //コンポーネントに渡すためのprops
//     }
//   }
// }



export default function Home({allPostsData}) {
  return( 
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>
        関西学院大学三田キャンパスで情報工学を専攻しています。
      </p>
    </section>


    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2>📝エンジニアのブログ</h2>
      <div className={styles.grid}>
        {allPostsData.map(({id,title,date,thumbnail}) => (
               <article key = {id}>
               <Link href={`/posts/${id}`}>
               <img src ={`${thumbnail}`} className={styles.thumbnailImage} 
               />
               </Link>
               <Link href={`/posts/${id}`} className={utilStyles.boldText}>{title}</Link>
               <br />
               <small className={utilStyles.lightText}>{date}</small>
             </article>
        )
        )}
    </div>
    </section>
  </Layout>);
}
