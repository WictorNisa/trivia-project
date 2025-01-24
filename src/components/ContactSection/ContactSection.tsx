import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <footer className={styles.contactFooter}>
      <h2>Contact</h2>
      <div className={styles.contactListWrapper}>
        <ul>
          <li>Giuthub</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <h5>Thanks for playing! See you on the leaderboard soon.</h5>
    </footer>
  );
};

export default ContactSection;
