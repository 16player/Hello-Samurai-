import React from 'react';
import './App.css';
import Profile from "./components/Profile";
import Header from './components/Header';
import Navbar from "./components/Navbar";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Profile/>
            <Navbar/>
        </div>)
}

export default App;
