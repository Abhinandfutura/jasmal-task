import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styled from "styled-components/macro";

function SignIn() {
  return (
    <Container>
      <Container2>
        <Left>
          <Img src={require("../Components/images/sofa.png")} />
        </Left>
        <Right>
          <SignupContainer>
            <SignUpTxt>User Sign in</SignUpTxt>
            <InputContainer>
              <Label for="email">Your Email</Label>
              <Input type="text" id="email " placeholder="Enter your email" />
            </InputContainer>
            <InputContainer>
              <Label for="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </InputContainer>
            <InputContainer>
              <Label for="Cpassword">Exam Category</Label>
              <Select>
                <option value="">--Select your exam category--</option>
                <option>Physics</option>
              </Select>
            </InputContainer>

            <StyledButton variant="contained">SIGN IP</StyledButton>

            <BottomText1>
              Dont't have an Account? <LinkTo to="/signup">SignUp</LinkTo>
            </BottomText1>
          </SignupContainer>
        </Right>
      </Container2>
    </Container>
  );
}

export default SignIn;

const Select = styled.select`
  width: 100%;

  outline: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid grey;
  padding: 10px; ;;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  font-weight: bold;
`;
const BottomText1 = styled.span`
  font-weight: 400;
  font-size: 12.25px;
  width: 100%;
  text-align: center;

  color: rgba(130, 134, 154, 0.85);
`;
const StyledButton = styled(Button)`
  && {
    width: 100%;
    height: 48.12px;

    background: #2b7df7;
    border-radius: 8.75px;
  }
`;
const Input = styled.input`
  margin-top: 10px;

  border-top: none;
  border-right: none;
  width: 100%;
  border-left: none;
  border-bottom: 1px solid grey;
  outline: none;
  ::placeholder {
    font-weight: 500;
    font-size: 12.25px;
    color: rgba(130, 134, 154, 0.5);
  }
`;

const Label = styled.label`
  width: 51.21px;
  height: 11.38px;
  left: 0px;
  top: -0.38px;

  font-weight: 500;
  font-size: 10.5px;

  color: #82869a;
`;
const SignUpTxt = styled.h4`
  color: #282c40;
  width: 249px;
  height: 35px;

  font-weight: 700;
  font-size: 31.5px;
  line-height: 110%;
`;
const InputContainer = styled.div``;

const SignupContainer = styled.form`
  width: 432px;
  padding: 40px 40px 0px 40px;
  height: 416px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  box-shadow: 0px 6px 60px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
`;
const Right = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Left = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Container2 = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 864px) {
    grid-template-columns: 1fr;
  }
`;

const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
`;
