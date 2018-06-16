import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import images from "./images.json";
import PictCard from "./components/PictCard";

class App extends Component {
  state = {
    images,
    count: 0
  };

  handleClickOfImages = id => {
    const images = this.state.images.indexOf(
      image => (this.image.id = { clicked: true })
    );
    this.setState({ images });
  };
  handleGamePlay = id => {
    if (this.clicked) {
      //end game
    }
    else{
      //Increase score
      this.setState({ count: this.state.count + 1 });
    }
   // checkForEndGame => {
      //conditional statement that checks the clicked status when user clicks an image and if it is true then shake 
      //changes to true, alert to user game is over.reset count to zero and check for high score.
    //}
  };

  //   handleGameOver = clicked => {
  //     const gameOver = this.state.images.filter(image => image.clicked===true);
  //   }
  render() {
    return (
      <div className="wrapper">
        <NavBar />
        <Header />
        <Main>
          {this.state.images.map(image => (
            <PictCard
              handleClickOfImages={this.handleClickOfImages}
              id={image.id}
              key={image.id}
              image={image.imageAddress}
              clicked={image.clicked}
            />
          ))}
        </Main>

        {/* <p className="testRender">
          This is rendering what I want
        </p> */}
        <Footer />
      </div>
    );
  }
}

export default App;
