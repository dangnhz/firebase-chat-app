import React, { useState, useEffect } from 'react';

import Login from './components/Login';
import MessageForm from './components/MessageForm';
import Message from './components/Message';
import FlipMove from 'react-flip-move';
import './App.css';

import db from './firebase';
import colors from './colors';

function randomColors(colors) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}

function App() {
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  const [avatarColor, setAvatarColor] = useState('#6666FF');

  // set avatar background for user
  useEffect(() => {
    setAvatarColor(randomColors(colors));
  }, []);

  // fetch messages from database
  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(data);
      });
  }, []);

  //scroll to bottom every time new message received
  useEffect(() => {
    const msgBox = document.getElementById('messages-box');
    if (msgBox) {
      msgBox.scrollTop = msgBox.scrollHeight;
    }
  }, [messages]);

  return (
    <div className='app'>
      {!username && <Login setUsername={setUsername} />}
      {username && (
        <div className='app__main my-2'>
          <div className='app__main-header d-flex justify-content-between align-items-center'>
            <h3>
              <span className='mr-1' role='img' aria-label='rocket'>
                🚀
              </span>
              Chat
            </h3>
            <div>
              Welcome <span className='font-weight-bold'>{username}</span>
            </div>
          </div>

          <div className='app__main-messages' id='messages-box'>
            <FlipMove>
              {messages.map((message) => (
                <Message key={message.id} message={message} username={username}></Message>
              ))}
            </FlipMove>
          </div>
          <MessageForm username={username} avatarColor={avatarColor} />
        </div>
      )}
    </div>
  );
}

export default App;
