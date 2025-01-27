import { useState, FormEvent } from "react";
import QuizForm from "../../components/QuizForm/QuizForm";
import styles from "./Quiz.module.css";
import { fetchQuiz } from "../../services/Api";
import QuizDisplay from "../../components/QuizDisplay/QuizDisplay";

const Quiz = () => {
  const [questionsArray, setQuestionsArray] = useState([]);
  const [isQuizActive, setIsQuizActive] = useState<boolean>(false);
  let [score, setScore] = useState<number>(0);

  const onHandleSubmit = (
    e: FormEvent<HTMLFormElement>,
    selectedCategory:string,
    selectedDifficulty:string,
    selectedNoq:any
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
          setIsQuizActive(true);
        }
      })
      .catch((error) => console.error("Error fetching quiz:", error));
  };

  const handleRestartQuiz = () => {
    console.log(`reset button clicked`);
    setScore(0)
    setQuestionsArray([])
    setIsQuizActive(false);
  };

  return (
    <section className={styles.quizContainer}>
      {!isQuizActive && (
        <>
          <h1>Set up the quiz!</h1>
          <QuizForm onHandleSubmit={onHandleSubmit} />
        </>
      )}
      {isQuizActive && questionsArray.length > 0 && (
        <QuizDisplay
          arr={questionsArray}
          handleRestartQuiz={handleRestartQuiz}
          score={score}
          setScore={setScore}
        />
      )}
    </section>
  );
};

export default Quiz;
