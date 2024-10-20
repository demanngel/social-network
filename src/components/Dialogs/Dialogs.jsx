import style from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {sendMessageCreator, updateMessageCreator} from "../../redux/dialogsReducer";

function Dialogs(props) {
    let dialogsElem = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let messagesElem = props.state.messages.map(message => <Message messageText={message.text}/>);

    let sendMessage = () => {
        props.dispatch(sendMessageCreator());
    }

    let changeMessage = (e) => {
        let text = e.target.value;
        props.dispatch(updateMessageCreator(text));
    }

    return (
        <div className={style.dialogs + " block"}>
            <div className={style.dialogsElem}>
                {dialogsElem}
            </div>
            <div className={style.messages}>
                {messagesElem}

                <div className={style.newMessage}>
                    <textarea onChange={changeMessage} value={props.state.messageText}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;