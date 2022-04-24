import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {

  const user=useSelector(selectUser)
  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'> #</span>
      <p>{topic}</p>
    </div>
  )



  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://media-exp1.licdn.com/dms/image/C4D16AQEBW2LYzJvSCg/profile-displaybackgroundimage-shrink_200_800/0/1647349309759?e=1652918400&v=beta&t=dll-aMe57t2sQY_DfkNAB0EV7DHdIMRH-TxRrTEZN6A'
          alt=''
        />
        <Avatar src={user.photoURL} className='sidebar__avatar' >{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,444</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>2,444</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('React')}
        {recentItem('Software engineering')}
        {recentItem('Python')}
        {recentItem('API')}
        {recentItem('Firebase')}
      </div>
    </div>
  );
}

export default Sidebar;
