import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useNavigate } from 'react';
import NavBar from './components/NavBar';
import LogRegPage from './components/LogRegPage';



function App() {
  const [currentUser, setCurrentUser] =useState(null)

  return (
    <div>
      <BrowserRouter>
        <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
        <Routes>
        <Route path="/login_registration" element={<LogRegPage currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
