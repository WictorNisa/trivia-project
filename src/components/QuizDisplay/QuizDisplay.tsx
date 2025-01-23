import { useState, useEffect } from "react";
import QuizCard from "../QuizCard/QuizCard";
import styles from "./QuizDisplay.module.css";

const QuizDisplay = ({ arr }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  let [score, setScore] = useState<number>(0)

  const onClickNextQuestion = () => {
    if (currentQuestionIndex < arr.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const onCorrectAnswer = () => {
    setScore(score += 1)
    console.log(score)
  }
  return (
    <div className={styles.quizDisplayContainer}>
        <span>{`Question ${currentQuestionIndex + 1} of ${arr.length}`}</span>
      <QuizCard
        current={arr[currentQuestionIndex]}
        index={currentQuestionIndex}
        onCorrectAnswer={onCorrectAnswer}
      />
      <div className={styles.buttonContainer}>
        <button onClick={onClickNextQuestion}>next</button>
      </div>
    </div>
  );
};

export default QuizDisplay;
