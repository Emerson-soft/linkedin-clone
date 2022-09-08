import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Feed from './components/Feed/Feed';
import { useDispatch, useSelector,  } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login/Login';
import { auth } from './service/firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
     auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          profileUrl: userAuth.photoUrl,
        }))
      } else {
        dispatch(logout())
      }
     })
  }, [])

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className='app__body'>
           <Sidebar />
           <Feed />
           {/* Widgets*/}
          </div>
        </>       
      )}
      
    </div>
  );
}

export default App;
