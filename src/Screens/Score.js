import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components/macro";
import ProgressCircle from "../Components/ProgressCircle";
import { useLocation, useNavigate } from "react-router-dom";
import data from "../Components/data.json";

function Score() {
  let score;
  let total;
  let percent;
  let wrongInperce;
  let wrong;
  let skippedInperce;
  let skipped;
  let time;
  let totalTime;
  let correctMarkInPerce;

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  if (location.state) {
    score = location.state.marks;

    totalTime = location.state.totalTime;
    time = totalTime - location.state.time;
    total = location.state.total;

    correctMarkInPerce = (score / total) * 100;
    wrong = location.state.wrongAnswer;
    wrongInperce = (location.state.wrongAnswer / total) * 100;
    skipped = location.state.skipped;
    skippedInperce = (location.state.skipped / total) * 100;

    percent = (score / total) * 100;
  }

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Container2>
        <Score1>
          <Left>
            <div>
              <span>Score :</span>
              <span style={{ fontWeight: "bold" }}> {score}</span>
              <span>/{total} </span>
            </div>
            <div>
              <span>Time :</span>
              <span style={{ fontWeight: "bold" }}>
                {`${Math.floor(time / 60)}`.padStart(2, 0)}:
                {`${time % 60}`.padStart(2, 0)}
              </span>
            </div>
            <div>
              <Percentage>{Math.round(percent)}%</Percentage>
              <Total>Total Score</Total>
            </div>
          </Left>
          <Right>
            <ProgressContainer>
              <div>
                <ProgressCircle percent={percent} isVal={true} total={total} />
              </div>
              <ProTXt>Final Score</ProTXt>
            </ProgressContainer>
            <ProgressContainer>
              <div>
                <ProgressCircle
                  percent={correctMarkInPerce}
                  total={total}
                  score={score}
                />
              </div>
              <ProTXt>Correct</ProTXt>
            </ProgressContainer>
            <ProgressContainer>
              <div>
                <ProgressCircle
                  percent={wrongInperce}
                  total={total}
                  score={wrong}
                />
              </div>
              <ProTXt>Wrong</ProTXt>
            </ProgressContainer>
            <ProgressContainer>
              <div>
                <ProgressCircle
                  percent={skippedInperce}
                  total={total}
                  score={skipped}
                />
              </div>
              <ProTXt>Skipped</ProTXt>
            </ProgressContainer>
          </Right>
        </Score1>

        <Footer1>
          {/* <Note>Your scribble notes:</Note> */}
          {data.map((i, index) => (
            <>
              {index + 1} .<Note>{i.title}</Note>
              <p
                style={{
                  fontSize: "13px",
                  marginBottom: "10px",
                  marginTop: "5px",
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                ഉ : {i.options[i.correctOptiionIndex]}
              </p>
            </>
          ))}
        </Footer1>
        <StyledButon variant="outlined" onClick={redirectToHome}>
          Exit
        </StyledButon>
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
  font-size: 13px;
  font-weight: 600;
  color: #333333;
`;

const Footer1 = styled.div`
  border: 1px solid #cac8c8;
  padding: 20px 20px 10px 20px;
  margin-top: 30px;
  height: 313px;
  overflow-y: scroll;
  ::-webkit-scrollbar-thumb {
    background-color: blueviolet;
    border-radius: 50px;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 50px;
  }
`;

const ProTXt = styled.span`
  color: #555555;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  @media (max-width: 580px) {
    font-size: 14px;
  }
`;

const ProgressContainer = styled.div`
  display: flex;

  flex-direction: column;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  @media (max-width: 496px) {
    width: 100%;
    gap: 10px;
  }
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
  @media (max-width: 580px) {
    font-size: 27px;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Score1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media (max-width: 496px) {
    grid-template-columns: 1fr;
    row-gap: 30px;
    place-items: center;
  }
`;
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: center;
  background-color: #e5e5e5;
  width: 100%;
`;
const Container2 = styled.div`
  max-width: 910px;
  padding: 20px;
  background-color: white;
  border-radius: 4px;
`;
