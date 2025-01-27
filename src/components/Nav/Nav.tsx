import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { useScroll } from "motion/react";
import { useState, useEffect } from "react";
import Lenis from "lenis";
const Nav = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Subscribe to scroll changes and toggle the state
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20); // Set threshold (e.g., 50px)
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [scrollY]);

  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    console.log(e);
  });
  return (
    <nav
      className={styles.navBar}
      style={{
        width: "100%",
        height: "80px",
        display: "flex",
        zIndex: "100",
        position: "fixed",
        top: 0,
        backgroundColor: isScrolled ? "#fff" : "transparent",
        color: isScrolled ? "#000" : "#fff",
        boxShadow: isScrolled ? "0 1px 5px rgba(0, 0, 0, 0.15)" : "none",
        transition: "background-color 0.7s ease, color 1s ease",
      }}
    >
      <h1>TriviaMaster</h1>
      <ul className={styles.navList}>
        <li > 
          <Link to="/" style={{
            color: isScrolled ? "#000" : "#fff",
          }}>Home</Link>
        </li>

        <li>
          <Link to="/quizsetup" style={{
            color: isScrolled ? "#000" : "#fff",
          }}>Quiz</Link>
        </li>

        <li>
          <Link to="/leaderboard" style={{
            color: isScrolled ? "#000" : "#fff",
          }}>Leaderboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
