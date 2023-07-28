import './App.css';
import {BrowserRouter as Router, Route, Redirect, Routes} from "react-router-dom";

// components
import { Header } from './components/Header';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login'

function App() {

  return (
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/signup' Component={Signup}/>
          <Route exact path='/login' Component={Login}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
