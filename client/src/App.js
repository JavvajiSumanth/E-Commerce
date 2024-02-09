import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import {BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route, Routes } from "react-router-dom";
import TrackOrder from './Components/TrackOrder';
import About from './Components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        {/* <Home/> */}
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/track-order">
            <TrackOrder/>
          </Route>
        </Switch>
      <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
