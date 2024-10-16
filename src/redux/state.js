const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: "Пост 1", likes: 10},
                {id: 2, text: "Пост 2", likes: 15},
                {id: 3, text: "Пост 3", likes: 20},
            ],
            postText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Аня"},
                {id: 2, name: "Vika"},
                {id: 3, name: "Sasha"},
                {id: 4, name: "Victor"},
            ],
            messages: [
                {id: 1, text: "Hi"},
                {id: 2, text: "Hello"},
                {id: 3, text: "How are you?"},
                {id: 4, text: "I'm fine, and you?"},
            ],
            messageText: '',
        },
        navbar: {
            friends: [
                {id: 1, name: "Sasha"},
                {id: 2, name: "Kseniya"},
                {id: 3, name: "Valera"},
                {id: 4, name: "Vlad"},
            ],
        },
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let post = {
                id: 5,
                text: this._state.profilePage.postText,
                likes: 0
            }
            this._state.profilePage.posts.push(post);
            this._state.profilePage.postText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.postText = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                text: this._state.dialogsPage.messageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.messageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.dialogsPage.messageText = action.text;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updatePostTextActionCreator = (text) =>
    ({type: UPDATE_POST_TEXT, text: text});

export const sendMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateMessageActionCreator = (text) =>
    ({type: UPDATE_MESSAGE_TEXT, text: text})