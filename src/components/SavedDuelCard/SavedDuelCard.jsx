import { StyledSavedDuelCard } from "./SavedDuelCard.styled";

function SavedDuelCard({ savedDuel }) {
  const {
    charOne,
    charOnePoints,
    charTwo,
    charTwoPoints,
    outcome,
    dateTime,
    feedback,
  } = savedDuel;

  return (
    <StyledSavedDuelCard>
      <span className="date-time">{dateTime}</span>
      <h3>{outcome}</h3>
      <div className="characters-container">
        <div className="character-container">
          <div className="character-img-container">
            <img alt={charOne.name} src={charOne.image} />
            <span>{charOne.name}</span>
          </div>
          <div className="score">
            <p>FINAL SCORE</p>
            <p className="points">{charOnePoints}</p>
          </div>
        </div>
        <div className="character-container">
          <div className="character-img-container">
            <img alt={charTwo.name} src={charTwo.image} />
            <span>{charTwo.name}</span>
          </div>
          <div className="score">
            <p>FINAL SCORE</p>
            <p className="points">{charTwoPoints}</p>
          </div>
        </div>
      </div>
      <div className="feedback-container">
        <div className="line"></div>
        <small>"{feedback}"</small>
        <div className="line"></div>
      </div>
    </StyledSavedDuelCard>
  );
}

export default SavedDuelCard;
