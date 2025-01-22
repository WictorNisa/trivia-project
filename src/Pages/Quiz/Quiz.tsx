const Quiz = () => {
  return (
    <section>
      <h1>Set up the quiz!</h1>
      <form id="quiz-setup">
        <label htmlFor="category">Category</label>
        <select id="category" name="category">
          <option value="">Select Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Theatre</option>
          <option value="14">Science: Gadgets</option>
          <option value="15">Science: Computers</option>
          <option value="16">Science: Nature</option>
          <option value="17">Science: Animals</option>
          <option value="18">Science: Computers</option>
          <option value="19">Mythology</option>
          <option value="20">Sports</option>
          <option value="21">Geography</option>
          <option value="22">History</option>
          <option value="23">Politics</option>
          <option value="24">Art</option>
          <option value="25">Celebrities</option>
          <option value="26">Animals</option>
          <option value="27">Vehicles</option>
          <option value="28">Science: Nature</option>
          <option value="29">Science: Computers</option>
        </select>

        <label htmlFor="difficulty">Difficulty</label>
        <select id="difficulty" name="difficulty">
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <label htmlFor="number">Number of Questions</label>
        <select id="number" name="number">
          <option value="">Select Number of Questions</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
        </select>

        <button type="submit">Start Quiz</button>
      </form>
    </section>
  );
};

export default Quiz;
