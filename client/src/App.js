import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useNavigate } from 'react';
import NavBar from './components/NavBar';
import LogRegPage from './components/logRegPage';
import CreateDog from './components/CreateDog';

// >>>>>>> ea95bd02955b7b96e93bb40cfef29ad2c01ead16

function App() {
  const [currentUser, setCurrentUser] =useState(null)

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
          <Routes>
            <Route path="/login_registration" element={<LogRegPage currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
            <Route path="/addDog" element={<CreateDog/>} />
          </Routes>
      </BrowserRouter>

{/* >>>>>>> ea95bd02955b7b96e93bb40cfef29ad2c01ead16 */}
    </div>
  );
}

export default App;
