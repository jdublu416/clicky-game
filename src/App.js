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
    count: 0,
    topScore: 0,
    gameMessage: "Click any image to begin!"
  };

  handleClickOfImages = id => {
    const images = this.state.images.map(image => {
      // console.log(id);
      // console.log(image.id);
      // console.log(image.clicked);
      if (id === image.id) {
        //gameover
        if (image.clicked === "true") {
          image.shake = "true";
          image.clicked = "false";
          this.setState({
            gameMessage: "Game Over!",
            topScore:
              this.state.topScore > this.state.count
                ? this.state.topScore
                : this.state.count
          });
          this.handleGameOver(image);
        }
        //gamePlay continues
        else {
          image.clicked = "true";
          let newCount = this.state.count + 1;
          this.setState({ count: newCount });
          let newGameMessage = "You have guessed correctly, Choose again";
          this.setState({ gameMessage: newGameMessage });
          
        }
        
        
      }
      return image;
    });
    
    ;
    this.setState({ images:this.shuffle(images) });
  };

  handleGameOver = image => {
    for (var i = 0; i < images.length; i++) {
      image.clicked = "false";
      image.shake = "false";
      let newTopScore;
      if (this.state.count > this.state.topScore) {
        newTopScore = this.state.count;
      }
      this.setState({
        images,
        count: 0,
        topScore: newTopScore,
        gameMessage: "Click on any image only once"
      });
    }
  };

  // shuffleArray = array => {
  //   for (var i = array.length - 1; i > 0; i--) {
  //     var j = Math.floor(Math.random() * (i + 1));
  //     var temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  // }
  shuffle = images => {
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    return images;
  };

  render() {
    return (
      <div className="wrapper">
        <NavBar
          currentScore={this.state.count}
          topScore={this.state.topScore}
          gameMessage={this.state.gameMessage}
        />
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
