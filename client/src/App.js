import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useNavigate } from 'react';
import NavBar from './components/NavBar';
import LogReg from './components/LogReg';
import LeftPanel from './components/LeftPanel';
import ComposePost from './components/ComposePost';
import RightPanel from './components/RightPanel';



function App() {
  const [currentUser, setCurrentUser] =useState(null)

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
        <Routes>
          <Route path="/login_registration" element={<LogReg currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          <Route path="/compose" element={<ComposePost currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
          <Route path="/test/LeftPanel" element={<LeftPanel />} />
          <Route path="/test/RightPanel" element={<RightPanel />} />
          {/* Do we need an individual post page? */}
          {/* <Route path="/post/:id" element={<OnePost currentUser={currentUser} setCurrentUser={setCurrentUser} />}/> */}
          {/* <Route path="/" element={<HomePage currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          <Route path="/profile/:id" element={<ProfilePage currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
          <Route path="/post/edit/:id" element={<EditPost currentUser={currentUser} setCurrentUser={setCurrentUser} />}/> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
