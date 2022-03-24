import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EditorPage, HomePage } from './pages';
import { ToastContainer } from './components';

import './App.css';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/editor/:roomId' element={<EditorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
