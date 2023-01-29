import './App.css';
<<<<<<< HEAD
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ComposePost from './components/ComposePost';
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useNavigate } from 'react';
import NavBar from './components/NavBar';

>>>>>>> ea95bd02955b7b96e93bb40cfef29ad2c01ead16


function App() {
  const [currentUser, setCurrentUser] =useState(null)

  return (
<<<<<<< HEAD
    <div className="App">
      <BrowserRouter>
      {/* Maybe insert a nav bar here -Aimee */}
      </BrowserRouter>
      <Routes>
        <Route path="/muchawoonothing/logReg" />
        <Route path="/muchawoonothing" />
        <Route path="/muchawoonothing/compose" element={<ComposePost/>}/>
        <Route path="/muchawoonothing/:id" />
        <Route path="/muchawoonothing/profile" />
        <Route path="/muchawoonothing/edit/:id" />
      </Routes>
=======
    <div>
      <BrowserRouter>
        <Routes>

        </Routes>
        <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
      </BrowserRouter>

>>>>>>> ea95bd02955b7b96e93bb40cfef29ad2c01ead16
    </div>
  );
}

export default App;
