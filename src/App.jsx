import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EditorPage, HomePage } from './pages';
import { Settings, ToastContainer } from './components';

import './App.css';
import { useState } from 'react';

function App() {
  const positionSidebar = localStorage.getItem('sidebarPosition');

  const [isSidebarLeft, setisSidebarLeft] = useState(
    JSON.parse(positionSidebar) === true
  );
  console.log({ positionSidebar, isSidebarLeft });

  const selectedTheme = localStorage.getItem('editorTheme');
  const [currentTheme, setCurrentTheme] = useState(
    selectedTheme || 'paraiso-dark'
  );

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
