import { StyledSaveDuelForm } from "./SaveDuelForm.styled";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

function SaveDuelForm({
  charOne,
  charTwo,
  charOnePoints,
  charTwoPoints,
  outcome,
  handleShowToastMessage
}) {
  const [feedback, setFeedback] = useState("");
  const history = useHistory();

  function handleChange(event) {
    setFeedback(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const dateTime = new Date().toLocaleString('en-GB', { timeZone: 'UTC' });
    const newSavedDuel = {
      charOne,
      charOnePoints,
      charTwo,
      charTwoPoints,
      outcome,
      dateTime,
      feedback
    };


    fetch("http://localhost:3000/history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSavedDuel),
    })
      .then((res) => res.json())
      .then((savedDuel) => {
        console.log(savedDuel);
        handleShowToastMessage();
        setTimeout(() => history.push("/history"), 4000);
        

      });
  }
  return (
    <StyledSaveDuelForm>
      <form onSubmit={handleSubmit}>
        <label htmlFor="feedback">What are your thoughts on this duel?
        </label>
        <input
          type="text"
          id="feedback"
          name="feedback"
          placeholder="Enter your feedback"
          onChange={handleChange}
        ></input>
        <button className="form-btn" type="submit">Save duel outcome</button>
      </form>
    </StyledSaveDuelForm>
  );
}

export default SaveDuelForm;
