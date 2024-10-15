import style from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
function Profile(props) {
    return (
        <div className={style.profile  + " block"}>
            <ProfileInfo />
            <MyPosts state={props.state} addPost={props.addPost} changePostText={props.changePostText}/>
        </div>
    );
}

export default Profile;