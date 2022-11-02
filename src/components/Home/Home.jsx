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
      <h2>Choose two wizards to duel</h2>
      <span>Wizard One: {!charOne ? "Not yet selected!" : charOne.name} </span>
      <span>Wizard Two: {!charTwo ? "Not yet selected!" : charTwo.name} </span>
      {isChosen ? <Link to="/duel">Get Started!</Link> : null}
      {/* <Link to="/duel" disabled={isChosen ? false : true}>
        Get Started!
      </Link> */}
      {isChosen ? (
        <button onClick={handleResetChoiceClick}>Choose again</button>
      ) : null}
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
        <h3>Loading...</h3>
      )}
    </StyledHome>
  );
}

export default Home;
