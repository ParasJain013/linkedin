import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
      {/* Header Containing various ICONS and Search Bar */}
      <Header/>
      {/* Main body of App */}
      <div className="appBody">
           {/* SideBar containing Views and Recents and profile overview*/}
        <Sidebar/>

        <Feed/>
      </div>
    </div>
  );
}

export default App;
