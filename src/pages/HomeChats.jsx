import React from 'react'
import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chat'
import './HomeChats.css';

const HomeChats = ()=>{
    return(
        <div className='home'>
            <div className="container">
            <Sidebar/>
            <Chat/>
            </div>
        </div>
    )
    
}

export default HomeChats