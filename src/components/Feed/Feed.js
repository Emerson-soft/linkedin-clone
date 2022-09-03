import React, { useEffect, useState } from 'react'
import './Feed.css'
import firebase from 'firebase/compat/app'

import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'

import InputOptions from '../InputOptions/InputOptions'
import Post from '../Post/Post'
import { db } from '../../service/firebase'

function Feed() {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data()
        }
      )))
    ))
  }, [])

  const sendPost = e => {
    e.preventDefault();

    db.collection('posts').add({
      name: 'Emerson Mendonça',
      description: 'this is a test',
      message: input,
      photoUrl: 'https://avatars.githubusercontent.com/u/42453905?v=4',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input value={input} onChange={ e => setInput(e.target.value)} type="text" />
            <button  onClick={sendPost} type="submit" >Send</button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOptions Icon={ImageIcon} title='Photo' color='#70b5f9' />
          <InputOptions Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
          <InputOptions Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
          <InputOptions Icon={CalendarViewDayIcon} title='Write Article' color='#7FC15E' />
        </div>
      </div>
      {posts.map(({ id, data }) => (
        <Post
          key={id}
          name={data.name} 
          description={data.description}
          message={data.message}
          photoUrl={data.photoUrl}
        />
      ))}
    </div>
  )
}

export default Feed