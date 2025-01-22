import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.heroContainer}>
      <h1>This is the hero page</h1>
      <p>Test your trivia knowledge!</p>
      <button>
        <Link to="/quizsetup">To the quiz</Link>
      </button>
    </section>
  );
};

export default Home;
