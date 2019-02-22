import React from 'react';
import styled from 'styled-components';

const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  z-index: 1000;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const ContainerSpan = styled.div`
  cursor: pointer;
  font-weight: ${props => props.left ? '700' : '100'}
  margin-right: ${props => props.left ? '25%' : props.center ? '5%' : '0' }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const TopBar = () => {
  return (
    <TopBarDiv>
      <Container>
        <ContainerLeft>
          <ContainerSpan left>TOPICS</ContainerSpan>
          <ContainerSpan left>SEARCH</ContainerSpan>
        </ContainerLeft>
        <ContainerCenter>
          <ContainerSpan center>GENERAL</ContainerSpan>
          <ContainerSpan center>BROWNBAG</ContainerSpan>
          <ContainerSpan center>RANDOM</ContainerSpan>
          <ContainerSpan center>MUSIC</ContainerSpan>
          <ContainerSpan center>ANNOUNCEMENTS</ContainerSpan>
        </ContainerCenter>
        <ContainerRight>
          {localStorage.getItem('loggedIn') ? <ContainerSpan right onClick={logOut()}>LOG OUT</ContainerSpan> : <ContainerSpan right>LOG IN</ContainerSpan>}
        </ContainerRight>
      </Container>
    </TopBarDiv>
  );

  function logOut(){
    localStorage.setItem('username', '');
  }
}

export default TopBar;