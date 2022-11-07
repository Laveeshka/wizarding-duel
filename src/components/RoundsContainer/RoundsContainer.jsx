import { StyledRoundsContainer } from "./RoundsContainer.styled";
import { CharacterScore, SaveDuelForm } from "../../components";
import { useState, useEffect, useRef } from "react";

function RoundsContainer({ charOne, charTwo, spells }) {
  const [round, setRound] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [charOnePoints, setCharOnePoints] = useState(0);
  const [charTwoPoints, setCharTwoPoints] = useState(0);
  const [showOutcome, setShowOutcome] = useState(false);
  const outcomeMessage = useRef("");

  useEffect(() => {
    if (round === 3) {
      console.log("round is: ", round);
      setIsComplete(!isComplete);
    }
    console.log("isComplete is: ", isComplete);
  }, [round]);

  function handleNextRoundClick() {
    setRound((prevState) => ++prevState);
  }

  function handleShowOutcomeClick() {
    if (charOnePoints > charTwoPoints) {
      outcomeMessage.current = `${charOne.name} wins`;
    } else if (charOnePoints < charTwoPoints) {
      outcomeMessage.current = `${charTwo.name} wins`;
    } else {
      outcomeMessage.current = `It is a tie!`;
    }
    setShowOutcome((prevState) => !prevState);
  }

  //   console.log("charOnePoints is: ", charOnePoints);
  //   console.log("charTwoPoints is: ", charTwoPoints);

  return (
    <StyledRoundsContainer>
      <h2>Round {round} of 3</h2>
      <div className="spells-container">
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
      {isComplete ? (
        <button onClick={handleShowOutcomeClick}>Show outcome</button>
      ) : (
        <button onClick={handleNextRoundClick}>Next round</button>
      )}
      {showOutcome ? (
        <div className="outcome-container">
          <h1>{outcomeMessage.current}</h1>
          <SaveDuelForm
            charOne={charOne}
            charOnePoints={charOnePoints}
            charTwo={charTwo}
            charTwoPoints={charTwoPoints}
            outcome={outcomeMessage.current}
          />
        </div>
      ) : null}
    </StyledRoundsContainer>
  );
}

export default RoundsContainer;
