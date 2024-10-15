import {rerenderEntireTree} from "../render";

let state = {
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
    },
    navbar: {
      friends: [
          {id: 1, name: "Sasha"},
          {id: 2, name: "Kseniya"},
          {id: 3, name: "Valera"},
          {id: 4, name: "Vlad"},
      ],
    },
};

export let addPost = (text) => {

    let post = {
        id: 5,
        text: text,
        likes: 0
    }

    state.profilePage.posts.push(post);

    rerenderEntireTree(state);
}

export let changePostText = (text) => {
    state.profilePage.postText = text;

    rerenderEntireTree(state);
}

export default state;