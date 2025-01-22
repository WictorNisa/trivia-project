import { Link } from "react-router-dom";
import styles from './Nav.module.css'
const Nav = () => {
  return (
    <nav className={styles.navBar}>
      <h1>TriviaSite</h1>
      <ul className={styles.navList}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/quizsetup">Quiz</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
