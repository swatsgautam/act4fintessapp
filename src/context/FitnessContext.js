import React, { createContext, useEffect, useState } from 'react';

export const FitnessContext = createContext();

export const FitnessProvider = ({ children }) => {
  // Load initial state from localStorage or use default values
  const [activities, setActivities] = useState(() => {
    const savedActivities = localStorage.getItem('activities');
    return savedActivities ? JSON.parse(savedActivities) : [];
  });

  const [steps, setSteps] = useState(() => {
    const savedSteps = localStorage.getItem('steps');
    return savedSteps ? parseInt(savedSteps, 10) : 0;
  });

  const [userStats, setUserStats] = useState(() => {
    const savedUserStats = localStorage.getItem('userStats');
    return savedUserStats
      ? JSON.parse(savedUserStats)
      : { weight: 70, height: 170, goalWeight: 65, calorie: 5000 };
  });

  // Save activities to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  // Save steps to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('steps', steps.toString());
  }, [steps]);

  // Save userStats to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('userStats', JSON.stringify(userStats));
  }, [userStats]);

  return (
    <FitnessContext.Provider
      value={{
        activities,
        setActivities,
        steps,
        setSteps,
        userStats,
        setUserStats,
      }}
    >
      {children}
    </FitnessContext.Provider>
  );
};
