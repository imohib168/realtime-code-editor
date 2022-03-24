import React from 'react';

const Avatar = ({ userName }) => {
  const getName = (username) => {
    return username
      .split(' ')
      .map((word) => word[0])
      .join('');
  };

  return <div className='avatar__cpn'>{getName(userName)}</div>;
};

export default Avatar;
