import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import Main from './view/main/main'
import Commingsoon from './view/commingsoon/Commingsoon'
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <Main/>}></Route>
          <Route path="/Commingsoon" element={<Commingsoon />} />
      </Routes>
    </BrowserRouter>
       
    </>
  );
}

export default App;
