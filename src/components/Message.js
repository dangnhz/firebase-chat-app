import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const avatarColors = [
  '#FF6633',
  '#FFB399',
  '#B366CC',
  '#B33300',
  '#CC80CC',
  '#66664D',
  '#991AFF',
  '#E666FF',
  '#4DB3FF',
  '#1AB399',
  '#E666B3',
  '#33991A',
  '#CC9999',
  '#00E680',
  '#4D80CC',
  '#9900B3',
  '#E64D66',
  '#FF4D4D',
  '#6666FF',
];

function randomColors(avatarColors) {
  const color = avatarColors[Math.floor(Math.random() * avatarColors.length)];
  return color;
}

const Message = forwardRef(({ message, username }, ref) => {
  return (
    <div ref={ref} className={`app__message ${username === message.username ? 'app__message-current-user' : ''}`}>
      <div className='app__message-wrapper d-flex align-items-center'>
        <div className='app__message-avatar mr-2' style={{ backgroundColor: randomColors(avatarColors) }}>
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
