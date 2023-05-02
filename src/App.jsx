import React from 'react';
import './App.css';
import GoalList from './components/GoalList';
import NewGoal from './components/NewGoal';
import { useState } from 'react';
function App() {
  const [courseGoal, setCourseGoal] = useState([
    {
      id: 'cg1',
      text: 'Finish the course',
    },
    {
      id: 'cg2',
      text: 'Learn all about the Course Main Topic',
    },
    {
      id: 'cg3',
      text: 'Assist other students in the Q &mps;A session',
    },
  ]);
  //const courseGoal =
  const addNewGoalHandler = (newGoal) => {
    //setCourseGoal(courseGoal.concat(newGoal));
    setCourseGoal((PrevCourseGoal) => {
      return PrevCourseGoal.concat(newGoal);
    });
    console.log(courseGoal);
  };
  return (
    <div className="course-goal">
      <NewGoal onAddGoal={addNewGoalHandler} />
      <h2>Courses Goals</h2>
      <GoalList goals={courseGoal} />
    </div>
  );
}

export default App;
