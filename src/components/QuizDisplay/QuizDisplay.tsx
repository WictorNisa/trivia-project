import { useState, useEffect } from "react";
import QuizCard from "../QuizCard/QuizCard";
import styles from "./QuizDisplay.module.css";
import QuizResults from "../QuizResults/QuizResults";

const QuizDisplay = ({ arr, handleRestartQuiz, score, setScore }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const onClickNextQuestion = () => {
    if (currentQuestionIndex < arr.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const onCorrectAnswer = () => {
    setScore((prevScore: number) => prevScore + 1);
    console.log(score);
  };
  return (
    <div className={styles.quizDisplayContainer}>
      {currentQuestionIndex === arr.length ? (
        <QuizResults
          handleRestartQuiz={handleRestartQuiz}
          score={score}
          arr={arr}
        />
      ) : (
        <>
          <span>{`Question ${currentQuestionIndex + 1} of ${arr.length}`}</span>
          <QuizCard
            current={arr[currentQuestionIndex]}
            index={currentQuestionIndex}
            onCorrectAnswer={onCorrectAnswer}
          />
          {currentQuestionIndex < arr.length && (
            <div className={styles.buttonContainer}>
              <button onClick={onClickNextQuestion}>next</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QuizDisplay;
