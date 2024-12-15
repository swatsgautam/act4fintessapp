const calorieCalculator = (met, weight, duration) => {
  return (met * weight * duration) / 60;
};

export default calorieCalculator;
