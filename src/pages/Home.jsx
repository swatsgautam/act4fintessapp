import React, { useContext, useEffect, useRef, useState } from "react";
import { FitnessContext } from "../context/FitnessContext";
import { useNavigate } from "react-router-dom";
import CircularProgress from "./CircularProgress";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Home = () => {
  const { activities, setActivities, steps, setSteps, userStats } =
    useContext(FitnessContext);
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date()); // Selected date state
  const [showCalendar, setShowCalendar] = useState(false); // State to toggle calendar visibility
  const calendarRef = useRef(null); // Ref to detect clicks outside the calendar

  // Load initial data from localStorage
  useEffect(() => {
    const savedActivities = localStorage.getItem("activities");
    const savedSteps = localStorage.getItem("steps");

    if (savedActivities) setActivities(JSON.parse(savedActivities));
    if (savedSteps) setSteps(parseInt(savedSteps, 10));
  }, [setActivities, setSteps]);

  // Save activities and steps to localStorage when they change
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  useEffect(() => {
    localStorage.setItem("steps", steps.toString());
  }, [steps]);

  // Calculate total calories burned from activities
  const totalCaloriesBurned = activities.reduce(
    (sum, act) => sum + act.calories,
    0
  );

  // Calculate total weight progress based on calories burned and activities
  const totalWeightProgress = (totalCaloriesBurned / userStats.calories) * 100;
  const weightProgress = Math.min(totalWeightProgress, 100);

  // Function to navigate to the Log Steps page
  const handleLogSteps = () => {
    navigate("/step-counter");
  };

  // Function to navigate to the Log Activity page
  const handleLogActivity = () => {
    navigate("/log-activity");
  };

  // Function to clear all saved data
  const handleClearAll = () => {
    setActivities([]);
    setSteps(0);
    localStorage.removeItem("activities");
    localStorage.removeItem("steps");
  };

  // Filter activities for the selected date
  const activitiesForSelectedDate = activities.filter((activity) => {
    const activityDate = new Date(activity.date);
    const selectedDateWithoutTime = new Date(selectedDate.setHours(0, 0, 0, 0));
    return (
      activityDate.toLocaleDateString() ===
      selectedDateWithoutTime.toLocaleDateString()
    );
  });

  // Handle previous and next date navigation
  const handlePrevDate = () => {
    setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() - 1)));
  };

  const handleNextDate = () => {
    setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() + 1)));
  };

  // Toggle calendar visibility when clicking on date
  const handleDateClick = (e) => {
    e.stopPropagation();
    setShowCalendar(!showCalendar);
  };

  // Close the calendar when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="home">
      <div className="home-content">
        <div className="table-section">
          <div className="header-section">
            {/* Date navigation with previous and next icons */}
            <div className="date-navigation">
              <button onClick={handlePrevDate}>←</button>

              {/* Display selected date with a button to open the calendar */}
              <p onClick={handleDateClick}>
                {selectedDate.toLocaleDateString()}
              </p>

              <button onClick={handleNextDate}>→</button>
            </div>

            <div className="buttons-section">
              <button onClick={handleLogSteps}>Log Steps</button>
              <button onClick={handleLogActivity}>Log Activity</button>
              <button onClick={handleClearAll}>Clear All</button>
            </div>
          </div>

          {/* Calendar Overlay */}
          {showCalendar && (
            <div ref={calendarRef} className="calendar-overlay">
              <Calendar onChange={setSelectedDate} value={selectedDate} />
            </div>
          )}
          <table>
            <thead>
              <tr>
                <th>Activity</th>
                <th>Duration (min)</th>
                <th>Calories Burned (kcal)</th>
                <th>When</th>
              </tr>
            </thead>
            <tbody>
              {activitiesForSelectedDate.length > 0 ? (
                activitiesForSelectedDate.map((act, index) => {
                  const date = new Date(act.date);
                  const time = act.time
                    ? new Date(
                        `${date.toLocaleDateString()} ${act.time}`
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })
                    : "Time not set";
                  return (
                    <tr key={index}>
                      <td>{act.name}</td>
                      <td>{act.duration}</td>
                      <td>{act.calories}</td>
                      <td>{time}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="4">No activities for this day</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="progress-section">
          <CircularProgress
            value={steps}
            total={10000}
            label={`Steps: ${steps} / 10k`}
          />
          <CircularProgress
            value={Math.round(totalCaloriesBurned)}
            total={userStats.calories}
            label={`Calories: ${Math.round(totalCaloriesBurned)} / ${
              userStats.calories
            } kcal`}
          />
          <CircularProgress
            value={Math.round(weightProgress)}
            total={userStats.weight}
            label={`Goal Weight`}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
