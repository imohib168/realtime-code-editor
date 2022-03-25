import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { ACTIONS } from '../ACTIONS';
import { initSocket } from '../socket';
import Logo from './../assets/logo.png';
import { Client, Editor } from './../components';

const EditorPage = () => {
  const socketRef = useRef();
  const location = useLocation();
  const reactNavigator = useNavigate();

  const [clientsList, setClientsList] = useState([]);

  const { roomId } = useParams();
  const username = location.state?.username;

  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();

      socketRef.current.on('connect_error', (err) => handleError(err));
      socketRef.current.on('connect_failed', (err) => handleError(err));

      const handleError = (err) => {
        console.log('Socket error', err);
        toast.error('Socket connection failed, try again later.');
        reactNavigator('/');
      };

      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username,
      });

      socketRef.current.on(
        ACTIONS.JOINED,
        ({ clients, username, socketId }) => {
          if (username !== location.state?.username) {
            toast.success(`${username} has joined the room`);
          }

          setClientsList(clients);
        }
      );

      socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
        toast.success(`${username} left the room`);
        setClientsList((prevState) =>
          prevState.filter((client) => client.socketId !== socketId)
        );
      });
    };

    init();
  }, [location.state?.username, reactNavigator, roomId, username]);

  if (!location.state.username) {
    <Navigate to='/' />;
  }

  return (
    <div className='editorpage__wrapper'>
      <div className='editorpage__code-editor'>
        <Editor />
      </div>
      <div className='editorpage__sidebar'>
        <div className='editorpage__sidebar-logo-container'>
          <img src={Logo} alt='logo' />
        </div>
        <h4 className='editorpage__sidebar-connected-text'>Connected</h4>
        <div className='editorpage__sidebar-clients'>
          {clientsList?.map(({ socketId, username }) => {
            return <Client key={socketId} username={username} />;
          })}
        </div>
        <div className='editorpage__btn-container'>
          <button className='btn editorpage__btn-roomid'>Copy Room ID</button>
          <button className='btn editorpage__btn-leave'>Leave</button>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
