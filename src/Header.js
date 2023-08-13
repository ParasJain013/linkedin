import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Height, LinkedIn } from '@mui/icons-material';
import './Header.css'
import HeaderOption from './HeaderOption';
import {Home,People,BusinessCenter,Message,Notifications} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import userSlice, { logout, selectUser } from './features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
export default function Header() {
  const dispatch=useDispatch();
  const func_logout = ()=>{
    dispatch(logout());
    signOut(auth);
  }
  const user = useSelector(selectUser);
  return (
    <div className='header'>
      <div className="header_left">
         <LinkedIn fontSize='large' color='primary'/>
        <div className="header_search">
            <SearchIcon />
            <input type="text" name=" " id=""/>
        </div>
      </div>
      <div className="header_right">
         <HeaderOption Icon={Home} title='Home'/>
         <HeaderOption Icon={People} title='My Network'/>
         <HeaderOption Icon={BusinessCenter} title='Jobs'/>
         <HeaderOption Icon={Message} title='Messaging'/>
         <HeaderOption Icon={Notifications} title='Notifications'/>
         <HeaderOption avatar={user.displayName[0]} title='Me' onClick={func_logout}/>
      </div>
    </div>
  )
}
