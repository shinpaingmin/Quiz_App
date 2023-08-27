import { useEffect } from "react";
import api from "../api/api";
import { useStateContext } from "../context/Context";

export const useQuestions = (category, difficulty) => {
  const { questions, setQuestions } = useStateContext();

  const fetchQuestions = async () => {
    try {
      const { data } = await api.get(
        `api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      console.log(data.results);
      setQuestions(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return { questions };
};
