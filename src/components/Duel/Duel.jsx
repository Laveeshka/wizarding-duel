import { Route, useRouteMatch, Link } from "react-router-dom";
import { useState } from 'react';
import { StyledDuel} from "./Duel.styled";
import { StyledLink } from "./Link.styled";
import { StyledSection } from "./Section.styled";
import { ChosenCharacters, RoundsContainer } from "../../components";


function Duel({ isChosen, charOne, charTwo, spells }) {
  const [isStarted, setIsStarted] = useState(false);

  //useRouteMatch returns a special object with information about the currently matched route
  const match = useRouteMatch();
  console.log(match);
  //if the user has not chosen two characters yet, redirect them to the home page
  // if (!isChosen) return <Redirect to="/" />;
  //However, using Redirect isn't user friendly; the user does not know why they are being re-directed. Instead, show a Link for re-direction

  function handleStartDuelClick(){
    setIsStarted(prevState => !prevState);
  }

  return (
    <StyledSection>
      {isChosen ? (
        <StyledDuel>
          <ChosenCharacters charOne={charOne} charTwo={charTwo} />
          { !isStarted ? <Link to={`${match.url}/start`} onClick={handleStartDuelClick}>Start Duel!</Link> : null}
          
          {/* we use the current URL from the `match` object as part of the path; this will generate a url "/duel/start" */}
          <Route path={`${match.url}/start`}>
            <RoundsContainer
              charOne={charOne}
              charTwo={charTwo}
              spells={spells}
            />
          </Route>
        </StyledDuel>
      ) : (
        <StyledLink className="redirect-link" to={"/"}>
          Choose two wizards first!
        </StyledLink>
      )}
    </StyledSection>
  );
}

export default Duel;
