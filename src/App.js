import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <div className="app">
      <Header />

      {/* App body*/}
      <div className='app__body'>
        <Sidebar />
        <Feed />
      </div>
        {/* Widgets*/}

        

    </div>
  );
}

export default App;
