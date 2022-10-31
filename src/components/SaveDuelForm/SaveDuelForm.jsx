import { StyledSaveDuelForm } from "./SaveDuelForm.styled";
import { useState } from "react";

function SaveDuelForm({
  charOne,
  charTwo,
  charOnePoints,
  charTwoPoints,
  outcome,
}) {
  const [feedback, setFeedback] = useState("");

  function handleChange(event) {
    setFeedback(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newSavedDuel = {
      charOne,
      charOnePoints,
      charTwo,
      charTwoPoints,
      outcome,
      feedback,
    };

    fetch("http://localhost:3000/history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSavedDuel),
    })
      .then((res) => res.json())
      .then((savedDuel) => console.log(savedDuel));
  }
  return (
    <StyledSaveDuelForm>
      <form onSubmit={handleSubmit}>
        <label htmlFor="feedback">Leave any feedback</label>
        <input
          type="text"
          id="feedback"
          name="feedback"
          onChange={handleChange}
        ></input>
        <button type="submit">Save duel outcome</button>
      </form>
    </StyledSaveDuelForm>
  );
}

export default SaveDuelForm;
