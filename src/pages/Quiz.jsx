
import { useStateContext } from "../context/Context";
import { useParams } from "react-router";
import { useQuestions } from "../utilities/Questions";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Questions from "../components/Questions";

const Quiz = () => {

  const {name, score, setScore} = useStateContext();
  const {category, difficulty} = useParams();
  const {questions} = useQuestions(category, difficulty);    //custom hook

  const [options, setOptions] = useState([]);
  const [currQue, setCurrQue] = useState(0);
  const [correctAns, setCorrectAns] = useState("");

  //options shuffle
  const handleShuffle = () => {
    const _options = [questions[currQue].correct_answer, ...questions[currQue].incorrect_answers];
    return _options.sort(()=>Math.random()-0.5);    //shuffle sorting
  }

  //score handle
  useEffect(()=>{
    setScore(0);
  }, [])

  //setting up options and correct answer 
  useEffect(()=>{
    if(questions.length > 0) {
      setOptions(handleShuffle);
      setCorrectAns(questions[currQue].correct_answer);
    }
  }, [questions, currQue])

  return (
    <div className="quiz">
      <h1 className="subtitle">WELCOME {name.toUpperCase()}</h1>
      {
        questions.length === 0 ?
        <CircularProgress style={{margin : 100}} color="inherit" size={150} thickness={1}/>   
        :
        <>
          <div className="quizInfo">
            <span>{questions[currQue].category}</span>
            <span>Score: {score}</span>
          </div> 
          <Questions questions={questions} options={options} correctAns={correctAns} currQue={currQue} setCurrQue={setCurrQue} score={score} setScore={setScore}/>
        </>
      }
    </div>
  )
}

export default Quiz