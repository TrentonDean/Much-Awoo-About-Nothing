import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useNavigate } from 'react';
import NavBar from './components/NavBar';



function App() {
  const [currentUser, setCurrentUser] =useState(null)

  return (
    <div>
      <BrowserRouter>
        <Routes>

        </Routes>
        <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
      </BrowserRouter>

    </div>
  );
}

export default App;
