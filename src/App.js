import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="bg-cover bg-no-repeat bg-center bg-fixed h-screen" style={{ backgroundImage: `url("./images/background-5035258_1280.jpg")` }}>
        <header className="App-header">
          <Navbar />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/service"><Service /></Route>
            <Route path="/contact"><Contact /></Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
