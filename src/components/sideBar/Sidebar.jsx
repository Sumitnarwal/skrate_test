


import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import "./sidebar.css"
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='homelogo'>
                <span><AiFillHome /></span>
                <span>Home</span>
            </div>
            <div className='homelogo'>
                <span><MdDashboard /></span>
                <span>Shuffle</span>
            </div>
        </div>
    )
}

export default Sidebar
