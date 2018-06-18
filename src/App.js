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
    gamePlay,
    count: 0,
    topScore:0
  };
  

  handleClickOfImages = id => {
    const images = this.state.images.filter(image =>  image.id === id);
    this.setState({ images });
    // this.setState({topScore})
    this.handleGamePlay(this.id);
  };
 
  handleGamePlay = id => {
    if (!this.clicked) {
      this.clicked = true;
      this.setState({ count: this.state.count + 1 });
    } else {
      if (this.state.count > this.state.topScore) {
        this.topScore = this.setState({ topScore: this.state.count});
        this.setState({ count: 0 });
      } else {
        this.setState({ count: 0 });
      };
    // checkForEndGame => {
    //conditional statement that checks the clicked status when user clicks an image and if it is true then shake
    //changes to true, alert to user game is over.reset count to zero and check for high score.
    //}
  }
}
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
