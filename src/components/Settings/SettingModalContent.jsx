import React, { useState } from 'react';
import { Stack, Switch } from '@mui/material';
import { styled } from '@mui/material/styles';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const SettingModalContent = ({
  isSidebarLeft,
  setisSidebarLeft,
  currentTheme,
  setCurrentTheme,
}) => {
  const handleThemeChange = (e) => {
    setCurrentTheme(e.target.value);

    localStorage.setItem('editorTheme', e.target.value);

    window.location.reload(false);
  };

  const handleSidebarPosition = () => {
    setisSidebarLeft((prevState) => {
      setisSidebarLeft(!prevState);

      localStorage.setItem('sidebarPosition', !prevState);

      window.location.reload(false);
    });
  };

  return (
    <>
      <div className='sidebar__option'>
        <p className='sidebar__position-label'>Sidebar Position</p>
        <Stack
          sx={{
            '& .MuiSwitch-thumb': {
              color: '#43758a !important',
            },
            '& .MuiSwitch-track': {
              backgroundColor: '#05263b !important',
            },
            '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
              backgroundColor: '#0e4364 !important',
            },
          }}
          direction='row'
          spacing={1}
          alignItems='center'
        >
          <p className='radio__option-text'>Left</p>
          <AntSwitch
            checked={!isSidebarLeft ? true : false}
            onChange={handleSidebarPosition}
          />
          <p className='radio__option-text'>Right</p>
        </Stack>
      </div>

      <div className='theme__select-options'>
        <select value={currentTheme} onChange={handleThemeChange}>
          <option selected value='paraiso-dark'>
            Paraiso Dark
          </option>
          <option value='blackboard'>Blackboard</option>
          <option value='yonce'>Yonce</option>
        </select>
      </div>
    </>
  );
};

export default SettingModalContent;
