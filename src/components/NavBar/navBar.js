import React from 'react';
import "./NavBar.css";

const NavBar = props => (
    <div >
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
            <div>
                <ul className="navbar-nav">
                    <li className="list-item">
                        <h1>Clicky Game</h1>
                    </li>
                    <li className="list-item">
                        <h2>Click any image to begin!</h2>
                    </li>
                    <li className="list-item">
                            <h2>Current Score : 0<br/>
                            High Score:    0
                            </h2>
                    </li>
                </ul>
            </div>
        </nav>
</div>
  );
  
  export default NavBar;
  