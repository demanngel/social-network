import style from "./Friends.module.css";
import Avatar from "../../Avatar/Avatar";
function Friends({state}) {
    let friendsElem = state.map(friend => (
        <div>
            <Avatar />
            <p>{friend.name}</p>
        </div>
    ));

    return(
        <div>
            {friendsElem}
        </div>
    );
}

export default Friends;