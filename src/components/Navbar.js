import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white text-4xl font-semibold">
            <Link to="/">
              Quiz.
            </Link>
          </div>
        </div>
        <div>
          <Link to="/about" className="text-white ml-4 hover:underline">
            About
          </Link>
          <Link to="/service" className="text-white ml-4 hover:underline">
            Service
          </Link>
          <Link to="/contact" className="text-white ml-4 hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
