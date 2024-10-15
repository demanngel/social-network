import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
function Navbar({state}) {
    return (
        <nav className={style.navbar + " block"}>
            <div className={style.item }>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs">Dialogs</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music">Music</NavLink>
                <a href="#"></a>
            </div>
            <div className={style.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
            <Friends state={state.friends}/>
        </nav>
    );
}

export default Navbar;