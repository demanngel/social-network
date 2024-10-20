import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state);
    }
}