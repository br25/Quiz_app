// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz'; // Import the Quiz component
import logo from './images/quiz_icon.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo w-48" alt="logo" />
        <p className="text-red-500">Your Quiz App Content Goes Here</p>
        <Quiz /> {/* Include the Quiz component here */}
      </header>
    </div>
  );
}

export default App;
