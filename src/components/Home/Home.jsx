import { useState } from "react";
import { StyledHome } from "./Home.styled";
//import the useQuery custom hook to fetch characters data from the API
import useQuery from "../../hooks/useQuery";
//import(s) from react-router-dom
import { useHistory, Link } from "react-router-dom";
import { CharacterContainer } from "../../components";

function Home({
  charOne,
  charTwo,
  isChosen,
  setCharOne,
  setCharTwo,
  setIsChosen,
}) {
  const baseCharacterUrl = "https://hp-api.herokuapp.com/api/characters";
  const { data: charactersData, isLoaded } = useQuery(baseCharacterUrl);

  function handleChosenCharacters() {
    setIsChosen((prevState) => !prevState);
  }

  //set charOne and charTwo to null
  //set isChosen to false
  function handleResetChoiceClick() {
    setCharOne(() => setCharOne(null));
    setCharTwo(() => setCharTwo(null));
    setIsChosen((prevState) => !prevState);
  }

  return (
    <StyledHome>
      <header>
        <h2>Wizarding Duel</h2>
        <h3>Choose two wizards for duel</h3>
        <div className="dueller-container">
          <div className="dueller">
            <div className="text-italic">First dueller</div>
            <div className="dueller-name">
              {!charOne ? "Not yet selected!" : charOne.name}
            </div>
          </div>
          <div className="dueller">
            <div className="text-italic">Second dueller</div>
            <div className="dueller-name">
              {!charTwo ? "Not yet selected!" : charTwo.name}
            </div>
          </div>
        </div>
        <div className="button-container">
          {isChosen ? <Link to="/duel">Start Duel</Link> : null}
          {isChosen ? (
            <button onClick={handleResetChoiceClick}>Choose again</button>
          ) : null}
        </div>
      </header>
      {isLoaded ? (
        <CharacterContainer
          characters={charactersData}
          charOne={charOne}
          setCharOne={setCharOne}
          charTwo={charTwo}
          setCharTwo={setCharTwo}
          onCharacterChosen={handleChosenCharacters}
          isChosen={isChosen}
        />
      ) : (
        <h3 className="loading">Loading...</h3>
      )}
    </StyledHome>
  );
}

export default Home;
