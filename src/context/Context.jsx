/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    name: null,
    setName: () => {},
    category: null,
    setCategory: () => {},
    difficulty: null,
    setDifficulty: () => {},
    questions: null,
    setQuestions: () => {},
    score: 0,
    setScore: () => {},
});

export const ContextProvider = ({ children }) => {
    const [name, _setName] = useState(localStorage.getItem("username"));
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [questions, setQuestions] = useState([]);
    const [score, _setScore] = useState(localStorage.getItem("score"));

    function setName(name) {
        _setName(name);
        localStorage.setItem("username", name);
    }

    function setScore(score) {
        _setScore(score);
        localStorage.setItem("score", score);
    }

    return (
        <StateContext.Provider value={{name, setName, category, setCategory, difficulty, setDifficulty, questions, setQuestions, score, setScore}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);