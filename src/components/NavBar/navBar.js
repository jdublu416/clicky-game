import React from 'react';
import './NavBar.css';

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="list-item">
              <h1>Clicky Game</h1>
          </li>
          <li className="list-item">
          <h2>Click any image to begin!</h2>
          </li>
          <li className="list-item">
          {/* keep track of score here */}
          </li>
        </ul>
      </div>
    </nav>
  );
  
  export default Navbar;
  