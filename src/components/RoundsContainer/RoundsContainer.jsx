import { StyledRoundsContainer } from "./RoundsContainer.styled";
import { CharacterScore } from "../../components";
import { useState, useEffect } from "react";

function RoundsContainer({ charOne, charTwo, spells }) {
  const [round, setRound] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [charOnePoints, setCharOnePoints] = useState(0);
  const [charTwoPoints, setCharTwoPoints] = useState(0);

  useEffect(() => {
    if (round === 3){
        console.log("round is: ", round);
        setIsComplete(!isComplete);
    }
    console.log("isComplete is: ", isComplete);
  }, [round])

  function handleNextRoundClick() {
      setRound((prevState) => ++prevState);
  }

  console.log("charOnePoints is :", charOnePoints);

  return (
    <StyledRoundsContainer>
          <h2>Round {round} of 3</h2>
          <div>
            <CharacterScore
              char={charOne}
              spells={spells}
              onAddPoints={setCharOnePoints}
              isComplete={isComplete}
            />
            <CharacterScore
              char={charTwo}
              spells={spells}
              onAddPoints={setCharTwoPoints}
              isComplete={isComplete}
            />
          </div>
          {isComplete? <button>Show outcome</button> : <button onClick={handleNextRoundClick}>Next round</button>}
          <p>{charOnePoints}</p>
          <p>{charTwoPoints}</p>

    </StyledRoundsContainer>
  );
}

export default RoundsContainer;
