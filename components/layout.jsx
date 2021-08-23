import Head from "next/head";
import Link from "next/link";
import style from "../styles/components/layout.module.scss"
import Header from './Header'
export default function Layout({children}){
    return (
        <div className={style.container}>
            <Head>
                <link rel="preload" href="/fonts/montserat/Montserrat-Regular.ttf" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/montserat/Montserrat-Bold.ttf" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/roboto_slab/RobotoSlab-VariableFont_wght.ttf" as="font" crossOrigin="" />
            </Head>
            <Header />
            <main>{children}</main>
        </div>
    )
}