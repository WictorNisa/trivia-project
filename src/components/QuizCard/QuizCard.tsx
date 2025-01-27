import { useState, useEffect } from "react";
import styles from "./QuizCard.module.css";
import { ChangeEvent } from 'react';

interface QuizCardProps {
  current: {
    question: string;
    category: string;
    correct_answer: string;
    incorrect_answers: string[];
  };
  onCorrectAnswer: () => void;
  
}

const QuizCard = ({ current, onCorrectAnswer }: QuizCardProps) => {
  const [answers, setAnswers] = useState<any>([]);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [, setIsCorrect] = useState<boolean>(false);

  const handleUserSelection = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedAnswer = e.target.value;
    setUserAnswer(selectedAnswer);
    if (selectedAnswer === current.correct_answer) {
      setIsCorrect(true);
      onCorrectAnswer();
    }
  };

  const getAnswerClass = (answer: string) => {
    if (userAnswer && answer === current.correct_answer) {
      return "correct"; // Highlight the correct answer
    }
    if (userAnswer === answer && answer !== current.correct_answer) {
      return "incorrect"; // Highlight the selected incorrect answer
    }
    return "default"; // Default state
  };

  useEffect(() => {
    const shuffledArr = [...current.incorrect_answers, current.correct_answer];
    shuffledArr.sort(() => Math.random() - 0.5);
    setAnswers(shuffledArr);
    setUserAnswer("");
    setIsCorrect(false);
  }, [current]);

  return (
    <div className={styles.cardContainer}>
      <h1>{current.question}</h1>
      <p>{current.category}</p>
      <form className={styles.answerContainer}>
     
        {answers.map((answer: any, index:any) => (
          <span key={index}>
            <label
              key={index}
              className={styles[getAnswerClass(answer)]} // Dynamic class
            >
              <input
                type="radio"
                name="radio_group"
                value={answer}
                onChange={handleUserSelection}
                disabled={!!userAnswer} // Disable after selection
                checked={userAnswer === answer}
              />
              {answer}
            </label>
          </span>
        ))}
        
      </form>
    </div>
  );
};

export default QuizCard;
