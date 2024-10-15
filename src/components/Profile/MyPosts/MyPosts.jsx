import profile from "./Profile.module.css"
function Profile() {
    return (
        <div className="content block">
            <div className={profile.header}></div>
            <div className={profile.info}>
                <div className={profile.ava}>
                    <img src="https://s13.stc.yc.kpcdn.net/share/i/instagram/B44solahwlo/wr-1280.webp"/>
                </div>
                <div className={profile.description}>
                    Description
                </div>
            </div>
            <div className={profile.content}>
                <div className={profile.newPost}>
                    New post
                </div>
                <div className={profile.posts}>
                    <div className={profile.post}>
                        Post 1
                    </div>
                    <div className={profile.post}>
                        Post 2
                    </div>
                    <div className={profile.post}>
                        Post 3
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;