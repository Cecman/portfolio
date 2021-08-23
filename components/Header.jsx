import style from "../styles/components/header.module.scss";

export default function Header(){
    return <header>
        <nav className={style.nav_bar}>
            <ul className={style.nav_menu}>
                <li>Home</li>
                <li>About</li>
                <li>My work</li>
            </ul>
        </nav>
    </header>
}