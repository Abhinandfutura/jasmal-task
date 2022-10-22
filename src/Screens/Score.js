import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components/macro";
import ProgressCircle from "../Components/ProgressCircle";
function Score() {
  return (
    <Container>
      <Container2>
        <Score1>
          <Left>
            <div>
              <span>Score :</span>
              <span style={{ fontWeight: "bold" }}> 350</span>
              <span>/400 </span>
            </div>
            <div>
              <span>Score :</span>
              <span style={{ fontWeight: "bold" }}> 04:20</span>
            </div>
            <div>
              <Percentage>80%</Percentage>
              <Total>Total Score</Total>
            </div>
          </Left>
          <Right>
            <ProgressContainer>
              <div>
                <ProgressCircle />
              </div>
              <ProTXt>Final Score</ProTXt>
            </ProgressContainer>
            <ProgressContainer>
              <div>
                <ProgressCircle />
              </div>
              <ProTXt>Correct</ProTXt>
            </ProgressContainer>
            <ProgressContainer>
              <div>
                <ProgressCircle />
              </div>
              <ProTXt>Wrong</ProTXt>
            </ProgressContainer>
            <ProgressContainer>
              <div>
                <ProgressCircle />
              </div>
              <ProTXt>Skipped</ProTXt>
            </ProgressContainer>
          </Right>
        </Score1>

        <Footer1>
          <Note>Your scribble notes:</Note>
          <p style={{ wordBreak: "break-all", marginTop: "10px" }}>
            Loremmmmmmmmmmjhbhjkjkjbjj,nksfnkanfklafnkasnn
            ,kjnkjsfnkjanfkjsanfksfkjnkjnkjdsnkkkkkkkkkkkkkkkkkkkkkkkkkkkkk;;;;lkhkj
            lknafkjcasfkjaskjcbskj alkscnsaklcnkjasckjb .,mncvskjsancvkjsb
            jhjhhjhjvvvkjhjkhjkhkjsjhc
          </p>
        </Footer1>
        <StyledButon variant="outlined">Exit</StyledButon>
      </Container2>
    </Container>
  );
}

export default Score;
const StyledButon = styled(Button)`
  && {
    margin: 30px auto;
    padding-right: 50px;
    display: flex;

    padding-left: 50px;
  }
`;
const Note = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #333333;
`;

const Footer1 = styled.div`
  border: 1px solid #cac8c8;
  padding: 20px 20px 10px 20px;
  margin-top: 30px;
`;

const ProTXt = styled.span`
  color: #555555;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;

const ProgressContainer = styled.div`
  display: flex;

  flex-direction: column;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%; ;
`;
const Total = styled.h5`
  font-weight: 700;
  font-size: 16px;
  color: #2b7df7;
`;
const Percentage = styled.h3`
  font-weight: 700;
  font-size: 34px;
  color: #2b7df7;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Score1 = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e5e5;
  width: 100%;
`;
const Container2 = styled.div`
  width: 910px;
  padding: 20px;
  background-color: white;
`;
