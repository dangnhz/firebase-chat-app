import React, { useState, useEffect, forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Message = forwardRef(({ message, username }, ref) => {
  return (
    <div ref={ref} className={`app__message ${username === message.username ? 'app__message-current-user' : ''}`}>
      <div className='app__message-wrapper d-flex align-items-center'>
        <div className='app__message-avatar mr-2' style={{ backgroundColor: message.avatar }}>
          {message.username.trim().split('')[0].toUpperCase()}
        </div>
        <div>
          <Card className='app__message-card p-2'>
            {username !== message.username && (
              <div className='app__message-card-username text-primary'>{message.username}</div>
            )}
            {message.message}
          </Card>
        </div>
      </div>
    </div>
  );
});

export default Message;
