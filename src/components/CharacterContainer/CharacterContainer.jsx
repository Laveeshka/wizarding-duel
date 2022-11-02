import { StyledCharacterContainer } from "./CharacterContainer.styled";
import { CharacterCard } from "../../components";

function CharacterContainer({
  characters,
  charOne,
  setCharOne,
  charTwo,
  setCharTwo,
  onCharacterChosen,
  isChosen
}) {
  const characterCardComponents = characters.map((character, index) => (
    <CharacterCard
      key={index}
      character={character}
      charOne={charOne}
      setCharOne={setCharOne}
      charTwo={charTwo}
      setCharTwo={setCharTwo}
      onCharacterChosen={onCharacterChosen}
      isChosen={isChosen}
    />
  ));
  return (
    <StyledCharacterContainer>
      {characterCardComponents}
    </StyledCharacterContainer>
  );
}

export default CharacterContainer;
