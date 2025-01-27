import { useState } from "react";
import QuizCard from "../QuizCard/QuizCard";
import styles from "./QuizDisplay.module.css";
import QuizResults from "../QuizResults/QuizResults";

interface QuizDisplayProps {
  arr: any[]; // Replace 'any' with the appropriate type if known
  handleRestartQuiz: () => void;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const QuizDisplay = ({ arr, handleRestartQuiz, score, setScore }: QuizDisplayProps) => {
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
        <div className={styles.questionDisplayWrapper}>
          <h4>{`Question ${currentQuestionIndex + 1} of ${arr.length}`}</h4>
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
        </div>
      )}
    </div>
  );
};

export default QuizDisplay;
