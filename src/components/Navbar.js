import React, { useState, useEffect } from 'react';
import quiz_icon from '../images/quiz_icon.png';

function Navbar() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Function to update the current time
    function updateCurrentTime() {
      const now = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const formattedTime = now.toLocaleTimeString(undefined, options);
      setCurrentTime(formattedTime);
    }

    // Update the current time initially
    updateCurrentTime();

    // Update the current time every second
    const intervalId = setInterval(updateCurrentTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={quiz_icon} alt="Quiz Icon" className="w-8 h-8 mr-2" />
          <div className="text-white text-2xl font-semibold">
            Quiz App
          </div>
        </div>
        <div className="text-white ml-4">{currentTime}</div>
      </div>
    </nav>
  );
}

export default Navbar;
