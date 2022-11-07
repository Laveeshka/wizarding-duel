import { StyledChosenCharacterCard } from "./ChosenCharacterCard.styled";

function ChosenCharacterCard({ char }) {
  return (
    <StyledChosenCharacterCard>
        <img alt={char.name} src={char.image} />
        <span>{char.name}</span>
      {/* <h3>{char.name}</h3>
      <img alt={char.name} src={char.image} /> */}
    </StyledChosenCharacterCard>
  );
}

export default ChosenCharacterCard;
