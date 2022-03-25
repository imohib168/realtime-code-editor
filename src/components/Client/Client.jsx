import React from 'react';
import Avatar from '../Avatar';
import './client.css';

const Client = ({ username }) => {
  return (
    <div className='client__cpn'>
      <Avatar userName={username} />
      <p className='client__cpn-username'>{username}</p>
    </div>
  );
};

export default Client;
