import React from "react";
import styled from "styled-components";

import LoginBox from "./LoginBox";

const Auth = () => {
  return (
    <Container>
      <div className="header">
        <span>
          Welcome To Editor !!
        </span>
      </div>
      <div className="body">
        <LoginBox />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  max-width: 650px;
  height: 100%;
  margin: 0 auto;
  padding: 100px 50px;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100px;
    color: ${({ theme }) => theme.gray333};
    font-size: 30px;
  }

  .body {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.white};
    border-radius: 50px;
    width: 100%;
    height: 100%;
    padding: 50px 70px;

    .auth-form {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex: 1;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
  }
`;

export default React.memo(Auth);