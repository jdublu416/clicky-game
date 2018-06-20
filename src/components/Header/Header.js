import React from "react";
import "./Header.css";

const Header = props => (
  <header id="header" className="header">
    <h1>Clicky Game!</h1>
    <h2>
      Click on an image to earn one point! <br/>
      Click on any more than once, GAME OVER!
    </h2>
  </header>
);

export default Header;

