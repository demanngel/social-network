import style from "./Message.module.css"
function Message({messageText}) {
    return (
        <div className={style.message}>{messageText}</div>
    );
}

export default Message;