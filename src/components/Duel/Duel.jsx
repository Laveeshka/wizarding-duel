import { Redirect, Route, useRouteMatch, Link } from "react-router-dom";
import { StyledDuel } from "./Duel.styled";
import { ChosenCharacters, RoundsContainer } from "../../components";

function Duel({ isChosen, charOne, charTwo, spells }) {
  //useRouteMatch returns a special object with information about the currently matched route
  const match = useRouteMatch();
  console.log(match);
  //if the user has not chosen two characters yet, redirect them to the home page
  if (!isChosen) return <Redirect to="/" />;

  return (
    <StyledDuel>
      <ChosenCharacters charOne={charOne} charTwo={charTwo} />
      <Link to={"/duel/start"}>Start Duel!</Link>
      {/* we use the current URL from the `match` object as part of the path; this will generate a url "/duel/start" */}
      <Route path={`${match.url}/start`}>
        <RoundsContainer charOne={charOne} charTwo={charTwo} spells={spells}/>
      </Route>
    </StyledDuel>
  );
}

export default Duel;
