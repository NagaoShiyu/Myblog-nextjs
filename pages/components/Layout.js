import Head from "next/head";
import Link from "next/link";
import styles from "./Layout.module.css";
import utilStyles from "/styles/utils.module.css";

const name= "Ameiba Blog"
export const siteTitle = "Next.js Started"

function Layout({children}) {
    return (
        <div className = {styles.container}>
            <Head>
                <Link rel="icon" href="/favicon.ico"/>
            </Head>
            <header className={styles.header}>
                <img src="/images/Aimeiba_logo2.jpg"className={utilStyles.borderCircle}/>
                <h1>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default Layout;