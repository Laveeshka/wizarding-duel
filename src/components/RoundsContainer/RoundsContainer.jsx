import { StyledRoundsContainer } from "./RoundsContainer.styled";
import { CharacterScore, SaveDuelForm } from "../../components";
import { useState, useEffect, useRef } from "react";
//import react toastify package
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import sound
import noGoodSound from '../../sounds/nogood.mp3';
import mischiefManagedSound from '../../sounds/mischief.mp3';
import callMySound from "../../utils/callMySound";

function RoundsContainer({ charOne, charTwo, spells }) {
  const [round, setRound] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [charOnePoints, setCharOnePoints] = useState(0);
  const [charTwoPoints, setCharTwoPoints] = useState(0);
  const [showOutcome, setShowOutcome] = useState(false);
  const outcomeMessage = useRef("");

  useEffect(() => {
    //play sound on mount and every time the value of round state changes
    callMySound(noGoodSound);

    if (round === 3) {
      //console.log("round is: ", round);
      setIsComplete(!isComplete);
    }
    //console.log("isComplete is: ", isComplete);
  }, [round]);



  function handleNextRoundClick() {
    setRound((prevState) => ++prevState);
  }

  function handleShowOutcomeClick() {
    callMySound(mischiefManagedSound);

    if (charOnePoints > charTwoPoints) {
      outcomeMessage.current = `${charOne.character} wins`;
    } else if (charOnePoints < charTwoPoints) {
      outcomeMessage.current = `${charTwo.character} wins`;
    } else {
      outcomeMessage.current = `It is a tie!`;
    }
    setShowOutcome((prevState) => !prevState);
  }

  function handleShowToastMessage(){
    toast("Duel successfully saved!", {
      position: toast.POSITION.BOTTOM_CENTER,
      className: 'toast-message'
    });
  }

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
            handleShowToastMessage={handleShowToastMessage}
          />
        </div>
      ) : null}
      <ToastContainer />
    </StyledRoundsContainer>
  );
}

export default RoundsContainer;
