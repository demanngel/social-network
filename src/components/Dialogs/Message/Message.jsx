import dialogs from "./Dialog.module.css"
import {Link} from "react-router-dom";
function Dialog({name, id}) {
    return (
        <Link to={"dialogs/" + id}>
            <div className={dialogs.dialogs}>{name}</div>
        </Link>
    );
}

export default Dialog;