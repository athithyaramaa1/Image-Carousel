import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  render() {
    let imagesIndex = this.state.index;
    let imageData = images[imagesIndex];
    let imageLink = imageData.img;

    const forwardClick = () => {
      if (this.state.index == 2) {
        return this.setState({ index: 0 });
      }
      this.setState({ index: this.state.index + 1 });
    };

    const backwardClick = () => {
      if (this.state.index == 0) {
        return this.setState({ index: 2 });
      }
      this.setState({ index: this.state.index - 1 });
    };

    return (
      <>
        <div className="container" >
          <ArrowBackIosIcon onClick={backwardClick} className="arrows"/>
          <img src={imageLink} alt="carousel_img" />

          <ArrowForwardIosIcon onClick={forwardClick} className="arrows"/>
        </div>
      </>
    );
  }
}

export default Carousel;
