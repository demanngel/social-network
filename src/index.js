import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {addMessage, addPost, changeMessageText, changePostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changePostText={changePostText} addMessage={addMessage} changeMessageText={changeMessageText} />
        </ BrowserRouter>
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);