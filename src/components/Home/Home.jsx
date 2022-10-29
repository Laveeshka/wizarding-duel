import { useState } from "react";
import { StyledHome } from "./Home.styled";
//import the useQuery custom hook to fetch characters data from the API
import useQuery from "../../hooks/useQuery";
//import(s) from react-router-dom
import { useHistory, Link } from "react-router-dom";
//import child components
import { CharacterContainer } from "../../components";

function Home({charOne, charTwo, isChosen, setCharOne, setCharTwo, setIsChosen}) {
  //states for character1 and character2
//   const [charOne, setCharOne] = useState(null);
//   const [charTwo, setCharTwo] = useState(null);
//   const [isChosen, setIsChosen] = useState(false);

  console.log("Character one is: ", charOne);
  console.log("Character two is: ", charTwo);
//console.log("isChosen is: ", isChosen);
  // Reset choice of characters
  // Can you compute it based on any other state or props in your component? -- YES, based on isChosen
  // If isChosen is true, show reset choice button

  //use the `useNavigate()` hook
  const history = useHistory();

  const baseCharacterUrl = "https://hp-api.herokuapp.com/api/characters";
  const { data: charactersData, isLoaded } = useQuery(baseCharacterUrl);
  //console.log(charactersData);

  function handleChosenCharacters() {
      setIsChosen(prevState => !prevState);
      console.log("isChosen is: ", isChosen);
    
  }

  //set charOne and charTwo to null
  //set isChosen to false
  function handleResetChoiceClick() {
    setCharOne(() => setCharOne(null));
    setCharTwo(() => setCharTwo(null));
    setIsChosen((prevState) => !prevState);
  }

//   function handleDuelStart() {
//     history.push("/duel");
//     console.log("Character one is: ", charOne);
//     console.log("Character two is: ", charTwo);
//   }

  return (
    <StyledHome>
      <h2>Choose two wizards to duel</h2>
      <span>Wizard One: {!charOne ? "Not yet selected!" : charOne.name} </span>
      <span>Wizard Two: {!charTwo ? "Not yet selected!" : charTwo.name} </span>
      {isChosen? (<Link to="/duel">Get Started!</Link>) : null}
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
        />
      ) : (
        <h3>Loading...</h3>
      )}
    </StyledHome>
  );
}

export default Home;
