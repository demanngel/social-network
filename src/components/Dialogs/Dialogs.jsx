import style from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {createRef} from "react";

function Dialogs({state}) {
    let dialogsElem = state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let messagesElem = state.messages.map(message => <Message messageText={message.text}/>);

    let component = createRef();

    let sendMessage = () => {
        alert(component.current.value);
    }

    return (
        <div className={style.dialogs + " block"}>
            <div className={style.dialogsElem}>
                {dialogsElem}
            </div>
            <div className={style.messages}>
                {messagesElem}

                <div className={style.newMessage}>
                    <textarea ref={component}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;