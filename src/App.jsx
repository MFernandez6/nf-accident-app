import './App.css';
import {BrowserRouter as Router, Route, Redirect, Routes} from "react-router-dom";

// components
import { Header } from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login'
import { Banner } from './components/Banner/Banner';

function App() {

  return (
    <div>
      <Router>
      <Header/>
      <Banner/>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/signup' Component={Signup}/>
          <Route exact path='/login' Component={Login}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
