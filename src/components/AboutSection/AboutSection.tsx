import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={styles.aboutContainerWrapper}>
      <div className={styles.aboutTextContainer}>
        <h2>About the quiz app</h2>
        <p>
          Welcome to my quiz app! This project started as a way to expand my
          skills in React and push my knowledge of TypeScript. I wanted to
          challenge myself by creating a functional, interactive app from the
          ground up.
        </p>
        <p>
          Building this app has been an incredible learning experience. I’ve
          gained a much deeper understanding of React, TypeScript, and how to
          handle things like state, components, and logic in real-world
          projects.
        </p>
        <p>
          There’s still more to come! I’m currently learning about databases and
          Node.js. Once I’m confident, I’ll add features like:
        </p>
        <p>
          My favorite quiz category on this app is definitely the Computers
          section. What’s yours? Maybe you can beat my high score when the
          leaderboard goes live—challenge accepted?
        </p>
      </div>
      <div className={styles.aboutThingsToComeContainer}>
        <h3>Things to come</h3>
        <ul>
          <li>* A Leaderboard, where you can see how you rank against others.</li>
          <li>
            * Sign Up and Sign In, so your scores can be saved across sessions.
          </li>
          <li>* A dark/light mode option, so you can quiz all night long.</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
