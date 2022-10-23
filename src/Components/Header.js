import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={require("../Components/images/Logo.jpg")} />
      </LogoContainer>
      <SubjectTxt>EXAM CATEGORY: LSS MODEL QUESTIONS</SubjectTxt>
      <RightContainer>
        <LogoContainer>
          <Logo src={require("../Components/images/bell.png")} />
        </LogoContainer>
        <LogoContainer>
          <Logo src={require("../Components/images/drop.png")} />
        </LogoContainer>
      </RightContainer>
    </Container>
  );
}

export default Header;

const RightContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const SubjectTxt = styled.h4`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: #333333;
  @media (max-width: 864px) {
    font-size: 18px;
  }
  @media (max-width: 680px) {
    font-size: 14px;
  }
  @media (max-width: 484px) {
    font-size: 12px;
  }
`;
const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const LogoContainer = styled.div`
  cursor: pointer;
`;
const Container = styled.div`
  width: 100%;
  z-index: 2;
  background-color: white;
  padding-left: 30px;
  padding-right: 30px;
  height: 80px;
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-between;
`;
