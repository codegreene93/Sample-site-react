import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import files
import About from '../RoutePages/About';
import Home from '../RoutePages/Home';
import Contact from '../RoutePages/Contact';
import Services from '../RoutePages/Services';




export default function Routes() {
    return (
        <Router>
          <div>
            <nav>
                <h1>Consultancy Site</h1>
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
              <Route path="/services">
                  <Services />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }



