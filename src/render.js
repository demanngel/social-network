import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {addPost, changePostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changePostText={changePostText}/>
        </ BrowserRouter>
    );
}