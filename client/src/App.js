import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useNavigate } from 'react';
import NavBar from './components/NavBar';
import LogReg from './components/LogReg';



function App() {
  const [currentUser, setCurrentUser] =useState(null)

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<HomePage currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          <Route path="/compose" element={<ComposePost currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
          <Route path="/login_registration" element={<LogReg currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          {/* Do we need an individual post page? */}
          {/* <Route path="/post/:id" element={<OnePost currentUser={currentUser} setCurrentUser={setCurrentUser} />}/> */}
          <Route path="/profile/:id" element={<ProfilePage currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
          <Route path="/post/edit/:id" element={<EditPost currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
