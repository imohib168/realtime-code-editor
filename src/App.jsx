import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EditorPage, HomePage } from './pages';
import { Settings, ToastContainer } from './components';

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [isSidebarLeft, setisSidebarLeft] = useState(false);

  const selectedTheme = localStorage.getItem('editorTheme');

  const [currentTheme, setCurrentTheme] = useState(
    selectedTheme || 'paraiso-dark'
  );

  // useEffect(() => {
  //   const selectedThemeA = localStorage.getItem('editorTheme');
  //   setCurrentTheme(selectedThemeA);
  // }, [selectedTheme]);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/editor/:roomId'
            element={<EditorPage isSidebarLeft={isSidebarLeft} />}
          />
        </Routes>
      </BrowserRouter>

      <Settings
        isSidebarLeft={isSidebarLeft}
        setisSidebarLeft={setisSidebarLeft}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
    </>
  );
}

export default App;
