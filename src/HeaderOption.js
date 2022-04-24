import React from "react";
import "./HeaderOption.css";
import {Avatar} from '@material-ui/core'
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ avatar ,pic, Icon, title,onClick }) {
  const user=useSelector(selectUser)
  return (
    <div onClick={onClick} className='headerOption'>
        {avatar && <Avatar className='headerOption__icon'

      src={avatar}>{user?.email[0]}</Avatar>}
      {Icon && <Icon className='headerOption__icon' />}


      <h3 className='headerOption__title'>{title}</h3>

    </div>
  );
}

export default HeaderOption;
