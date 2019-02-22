import React, { Component } from 'react';
import { carouselData } from '../../data';
import styled from 'styled-components';

const CarouselDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;
`;

const CarouselButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  cursor: pointer;
  transform: translate(0, -50%);
  
  left: ${props => props.left ? '25px' : 'initial'};
  right: ${props => props.right ? '25px' : 'initial'};

  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

const CarouselImg = styled.img`
  width: 100%;
  display: none;
`;

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
    return <CarouselImg src={this.state.data[this.state.currentImg]} alt={'a'} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <CarouselDiv>
        <CarouselButton left onClick={this.leftClick}>{"<"}</CarouselButton>
        {this.selectedImage()}
        <CarouselButton right onClick={this.rightClick}>{">"}</CarouselButton>
      </CarouselDiv>
    )
  }
}
