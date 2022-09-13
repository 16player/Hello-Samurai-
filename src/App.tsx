import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Profile/>
            <Navbar/>
        </div>)
}

export default App;
