import styles from './QuizResults.module.css'

const QuizResults = ({handleRestartQuiz, score, arr}) => {
  return (
    <div className={styles.quizResultsContainer}>
        <h1>Quiz finished</h1>
        <p>You scored {score} out of {arr.length} points</p>
        <button onClick={handleRestartQuiz}>
            Play again!
        </button>
    </div>
  )
}

export default QuizResults