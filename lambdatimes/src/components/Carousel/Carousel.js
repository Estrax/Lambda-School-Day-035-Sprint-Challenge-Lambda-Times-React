import React, { Component } from 'react';
import { carouselData } from '../../data';

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      currentImg: -1
    }
  }
  
  componentDidMount(){
    this.setState({
      ...this.state,
      data: carouselData,
      currentImg: 0
    });
  }

  leftClick = () => {

    this.setState({
      ...this.state,
      currentImg: (this.state.currentImg-1)%this.state.data.length >= 0 ? (this.state.currentImg-1)%this.state.data.length : (this.state.currentImg-1)%this.state.data.length+this.state.data.length
    });
  }

  rightClick = () => {
    this.setState({
      ...this.state,
      currentImg: (this.state.currentImg+1)%this.state.data.length
    });
  }

  selectedImage = () => {
    return <img src={this.state.data[this.state.currentImg]} alt={'a'} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
