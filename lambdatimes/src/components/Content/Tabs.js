import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import styled from 'styled-components';

const TabsDiv = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
`;

const Topics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const TopicsTitle = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => {
  return (
    <TabsDiv>
      <Topics>
        <TopicsTitle>TRENDING TOPICS:</TopicsTitle>
        {props.tabs.map(tab => <Tab key={tab} tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} />)}
      </Topics>
    </TabsDiv>
  );
};

Tabs.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};

export default Tabs;
