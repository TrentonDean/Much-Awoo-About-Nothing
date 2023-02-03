import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useNavigate } from 'react';
import NavBar from './components/NavBar';
import LogReg from './components/LogReg';
import HomePage from './components/HomePage';
import ComposePost from './components/ComposePost';
import OnePost from "./components/OnePost"
import ProfilePage from './components/ProfilePage';
import EditPost from "./components/EditPost"
import RightPanel from './components/RightPanel';
import LeftPanel from './components/LeftPanel';



function App() {
  const [currentUser, setCurrentUser] =useState(null)

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
        <Routes>
          <Route path="/login_registration" element={<LogReg currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          <Route path="/compose" element={<ComposePost currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
          <Route path="/" element={<HomePage currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          {/* <Route path="/post/test" element={<OnePost currentUser={currentUser} setCurrentUser={setCurrentUser} />}/> */}
          <Route path="/post/:id" element={<OnePost currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
          {/* <Route path="/profile/test" element={<ProfilePage currentUser={currentUser} setCurrentUser={setCurrentUser} />}/> */}
          <Route path="/profile/:id" element={<ProfilePage currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
          {/* <Route path="/post/edit/test" element={<EditPost currentUser={currentUser} setCurrentUser={setCurrentUser} />}/> */}
          <Route path="/post/edit/:id" element={<EditPost currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
          {/* these can be removed before we merge to main */}
          {/* <Route path="/test/LeftPanel" element={<LeftPanel />} />
          <Route path="/test/RightPanel" element={<RightPanel />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
