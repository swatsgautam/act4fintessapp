import "./App.css";
import { FitnessProvider } from "./context/FitnessContext";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogActivity from "./pages/LogActivity";
import StepCounter from "./pages/StepCounter";
import MyStats from "./pages/MyStats";

function App() {
  return (
    <FitnessProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-activity" element={<LogActivity />} />
        <Route path="/step-counter" element={<StepCounter />} />
        <Route path="/my-stats" element={<MyStats />} />
      </Routes>
    </FitnessProvider>
  );
}

export default App;
