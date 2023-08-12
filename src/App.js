import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import News from './News';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            email:user.email,
            uid:user.uid,
            displayName:user.displayName
          })
        );
      } else {
        dispatch(logout());
      }
    });
  },[])
  
  return (

    <div className="app">
      {!user?
        (
        <Login />) :

        (<div className="appBody">
          <Header />                           {/* Header Containing various ICONS and Search Bar */}
          <div className="main_body">

            <Sidebar />                     {/* SideBar containing Views and Recents and profile overview*/}

            <Feed />

            <News/>
          </div>

        </div>)
      }
    </div>
  );
}

export default App;
