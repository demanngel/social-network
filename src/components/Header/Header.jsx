import style from "./Header.module.css";
function Header() {
    return (
        <header className={style.header + " block"}>
            <div className={style.logo}>
                <img src="https://cdn1.iconfinder.com/data/icons/seo-and-web-development-6/32/development_globe_sphere-512.png"/>
            </div>
        </header>
    );
}
export default Header;