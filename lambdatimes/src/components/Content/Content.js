import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
import Carousel from '../Carousel/Carousel';
import { tabData, cardData } from '../../data';
import styled from 'styled-components';
import Authenticate from '../Authenticate';
import Login from '../Login';

const ContentContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
  width: 100vw;
`;

const HeadingWelcome = styled.h1`
  text-align: center;
`;

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      tabs: tabData,
      cards: cardData
    });
  }

  changeSelected = tab => {
    this.setState({
      ...this.state,
      selected: tab
    })
  };

  filterCards = () => {
    return this.state.selected === 'all' ? this.state.cards : this.state.cards.filter(card => this.state.selected === card.tab);
  };

  render() {
    return (
      <ContentContainer>
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected} />
        <HeadingWelcome>Hello, {localStorage.getItem('username')}</HeadingWelcome>
        <Carousel />
        <Cards cards={this.filterCards()} />
      </ContentContainer>
    );
  }
}


export default Authenticate(Content)(Login);