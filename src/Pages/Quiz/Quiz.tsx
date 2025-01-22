import { useEffect, useState } from "react";
import QuizForm from "../../components/QuizForm/QuizForm";
import styles from "./Quiz.module.css";
import { fetchQuiz } from "../../services/Api";

const Quiz = () => {
  const onHandleSubmit = (
    e,
    selectedCategory,
    selectedDifficulty,
    selectedNoq
  ) => {
    e.preventDefault();
    const numberOfQuestions = selectedNoq || 10;
    console.log(`selected parameters: ${selectedCategory} ${selectedDifficulty} ${numberOfQuestions}`)
    fetchQuiz(selectedCategory, selectedDifficulty, numberOfQuestions).then(
      (res) => {
        console.log(res);
      }
    );
  };

  return (
    <section className={styles.quizContainer}>
      <h1>Set up the quiz!</h1>
      <QuizForm onHandleSubmit={onHandleSubmit} />
    </section>
  );
};

export default Quiz;
