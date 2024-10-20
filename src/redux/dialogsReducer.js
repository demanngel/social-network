const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

let dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                text: state.messageText,
            };
            state.messages.push(newMessage);
            state.messageText = '';
            return state;
        }
        case UPDATE_MESSAGE_TEXT: {
            state.messageText = action.text;
            return state;
        }
        default: {
            return state;
        }
    }
}

export const sendMessageCreator = () => ({type: ADD_MESSAGE});

export const updateMessageCreator = (text) =>
    ({type: UPDATE_MESSAGE_TEXT, text: text})

export default dialogsReducer;