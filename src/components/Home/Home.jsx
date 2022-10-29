import { useState } from "react";
import { StyledHome } from "./Home.styled";
//import the useQuery custom hook to fetch characters data from the API
import useQuery from "../../hooks/useQuery";
//import child components
import { CharacterContainer } from "../../components";

function Home() {
  //states for character1 and character2
  const [charOne, setCharOne] = useState(null);
  const [charTwo, setCharTwo] = useState(null);
  const [isChosen, setIsChosen] = useState(false);
  // Reset choice of characters 
  // Can you compute it based on any other state or props in your component? -- YES, based on isChosen
  // If isChosen is true, show reset choice button


  const baseCharacterUrl = "https://hp-api.herokuapp.com/api/characters";
  const { data: charactersData, isLoaded } = useQuery(baseCharacterUrl);
  //console.log(charactersData);

  function handleGetStartedBtnClick() {
    if (charTwo) {
      setIsChosen((prevState) => setIsChosen(!prevState));
    }
    console.log("isChosen is: ", isChosen);
  }

  //set charOne and charTwo to null
  //set isChosen to false
  function handleResetChoiceClick(){
    setCharOne(() => setCharOne(null));
    setCharTwo(() => setCharTwo(null));
    setIsChosen((prevState) => !prevState);
  }

  function handleDuelStart(){

  }

  return (
    <StyledHome>
      <h2>Choose two wizards to duel</h2>
      <span>Wizard One: {!charOne ? "Not yet selected!" : charOne.name} </span>
      <span>Wizard Two: {!charTwo ? "Not yet selected!" : charTwo.name} </span>
      <button disabled={isChosen ? false : true} onClick={handleDuelStart}>Get Started!</button>
      {isChosen ? (<button onClick={handleResetChoiceClick}>Choose again</button>) : null}
      {isLoaded ? (
        <CharacterContainer
          characters={charactersData}
          charOne={charOne}
          setCharOne={setCharOne}
          charTwo={charTwo}
          setCharTwo={setCharTwo}
          onCharacterChosen={handleGetStartedBtnClick}
        />
      ) : (
        <h3>Loading...</h3>
      )}
    </StyledHome>
  );
}

export default Home;
