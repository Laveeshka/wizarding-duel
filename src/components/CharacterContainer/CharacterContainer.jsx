import { StyledCharacterContainer } from "./CharacterContainer.styled";
import { CharacterCard } from "../../components";

function CharacterContainer({ characters, charOne, setCharOne, charTwo, setCharTwo, onCharacterChosen }) {
  const characterCardComponents = characters.map((character, index) => (
    <CharacterCard
      key={index}
      character={character}
      charOne={charOne}
      setCharOne={setCharOne}
      charTwo={charTwo}
      setCharTwo={setCharTwo}
      onCharacterChosen={onCharacterChosen}
    />
  ));
  return (
    <StyledCharacterContainer>
      {characterCardComponents}
    </StyledCharacterContainer>
  );
}

export default CharacterContainer;
