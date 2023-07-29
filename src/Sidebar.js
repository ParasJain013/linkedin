import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    const recents = (topic) => (
        <div className="sidebar_recentItems">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
            {/* {console.log(topic)} */}
        </div>
    )
    return (
        <div className='Sidebar'>
            <div className="sidebar_top">
                <img src="https://source.unsplash.com/6xgz_-1ZJHs" alt="" srcSet="" />
                <Avatar className='sidebar_avatar' src='https://source.unsplash.com/Se4gEkdajZs' />
                <h2>Paras Jain</h2>
                <h4>paras@gmail.com</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed You</p>
                    <p className="sidebar_statNumber">349583</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views On Post</p>
                    <p className="sidebar_statNumber">349583</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recents</p>
                
                {recents('Reactjs')}
                {recents('Programming')}
                {recents('DSA')}
                {recents('Software')}
                
            </div>
        </div>
    )
}

export default Sidebar