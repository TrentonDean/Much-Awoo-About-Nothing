import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ComposePost from './components/ComposePost';


function App() {
  return (
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
    </div>
  );
}

export default App;
