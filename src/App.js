import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      {/* App body*/}
      <div className='app__body'>
        <Sidebar />
        {/* sidebar*/}
      </div>
        {/* Feed*/}
        {/* Widgets*/}

        

    </div>
  );
}

export default App;
