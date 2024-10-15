import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

function App({state}) {
    return (
        <div className="App">
            <div className="header block-container">
                <Header/>
            </div>
            <div className="nav block-container">
                <Navbar state={state.navbar}/>
            </div>
            <div className="content block-container">
                <Routes>
                    <Route path="/profile" element={<Profile state={state.profilePage} />}/>
                    <Route path="/dialogs" element={<Dialogs state={state.dialogsPage} />}/>
                    <Route path="/*" element={<Profile state={state.profilePage} />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
