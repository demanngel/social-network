import dialogs from "./Dialogs.module.css"
import {Link} from "react-router-dom";
function Dialogs() {
    return (
        <div className={dialogs.container}>
            {/*<p>Dialogs</p>*/}
            <div className={dialogs.dialogs}>
                <Link to="/dialogs/1">
                    <div className={dialogs.dialogs}>Аня</div>
                </Link>
                <Link to="/dialogs/2">
                    <div className={dialogs.dialogs}>Аня</div>
                </Link>
                <Link to="/dialogs/3">
                    <div className={dialogs.dialogs}>Аня</div>
                </Link>
                <Link to="/dialogs/4">
                    <div className={dialogs.dialogs}>Аня</div>
                </Link>
                <Link to="/dialogs/5">
                    <div className={dialogs.dialogs}>Аня</div>
                </Link>
            </div>
            <div className={dialogs.messages}>
                <div className={dialogs.message}>Hi</div>
                <div className={dialogs.message}>Hi</div>
                <div className={dialogs.message}>Hi</div>
            </div>
        </div>
    );
}

export default Dialogs;