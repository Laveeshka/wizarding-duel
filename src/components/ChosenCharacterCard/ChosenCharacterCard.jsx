import { StyledChosenCharacterCard } from "./ChosenCharacterCard.styled";

function ChosenCharacterCard({ char }) {
  return (
    <StyledChosenCharacterCard>
        <img alt={char.character} src={char.image} />
        <span>{char.character}</span>
    </StyledChosenCharacterCard>
  );
}

export default ChosenCharacterCard;
