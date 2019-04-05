import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: ${props => props.active ? '#333' : '#fff'};
  background-color: ${props => props.active ? '#fff' : '#333'};
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  
  border: ${props => props.active ? '2px solid #333' : 'none'}

  &:hover {
    text-decoration: underline;
  }
`;

const Tab = props => {
  return (
    <TabDiv active={ props.tab===props.selectedTab } onClick={() => props.selectTabHandler(props.tab)}>
      {props.tab.toUpperCase()}
    </TabDiv>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};

export default Tab;
