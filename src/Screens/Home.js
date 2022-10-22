import React, { useState } from "react";
import styled from "styled-components/macro";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import WarningPopup from "../Components/WarningPopup";
import { TextareaAutosize } from "@mui/material";
function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <Container>
      <TimeTxt>02:20</TimeTxt>
      <Container2>
        <Left>
          <QuestionNum>Question 3 of 3</QuestionNum>

          <Question>
            Loremmmmmmmmmmjhbhjcgajsdkjdcskjckdsjhc
            kjdsbcvkdbkjbckjdskjbvkjdskjvdksjvdkjvjdbvjkdbkvbdjkvbdjkvbkjdbjdfbvjdfbvjkdfvjkdfbvkjdfbvkjbjkdbjkb
          </Question>
          <div>
            <div>
              <Checkbox id="answer1" />
              <Label for="answer1">Answer1</Label>
            </div>
            <div>
              <Checkbox id="answer2" />
              <Label for="answer2">Answer2</Label>
            </div>
            <div>
              <Checkbox id="answer3" />
              <Label for="answer3">Answer3</Label>
            </div>
            <div>
              <Checkbox id="answer4" />
              <Label for="answer4">Answer4</Label>
            </div>
          </div>
          <ButtonContainer>
            <StyledButon variant="outlined" onClick={handleOpen}>
              Exit
            </StyledButon>
            <StyledButon variant="contained">Next</StyledButon>
          </ButtonContainer>
        </Left>
        <Right>
          <RightHeader>Notepad</RightHeader>
          <Textarea
            aria-label="minimum height"
            placeholder="Scribble your not here..."
          />
        </Right>
      </Container2>

      <WarningPopup open={open} setOpen={setOpen} />
    </Container>
  );
}

export default Home;

const Textarea = styled(TextareaAutosize)`
  && {
    height: 100% !important;
    border: unset;
    outline: unset;
    padding: 10px;
  }
`;
const RightHeader = styled.span`
  border-bottom: 1px solid grey;
  width: 100%;
  font-size: 16px;
  color: #555555;
  padding: 15px;
`;

const Label = styled.label`
  cursor: pointer;
  user-select: none;
`;

const Right = styled.div`
  background-color: white;
  height: 430px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  gap: 10px;
`;
const StyledButon = styled(Button)`
  && {
    width: 50%;
  }
`;
const Question = styled.span`
  color: #333333;
  min-width: 29em;
  word-break: break-all;
  font-size: 20px; ;
`;

const QuestionNum = styled.span`
  color: #555555;
  font-weight: 400;
  font-size: 18px;
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 30px;
  flex-direction: column;
`;
const Container2 = styled.div`
  display: grid;
  width: 100%;
  padding: 16px 50px 0px 50px;
  height: 100%;
  column-gap: 100px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 864px) {
    grid-template-columns: 1fr;
  }
`;
const Container = styled.div`
  height: 100%;
  width: 100%; ;
`;

const TimeTxt = styled.span`
  font-size: 24px;

  display: flex;
  justify-content: center;

  margin-top: 15px;
`;
