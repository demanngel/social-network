import style from "./Dialog.module.css"
import {Link} from "react-router-dom";
import Avatar from "../../Avatar/Avatar";
function Dialog({name, id}) {
    return (
        <div className={style.dialog}>
            <Avatar />
            <Link to={"dialogs/" + id}>
                <div className={style.dialogElem}>{name}</div>
            </Link>
        </div>
    );
}

export default Dialog;