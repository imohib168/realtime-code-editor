import React, { useState } from 'react';
import Logo from './../assets/logo.png';
import { Client, Editor } from './../components';

const EditorPage = () => {
  const [clientsList, setClientsList] = useState([
    { socketId: 1, userName: 'Mohib Ismail' },
    { socketId: 2, userName: 'John Doe' },
  ]);

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
          {clientsList?.map(({ socketId, userName }) => (
            <Client key={socketId} userName={userName} />
          ))}
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
