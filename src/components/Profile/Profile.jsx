import style from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
function Profile({state}) {
    return (
        <div className={style.profile  + " block"}>
            <ProfileInfo />
            <MyPosts state={state}/>
        </div>
    );
}

export default Profile;