import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>TriviaSite</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/quizsetup">Superhero gallery</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
