import React from 'react';

const GoalList = (props) => {
  console.log(props.goals);
  return (
    <ul className="goal-lists">
      {props.goals.map((goal) => {
        return <li key={goal.id}>{goal.text}</li>;
      })}
    </ul>
  );
};
export default GoalList;
