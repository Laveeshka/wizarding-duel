import { StyledSavedDuelCard } from "./SavedDuelCard.styled";

function SavedDuelCard({ savedDuel }) {
  const { charOne, charOnePoints, charTwo, charTwoPoints, outcome, feedback } =
    savedDuel;

  return (
    <StyledSavedDuelCard>
      <h3>{outcome}</h3>
      <p>
        {charOne.name} scored {charOnePoints}
      </p>
      <p>
        {charTwo.name} scored {charTwoPoints}
      </p>
      <small>Your commented: {feedback}</small>
    </StyledSavedDuelCard>
  );
}

export default SavedDuelCard;
