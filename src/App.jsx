import s from './App.module.css'
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (<BrowserRouter>
        <div className={s.app_wrapper}>
            <Header />
            <Navigation />
            <div className={s.content}>
                <Routes>
                    <Route element={<Profile state={props.appState.profilePage} />} path={'/profile'} />
                    <Route element={<Dialogs state={props.appState.dialogsPage} />} path={'/messages'} />
                    <Route element={<News />} path={'/news'} />
                    <Route element={<Music />} path={'/music'} />
                    <Route element={<Settings />} path={'/settings'} />
                </Routes>
            </div>
        </div>
    </BrowserRouter>
    );
}

export default App;
