import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import AboutSection from "../../components/AboutSection/AboutSection";
import ContactSection from "../../components/ContactSection/ContactSection";

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.heroInnerContainer}>
        <h1>Are You a Trivia Master?</h1>
        <p>Join the Fun and Test Your Knowledge Across Multiple Categories!</p>
        <button>
          <Link to="/quizsetup">Start Quiz Now</Link>
        </button>
        </div>
       
      </div>
      <AboutSection/>
      <ContactSection/>
    </section>
  );
};

export default Home;
