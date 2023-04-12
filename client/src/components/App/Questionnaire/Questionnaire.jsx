import React, { useState } from 'react';
import './Questionnaire.css';

const Questionnaire = ({ question, onSubmit }) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userInput);
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="questionnaire">
      <h2 className="question">{question}</h2>
      <form onSubmit={handleSubmit} className="questionnaire-form">
        <textarea
          className="user-input"
          value={userInput}
          onChange={handleChange}
          placeholder="Type your response here..."
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Questionnaire;