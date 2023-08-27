import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Categories from '../data/Categories';
import { useStateContext } from '../context/Context';
import { useState } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const {name, setName, category, setCategory, difficulty, setDifficulty} = useStateContext();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    //handle submit
    const handleSubmit = () => {
        if(!name || !category || !difficulty) {
            setError(true);
            return;
        }
        else {
            setError(false);
            return navigate(`/quiz/${category}/${difficulty}`);
        } 
    }

  return (
    <div className="content">
        <div className="settings">
            <span style={{fontSize: 30}}>Quiz Settings</span>

            <div className="inputBoxes">
                {error && <ErrorMessage>Please fill all the fields!</ErrorMessage>}

                <TextField style={{ marginBottom: 25 }} label="Enter Your Name" variant='outlined'
                onChange={(e)=>setName(e.target.value)} value={name}/>

                <TextField select style={{ marginBottom: 25 }} label="Select Category" variant='outlined' 
                onChange={(e)=>setCategory(e.target.value)} value={category}>
                    {
                        Categories.map((cat)=>(
                            <MenuItem key={cat.category} value={cat.value}>{cat.category}</MenuItem>
                        ))
                    }
                </TextField>

                <TextField select style={{ marginBottom: 25 }} label="Select Difficulty" variant='outlined'
                onChange={(e)=>setDifficulty(e.target.value)} value={difficulty}>
                    <MenuItem key="Easy" value="easy">Easy</MenuItem>
                    <MenuItem key="Medium" value="medium">Medium</MenuItem>
                    <MenuItem key="Hard" value="hard">Hard</MenuItem>
                </TextField>

                <Button type='button' variant='contained' size='large' onClick={handleSubmit}>Start Quiz</Button>
            </div>
        </div>

        <img src="./quiz.svg" alt="quiz image" className="banner"/>
    </div>
  )
}

export default Home