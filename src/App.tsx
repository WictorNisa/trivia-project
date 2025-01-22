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
