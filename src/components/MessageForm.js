import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import firebase from 'firebase';
import db from '../firebase';

const MessageForm = ({ setMessages, username }) => {
  const [message, setMessage] = useState('');

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (message.length === 0) return;
    const newMessage = {
      username: username,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection('messages').add(newMessage);
    // setMessages((previousMessages) => [...previousMessages, newMessage]);
    setMessage('');
  };
  return (
    <div className='app__message-form'>
      <form onSubmit={handleOnSubmit}>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder='Text Message'
            aria-label='message'
            aria-describedby='basic-addon2'
            value={message}
            onChange={handleOnChange}
          />
          <InputGroup.Append>
            <Button variant='primary' type='submit'>
              Send
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
    </div>
  );
};

export default MessageForm;
