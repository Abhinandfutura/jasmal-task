import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import data from "../Components/data.json";
import WarningPopup from "../Components/WarningPopup";
import { TextareaAutosize } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  let totalTime = 200;
  const [time, setTime] = useState(totalTime);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (correctQuestionIndex === 0) {
      setOpen(true);
    }
  };

  const navigate = useNavigate();
  const [correctQuestionIndex, setCorrectQuestionIndex] = useState(0);
  // const [markedAnswers, setMarkedAnswers] = useState(new Array(data.length));

  const total = data.length;
  const [checkItem, setCheckItem] = useState();
  const isQuestionEnd = correctQuestionIndex === data.length;
  const [allAnswer, setAllAnswer] = useState(0);
  let [checkedIndex, setCheckedIndex] = useState("");
  let [wrongAnswer, setWrongAnswers] = useState(0);
  let [skipped, setSkipped] = useState(0);

  console.log("skipped", skipped);
  const PassResult = (time) => {
    navigate("/score", {
      state: {
        marks: allAnswer,
        total: total,
        wrongAnswer: wrongAnswer,
        skipped: skipped,
        time: time,
        totalTime: totalTime,
      },
    });
  };

  const changeQuestion = (CrtIndex) => {
    if (checkedIndex) {
      if (CrtIndex == checkedIndex) {
        setAllAnswer(allAnswer + 1);
      } else {
        setWrongAnswers(wrongAnswer + 1);
      }
    } else if (CrtIndex && checkedIndex === "") {
      setSkipped(skipped + 1);
    }
    setCorrectQuestionIndex(correctQuestionIndex + 1);
    setCheckedIndex("");
  };

  const checkHandle = (name, index) => {
    setCheckItem(name);

    setCheckedIndex(index);
  };
  if (isQuestionEnd) {
    PassResult(time);
  }

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          PassResult(time);
          return 0;
        } else return time - 1;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <Container>
      <TimeTxt>
        {`${Math.floor(time / 60)}`.padStart(2, 0)}:
        {`${time % 60}`.padStart(2, 0)}
      </TimeTxt>
      <Container2>
        <Left>
          <QuestionNum>
            Question {correctQuestionIndex + 1} of {data.length}
          </QuestionNum>

          <Question>
            {data[correctQuestionIndex].title
              ? data[correctQuestionIndex].title
              : ""}
          </Question>
          <div>
            {data[correctQuestionIndex].options.map((i, index) => (
              <div key={i}>
                <Checkbox
                  id={index}
                  name={i}
                  onChange={() => checkHandle(i, index)}
                  checked={checkItem === i}
                />
                <Label for={index}>{i}</Label>
              </div>
            ))}
          </div>
          <ButtonContainer>
            <StyledButon variant="outlined" onClick={handleOpen}>
              {correctQuestionIndex === 0 ? "Exit" : "Back"}
            </StyledButon>

            <StyledButon
              variant="contained"
              onClick={() =>
                changeQuestion(data[correctQuestionIndex].correctOptiionIndex)
              }
            >
              {correctQuestionIndex === data.length - 1 ? "Submit" : "Next"}
            </StyledButon>
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

      <WarningPopup
        open={open}
        setOpen={setOpen}
        marks={allAnswer}
        total={total}
        wrongAnswer={wrongAnswer}
        skipped={skipped}
        time={time}
        totalTime={totalTime}
      />
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
  margin-bottom: 30px;
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

  word-break: break-all;
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 784px) {
    font-size: 17px;
  }
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

  @media (max-width: 974px) {
    grid-template-columns: 1fr;
    row-gap: 30px;
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
