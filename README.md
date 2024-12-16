# **Fitness Tracker App**

## **Description**

The Fitness Tracker App is a React-based web application that allows users to log their fitness activities, monitor daily steps, and track calories burned. It provides an interactive calendar to view activities on specific dates, progress tracking with circular charts, and easy navigation to log new steps or activities.

---

## **Features**

1. **Activity Logging**  
   - Users can log fitness activities (name, duration, and calories burned).  
   - Activities are saved in local storage.

2. **Daily Steps Tracking**  
   - Users can log daily steps to monitor their walking/running progress.

3. **Interactive Calendar**  
   - A date picker allows users to view activities for specific days.  
   - Activities filter based on the selected date.

4. **Progress Visualization**  
   - Circular progress charts display:  
     - Total Steps (against a 10,000-step goal).  
     - Calories burned (against a 2,000 kcal goal).  
     - Weight progress percentage.

5. **Data Management**  
   - Users can clear all data (activities and steps) with a single button.

6. **Responsive Design**  
   - The app adapts to various screen sizes for a seamless experience.

---

## **Technologies Used**

- **React**: Frontend framework  
- **React-Router-DOM**: For navigation between pages  
- **React-Calendar**: Interactive calendar component  
- **HTML/CSS**: Styling and structure  
- **Local Storage**: Persistent data storage  
- **JavaScript**: Core functionality and logic  

---

## **Installation**

Follow these steps to run the project locally:

### **1. Clone the Repository**
```bash
git clone https://github.com/swatsgautam/act4fintessapp.git
cd act4fitnessapp
npm install
npm start
```

## **Usage**

### **Log Steps**
- Click the **Log Steps** button to navigate to the step counter page and record your steps.

### **Log Activity**
- Add new fitness activities (e.g., running, cycling) with duration and calories burned.

### **View Progress**
- Monitor your daily steps and calories burned using the **circular progress charts**.
- Use the **calendar** to navigate between dates and view logged activities for specific days.

### **Clear Data**
- Use the **Clear All** button to reset activities and steps data.

## **Dependencies**

- **react**: ^18.2.0  
- **react-router-dom**: ^6.10.0  
- **react-calendar**: ^3.10.0  
- **react-scripts**: ^5.0.1  

