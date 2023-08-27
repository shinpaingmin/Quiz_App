/* eslint-disable react/prop-types */
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Questions = ({ questions, options, correctAns, currQue, setCurrQue, score, setScore }) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  
  //check correct answer function
  const handleSelect = (option) => {
    if (selected === option && selected === correctAns) {
        return "select";
    } 
    else if (selected === option && selected !== correctAns) {
        return "wrong";
    }
    else if (option === correctAns) {
        return "select";
    }
  }

  //setScore and setSelected function
  const handleCheck = (option) => {
    setSelected(option);
    if (option === correctAns) {
        setScore(score + 1);
    }
    setError(false);
  }

  //handle next function
  const handleNext = () => {
    if (currQue > 8) {
        navigate('/result');
    }
    else if(selected) {
        setCurrQue(currQue + 1);
        setSelected("");
    }
    else if (!selected) {
        setError(true);
    }
  }

  return (
  <div className="question">
    <h1>Question {currQue + 1}</h1>
    <div className="singleQuestion">
        <h2>{questions[currQue].question}</h2>

        <div className="options">
            {error && <ErrorMessage>Please select an option first</ErrorMessage>}
            {options.length > 0 ? (
                options.map((option)=>(
                    <button key={option} onClick={()=>handleCheck(option)} className={`singleOption ${selected && handleSelect(option)}`} disabled={selected}>{option}</button>
                ))
            )
            :
            <div>Empty</div>
            }
        </div>

        <div className="controls">
            <Button variant="contained" color="error" size="large" style={{width: 185}} href="/">Quit</Button>
            <Button onClick={handleNext} variant="contained" size="large" style={{width:185}}>Next Question</Button>
        </div>
    </div>
  </div>
  );
};

export default Questions;
