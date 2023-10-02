import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import Main from './view/main/main'
import Commingsoon from './view/commingsoon/Commingsoon'
import SignIn from "./view/signin_signup/Signin";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <Main/>}>
            < Route path="Commingsoon" element={<Commingsoon />} />
            < Route path="SignIn" element={<SignIn />} />
          </Route>
      </Routes>
    </BrowserRouter>
       
    </>
  );
}

export default App;
