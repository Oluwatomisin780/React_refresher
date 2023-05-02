import React, { useState } from 'react';

const NewGoal = (props) => {
  //let enteredText = '';
  const [enteredText, setEnteredText] = useState('');
  const textChangeHandler = (e) => {
    setEnteredText(e.target.value);
  };
  const addNewGoal = (e) => {
    e.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };
    setEnteredText('');
    console.log(newGoal);
    props.onAddGoal(newGoal);
  };

  return (
    <form className="new-goal" onSubmit={addNewGoal}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Goals</button>
    </form>
  );
};
export default NewGoal;
