import { StyledHome } from "./Home.styled";
import Dueller from "./Dueller";
//import the useQuery custom hook to fetch characters data from the API
import useQuery from "../../hooks/useQuery";
//import(s) from react-router-dom
import { Link } from "react-router-dom";
import { CharacterContainer } from "../../components";

function Home({
  charOne,
  charTwo,
  isChosen,
  setCharOne,
  setCharTwo,
  setIsChosen,
}) {
  //const baseCharacterUrl = "https://fedeperin-harry-potter-api-en.herokuapp.com/characters";
  const baseCharacterUrl = "characters";

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
          <Dueller char={charOne}/>
          <Dueller char={charTwo}/>
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
