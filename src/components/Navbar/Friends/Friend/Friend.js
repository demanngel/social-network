import style from "./Friend.module.css";
import Avatar from "./../../../Avatar/Avatar";
function Friend({name}) {
    return(
        <div>
            <Avatar />
            <p>{name}</p>
        </div>
    );
}

export default Friend;