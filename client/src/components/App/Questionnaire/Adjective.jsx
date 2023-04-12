import React, { useState } from 'react';
// import './Questionnaire.css';

const Adjective = ({ onSubmit }) => {
  const [adjInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(adjInput);
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="adjDiv">
      <h2 className="adjHeader">As an employee, describe yourself in one word.</h2>
      <form onSubmit={handleSubmit} className="adjForm">
        <textarea
          className="adjInput"
          value={adjInput}
          onChange={handleChange}
          placeholder="Motivated, creative, outgoing..."
        />
        <button type="submit" className="adjSubmitBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Adjective;