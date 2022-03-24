import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import Logo from './../assets/logo.png';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  const createNewRoom = (e) => {
    e.preventDefault();
    const roomId = uuidV4();
    setRoomId(roomId);
    toast.success('Created a new room.');
  };

  const joinRoom = (e) => {
    e.preventDefault();

    if (!roomId || !username) {
      toast.error('Room Id & username is required');
      return;
    }

    navigate(`/editor/${roomId}`, { state: { username } });
  };

  return (
    <div className='homepage__wrapper'>
      <div className='homepage__wrapper-logoContainer'>
        <img src={Logo} alt='logo' />
      </div>

      <div className='homepage__wrapper-formContainer'>
        <h4>Paste Invitation ROOM ID</h4>

        <form onSubmit={joinRoom} className='homepage__wrapper-form'>
          <input
            type='text'
            placeholder='Room Id'
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type='submit' className='btn homepage__wrapper-form-btn'>
            Join
          </button>
        </form>
      </div>

      <span className='homepage__wrapper-inviteText'>
        Haven't invited yet? Create{' '}
        <a onClick={createNewRoom} href='/'>
          new room
        </a>
      </span>
    </div>
  );
};

export default HomePage;
