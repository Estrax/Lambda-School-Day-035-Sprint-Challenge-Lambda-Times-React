import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardDiv = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const CardHeadline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const CardAuthor = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`;

const CardImgContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`;

const CardImg = styled.img`
  width: 40px;
`;

const CardAuthorSpan = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Card = props => {
  return (
    <CardDiv>
      <CardHeadline>{props.card.headline}</CardHeadline>
      <CardAuthor>
        <CardImgContainer>
          <CardImg src={props.card.img} alt={props.card.author} />
        </CardImgContainer>
        <CardAuthorSpan>By {props.card.author}</CardAuthorSpan>
      </CardAuthor>
    </CardDiv>
  );
};

Card.propTypes = {
  Card: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
};

export default Card;
