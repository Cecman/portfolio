import style from "../styles/components/layout.module.scss"
import Header from './Header'
export default function Layout({children}){
    return (
        <div className={style.container}>
        <Header />
        <main>{children}</main>
        </div>
    )
}