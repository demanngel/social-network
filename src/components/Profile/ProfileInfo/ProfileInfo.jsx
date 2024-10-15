import style from "./ProfileInfo.module.css";
function ProfileInfo() {
    return(
        <div>
            <div className={style.header}></div>
            <div className={style.info}>
                <div className={style.ava}>
                    <img src="https://s13.stc.yc.kpcdn.net/share/i/instagram/B44solahwlo/wr-1280.webp"/>
                </div>
                <div className={style.description}>
                    Description
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;