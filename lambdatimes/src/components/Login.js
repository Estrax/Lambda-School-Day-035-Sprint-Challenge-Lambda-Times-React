import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #333;
`;

const Input = styled.input`
  padding: 0.5rem 2rem;
  margin: 0.25rem 0;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  font-size: 1rem;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  color: white;
  margin: 0.25rem 0;
  padding: 0.5rem;
  background-color: black;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
`;

const LoginContainer = styled.div`
  margin-top: 1rem;
  width: 26rem;
  text-align: center;
`;

const Login = () => {
  const [user, setUser] = useState({username: '', password: ''})
  console.log(user);
  return (
    <LoginContainer>
      <Container onSubmit={loginUser}>
        <Title>Sign in to see the articles</Title>
        <Input
          type="username"
          value={user.username}
          placeholder="Username"
          onChange={(e)=>setUser({...user, username: e.target.value})}
          required
        />
        <Input
          type="password"
          value={user.password}
          placeholder="Password"
          onChange={(e)=>setUser({...user, password: e.target.value})}
          required
        />
        <Button type="submit">
          Log In
        </Button>
      </Container>
    </LoginContainer>
  );

  function loginUser(event){
		event.preventDefault();
		localStorage.setItem('username', user.username);
		window.location.href = "/"
	}
}

export default Login;