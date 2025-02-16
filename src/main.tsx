import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import Home from "./Pages/Home/Home.tsx";
import Quiz from "./Pages/Quiz/Quiz.tsx";
import LeaderBoardPage from "./Pages/Leaderboard/LeaderBoardPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/quizsetup" element={<Quiz />} />
        <Route path="/leaderboard" element={<LeaderBoardPage/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
