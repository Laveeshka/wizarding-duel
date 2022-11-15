import { StyledChosenCharacterCard } from "./ChosenCharacterCard.styled";

function ChosenCharacterCard({ char }) {
  return (
    <StyledChosenCharacterCard>
        <img alt={char.name} src={char.image} />
        <span>{char.name}</span>
    </StyledChosenCharacterCard>
  );
}

export default ChosenCharacterCard;
