import { useEffect, useState } from "react";
import QuizForm from "../../components/QuizForm/QuizForm";
import styles from "./Quiz.module.css";
import { fetchQuiz } from "../../services/Api";
import QuizDisplay from "../../components/QuizDisplay/QuizDisplay";

const Quiz = () => {
  const [questionsArray, setQuestionsArray] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const onHandleSubmit = (
    e,
    selectedCategory,
    selectedDifficulty,
    selectedNoq
  ) => {
    e.preventDefault();
    const numberOfQuestions = selectedNoq || 10;
    console.log(
      `selected parameters: ${selectedCategory} ${selectedDifficulty} ${numberOfQuestions}`
    );
    fetchQuiz(selectedCategory, selectedDifficulty, numberOfQuestions)
      .then((res) => {
        if (res && res.results) {
          setQuestionsArray(res.results);
          setQuizStarted(true);
        }
      })
      .catch((error) => console.error("Error fetching quiz:", error));
  };
  console.log(questionsArray);

  return (
    <section className={styles.quizContainer}>
      {!quizStarted && (
        <>
          <h1>Set up the quiz!</h1>
          <QuizForm onHandleSubmit={onHandleSubmit} />
        </>
      )}
      {quizStarted && questionsArray.length > 0 && (
        <QuizDisplay arr={questionsArray} />
      )}
    </section>
  );
};

export default Quiz;
