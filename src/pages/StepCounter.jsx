import React, { useContext, useState } from "react";
import { FitnessContext } from "../context/FitnessContext";

const StepCounter = () => {
  const { steps, setSteps } = useContext(FitnessContext);
  const [newSteps, setNewSteps] = useState(0);

  const handleAddSteps = () => {
    setSteps(steps + parseInt(newSteps, 10));
    setNewSteps(0);
  };
  return (
    <div className="step-counter-container">
      <div className="step-counter-box">
        <h2>Step Counter</h2>
        <p>Current Steps: {steps}</p>
        <input
          type="number"
          placeholder="Add Steps"
          value={newSteps}
          onChange={(e) => setNewSteps(e.target.value)}
        />
        <button onClick={handleAddSteps}>Add Steps</button>
      </div>
    </div>
  );
};

export default StepCounter;
