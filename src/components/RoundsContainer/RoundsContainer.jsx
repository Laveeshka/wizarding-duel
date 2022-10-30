import { StyledRoundsContainer } from "./RoundsContainer.styled";
import {CharacterScore} from "../../components";
import { useState } from "react";

function RoundsContainer({ charOne, charTwo, spells }) {
  const [round, setRound] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  function handleNextRoundClick(){
    if (round < 3)
        setRound(prevState => ++prevState);
  }

  return (
    <StyledRoundsContainer>
      <h2>Round {round} of 3</h2>
      <div>
        <CharacterScore char={charOne} spells={spells}/>
        <CharacterScore char={charTwo} spells={spells}/>
      </div>
      <button onClick={handleNextRoundClick}>Next round</button>
    </StyledRoundsContainer>
  );
}

export default RoundsContainer;
