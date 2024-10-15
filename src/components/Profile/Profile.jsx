function Profile() {
    return (
        <div className="content block">
            <div className="profile-header"></div>
            <div className="profile-info">
                <div className="profile-logo">
                    <img src="https://s13.stc.yc.kpcdn.net/share/i/instagram/B44solahwlo/wr-1280.webp"/>
                </div>
                <div className="profile-description">
                    Description
                </div>
            </div>
            <div className="profile-content">
                <div className="new-post">
                    New post
                </div>
                <div className="posts">
                    <div className="post">
                        Post 1
                    </div>
                    <div className="post">
                        Post 2
                    </div>
                    <div className="post">
                        Post 3
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;