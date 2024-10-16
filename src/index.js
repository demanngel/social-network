import {store} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} addPost={store.addPost.bind(store)} changePostText={store.changePostText.bind(store)} addMessage={store.addMessage.bind(store)} changeMessageText={store.changeMessageText.bind(store)} />
        </ BrowserRouter>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);