import React, { useState } from 'react';
import { FcSettings } from 'react-icons/fc';
import CustomModal from '../Modal/Modal';
import SettingModalContent from './SettingModalContent';

const Settings = ({
  isSidebarLeft,
  setisSidebarLeft,
  currentTheme,
  setCurrentTheme,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className='setting__icon'
        style={{
          right: `${isSidebarLeft ? '20px' : '260px'}`,
        }}
        onClick={handleClickOpen}
      >
        <FcSettings />
      </div>

      <CustomModal open={open} handleClose={handleClose}>
        <SettingModalContent
          isSidebarLeft={isSidebarLeft}
          setisSidebarLeft={setisSidebarLeft}
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        />
      </CustomModal>
    </>
  );
};

export default Settings;
