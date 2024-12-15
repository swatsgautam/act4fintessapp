import React, { useContext, useState } from "react";
import { FitnessContext } from "../context/FitnessContext";

const MyStats = () => {
  const { userStats, setUserStats } = useContext(FitnessContext);

  const [editWeight, setEditWeight] = useState(false);
  const [editGoalWeight, setEditGoalWeight] = useState(false);
  const [editCalories, setEditCalories] = useState(false);

  const [newWeight, setNewWeight] = useState(userStats.weight);
  const [newGoalWeight, setNewGoalWeight] = useState(userStats.goalWeight);
  const [newCalories, setNewCalories] = useState(userStats.calories);

  const handleUpdateWeight = () => {
    setUserStats({ ...userStats, weight: parseFloat(newWeight) });
    setEditWeight(false);
  };

  const handleUpdateGoalWeight = () => {
    setUserStats({ ...userStats, goalWeight: parseFloat(newGoalWeight) });
    setEditGoalWeight(false);
  };

  const handleUpdateCalories = () => {
    setUserStats({ ...userStats, calories: parseFloat(newCalories) });
    setEditCalories(false);
  };

  const handleCancelEditWeight = () => {
    setNewWeight(userStats.weight);
    setEditWeight(false);
  };

  const handleCancelEditGoalWeight = () => {
    setNewGoalWeight(userStats.goalWeight);
    setEditGoalWeight(false);
  };

  const handleCancelEditCalories = () => {
    setNewCalories(userStats.calories);
    setEditCalories(false);
  };

  return (
    <div className="my-stats-container">
      <div className="my-stats-box">
        <h2>My Stats</h2>
        <p>Height: {userStats.height} cm</p>

        {/* Current Weight */}
        <div className="stat-field">
          <p>
            Current Weight:{" "}
            {editWeight ? (
              <input
                type="number"
                value={newWeight}
                onChange={(e) => setNewWeight(e.target.value)}
              />
            ) : (
              `${userStats.weight} kg`
            )}
          </p>
          <button
            className="edit-button"
            onClick={() => setEditWeight(!editWeight)}
          >
            {editWeight ? "Save" : "Edit"}
          </button>
          {editWeight && (
            <>
              <button className="save-button" onClick={handleUpdateWeight}>
                Save
              </button>
              <button
                className="cancel-button"
                onClick={handleCancelEditWeight}
              >
                Cancel
              </button>
            </>
          )}
        </div>

        {/* Goal Weight */}
        <div className="stat-field">
          <p>
            Goal Weight:{" "}
            {editGoalWeight ? (
              <input
                type="number"
                value={newGoalWeight}
                onChange={(e) => setNewGoalWeight(e.target.value)}
              />
            ) : (
              `${userStats.goalWeight} kg`
            )}
          </p>
          <button
            className="edit-button"
            onClick={() => setEditGoalWeight(!editGoalWeight)}
          >
            {editGoalWeight ? "Save" : "Edit"}
          </button>
          {editGoalWeight && (
            <>
              <button className="save-button" onClick={handleUpdateGoalWeight}>
                Save
              </button>
              <button
                className="cancel-button"
                onClick={handleCancelEditGoalWeight}
              >
                Cancel
              </button>
            </>
          )}
        </div>

        {/* Calories */}
        <div className="stat-field">
          <p>
            Calories:{" "}
            {editCalories ? (
              <input
                type="number"
                value={newCalories}
                onChange={(e) => setNewCalories(e.target.value)}
              />
            ) : (
              `${userStats.calories} kcal`
            )}
          </p>
          <button
            className="edit-button"
            onClick={() => setEditCalories(!editCalories)}
          >
            {editCalories ? "Save" : "Edit"}
          </button>
          {editCalories && (
            <>
              <button className="save-button" onClick={handleUpdateCalories}>
                Save
              </button>
              <button
                className="cancel-button"
                onClick={handleCancelEditCalories}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default MyStats;
