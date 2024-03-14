import Head from "next/head";
import Link from "next/link";
import styles from "./Layout.module.css";

const name= "Ameiba Blog"
export const siteTitle = "Next.js Started"

function Layout({children}) {
    return (
        <div className = {styles.container}>
            <head>
                <Link rel="icon" href="/favicon.ico"/>
            </head>
            <header>
                <img src="/images/Aimeiba_logo.jpg"/>
                <h1>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default Layout;