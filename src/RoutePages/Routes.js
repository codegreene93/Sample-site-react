import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import files
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';




export default function Routes() {
    return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
              </ul>
            </nav>
    
            
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/services">
                  <Services />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }



