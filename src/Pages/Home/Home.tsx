import { Link } from "react-router-dom"



const Home = () => {
  return (
    <div>
        <h1>This is the hero page</h1>
        <p>Test your trivia knowledge!</p>
        <button>
          <Link to="/quizsetup">To the quiz</Link>
        </button>
    </div>
  )
}

export default Home