import HangmanGame from "./Components/Hangmangame";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Components/Homescreen";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/hangman" element={<HangmanGame />} />
        <Route path="/backhome" element={<HomeScreen />} />
      </Routes>
    </div>
  );
};

export default App;
