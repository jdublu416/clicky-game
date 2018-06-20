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
                        <h2>{props.gameMessage}</h2>
                    </li>
                    <li className="list-item">
                            <h2>Current Score : {props.currentScore}<br/>
                             Top Score: {props.topScore}
                            </h2>
                    </li>
                </ul>
            </div>
        </nav>
</div>
  );
  
  export default NavBar;
  