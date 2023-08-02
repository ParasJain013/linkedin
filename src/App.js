import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser)
  return (

    <div className="app">
                            
    {!user?
      (<Login/>):
      
      (<div className="appBody">        {/* Main body of App */}
      <Header/>                           {/* Header Containing various ICONS and Search Bar */}
           
        <Sidebar/>                     {/* SideBar containing Views and Recents and profile overview*/}

        <Feed/>
      </div>)
  }
  </div>
  );
}

export default App;
