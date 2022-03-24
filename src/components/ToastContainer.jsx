import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToastContainer = () => {
  return (
    <Toaster
      position='top-right'
      toastOptions={{
        success: {
          theme: {
            primary: '#0c0e0c',
          },
        },
      }}
    />
  );
};

export default ToastContainer;
