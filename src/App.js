import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import files
import Routes from './RoutePages/Routes';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes />
      </div>
    </Router>
  );
}

export default App;
