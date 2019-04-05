import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styled from 'styled-components';

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
`;

const Cards = props => {
  return (
    <CardsContainer>
      {props.cards.map((card, i) => <Card key={i} card={card} />)}
    </CardsContainer>
  )
};

Cards.propTypes = {
  Cards: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
};

export default Cards;