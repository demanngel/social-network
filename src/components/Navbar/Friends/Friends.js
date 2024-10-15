import style from "./Friends.module.css";
import Friend from "./Friend/Friend";
function Friends({state}) {
    let friendsElem = state.map(friend => (
        <Friend name={friend.name}/>
    ));

    return(
        <div>
            {friendsElem}
        </div>
    );
}

export default Friends;