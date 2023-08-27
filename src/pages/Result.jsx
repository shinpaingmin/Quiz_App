import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context/Context"
import { useEffect } from "react";
import { Button } from "@mui/material";

const Result = () => {
  const {name, score} = useStateContext();
  const navigate = useNavigate();

  useEffect(()=> {
    //authorization
    if(!name || !score) {
      navigate("/");
    }
  }, [])

  //handle score function
  const handleScore = () => {
    localStorage.clear();
  }

  return (
    <div className="result">
      <span className="resultTitleOne">Congratulation!</span>
      <h1 className="resultTitleTwo">{name.toUpperCase()}</h1>
      <span className="resultTitleThree">Your Final Score: {score}</span>
      <Button onClick={handleScore} variant="contained" color="error" size="large" style={{alignSelf:"center", marginTop: 20}} href="/">Go To Homepage</Button>
    </div>
  )
}

export default Result