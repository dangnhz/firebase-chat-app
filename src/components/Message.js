import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const avatarColors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
  '#80B300',
  '#809900',
  '#E6B3B3',
  '#6680B3',
  '#66991A',
  '#FF99E6',
  '#CCFF1A',
  '#FF1A66',
  '#E6331A',
  '#33FFCC',
  '#66994D',
  '#B366CC',
  '#4D8000',
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
  '#B3B31A',
  '#00E680',
  '#4D8066',
  '#809980',
  '#E6FF80',
  '#1AFF33',
  '#999933',
  '#FF3380',
  '#CCCC00',
  '#66E64D',
  '#4D80CC',
  '#9900B3',
  '#E64D66',
  '#4DB380',
  '#FF4D4D',
  '#99E6E6',
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
          {message.username.split('')[0].toUpperCase()}
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
