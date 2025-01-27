import Nav from "./components/Nav/Nav";
import "./App.css";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Outlet /> {/* This renders the child route content */}
      </main>
    </div>
  );
}

export default App;


// Things to add: 
// (In no order)

// Leaderboard functionality
// Login/sign-in
// Categories page where user can view all different categories in the Quiz
// Style the whole page and make it look good and crisp
// Add a dark/light mode
