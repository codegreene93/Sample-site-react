
import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
// import files
import Routes from './Components/Routes';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
