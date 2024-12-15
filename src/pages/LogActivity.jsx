import React, { useContext, useState } from "react";
import { FitnessContext } from "../context/FitnessContext";
import calorieCalculator from "../utils/calorieCalculator";

const LogActivity = () => {
  const { activities, setActivities, userStats } = useContext(FitnessContext);
  const [activity, setActivity] = useState({
    name: "",
    duration: 0,
    met: 0,
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const now = new Date();
    const date = now.toLocaleDateString();
    const time =
      activity.time ||
      now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

    const calories = calorieCalculator(
      activity.met,
      userStats.weight,
      activity.duration
    );

    const newActivity = {
      ...activity,
      calories,
      date,
      time,
    };

    setActivities([...activities, newActivity]);
    setActivity({ name: "", duration: 0, met: 0, time: "" });
  };

  return (
    <div className="log-activity-container">
      <form className="log-activity-box" onSubmit={handleSubmit}>
        <h2>Log Activity</h2>
        <input
          type="text"
          placeholder="Activity Name"
          value={activity.name}
          onChange={(e) => setActivity({ ...activity, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Duration (in minutes)"
          value={activity.duration}
          onChange={(e) =>
            setActivity({ ...activity, duration: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="MET Value"
          value={activity.met}
          onChange={(e) => setActivity({ ...activity, met: e.target.value })}
        />
        <input
          type="time"
          placeholder="Time"
          value={activity.time}
          onChange={(e) => setActivity({ ...activity, time: e.target.value })}
        />
        <button type="submit">Log Activity</button>
      </form>
    </div>
  );
};

export default LogActivity;
