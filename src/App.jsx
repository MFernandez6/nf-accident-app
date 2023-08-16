import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import { Header } from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login'
import Welcome from './pages/Welcome';
import Attorney from './pages/Attorney';
import { Banner } from './components/Banner/Banner';

function App() {

  return (
    <div>
      <Router>
      <ToastContainer/>
        <Header/>
        <Banner/>
            <Routes>
                <Route exact path='/attorney-network' Component={Attorney}/>
                <Route exact path='/welcome' Component={Welcome}/>
                <Route exact path='/home' Component={Home}/>
                <Route exact path='/signup' Component={Signup}/>
                <Route exact path='/login' Component={Login}/>
            </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
