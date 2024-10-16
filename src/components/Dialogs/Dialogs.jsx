import style from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {createRef} from "react";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/state";

function Dialogs(props) {
    let dialogsElem = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let messagesElem = props.state.messages.map(message => <Message messageText={message.text}/>);

    let component = createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let changeMessage = () => {
        let text = component.current.value;
        props.dispatch(updateMessageActionCreator(text));
    }

    return (
        <div className={style.dialogs + " block"}>
            <div className={style.dialogsElem}>
                {dialogsElem}
            </div>
            <div className={style.messages}>
                {messagesElem}

                <div className={style.newMessage}>
                    <textarea ref={component} onChange={changeMessage} value={props.state.messageText}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;