import React, { useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import SignUp from "./SignUp";
import TopNavbar from "../Nav/TopNavbar";

export default function LoginSignUp() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleToggle = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <>
    <TopNavbar />
    <Wrapper id="login">
      <LightBg>
        <Container>
          <HeaderInfo style={{ paddingTop: "30px" }}>
            <h1>Login/ Sign Up</h1>
            <p>
              Unlock the full potential of our platform. <br />
              Sign up or log in now to access personalized financial insights
              and expert guidance tailored just for you.
            </p>
          </HeaderInfo>
          <Row style={{ paddingBottom: "30px" }}>
            <Column>
              {showSignUp ? <SignUp /> : <Login />}
              <ToggleButton onClick={handleToggle}>
                {showSignUp
                  ? "Already have an account? Log In"
                  : "Don't have an account? Sign Up"}
              </ToggleButton>
            </Column>
          </Row>
        </Container>
      </LightBg>
    </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const LightBg = styled.div`
  background-color: #f5f5f5;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;
const HeaderInfo = styled.div`
  // margin-bottom: 50px;
  margin-top: 40px;
  h1 {
    font-size: 40px;
    font-weight: 700;
    color: black;
    // margin-bottom: 20px;
  }
  p {
    font-size: 13px;
    color: black;
    line-height: 1.5;
    margin-bottom: 0;
  }
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Column = styled.div`
  // flex: 1;
  max-width: 100%;
`;
const ToggleButton = styled.button`
  border: none;
  background-color: transparent;
  color: #7620ff;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 0px;
  &:hover {
    text-decoration: underline;
  }
`;