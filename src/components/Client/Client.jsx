import React from 'react';
import Avatar from '../Avatar';
import './client.css';

const Client = ({ userName }) => {
  return (
    <div className='client__cpn'>
      <Avatar userName={userName} />
      <p className='client__cpn-username'>{userName}</p>
    </div>
  );
};

export default Client;
