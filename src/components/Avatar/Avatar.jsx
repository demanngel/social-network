import style from "./Avatar.module.css";

function Avatar({link}) {
    return (
        <div className={style.ava}>
            {link ? <img src={link} alt=""/> : <div></div>}
        </div>
    );
}

export default Avatar;