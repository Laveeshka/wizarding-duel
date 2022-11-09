import { StyledHistory } from "./History.styled";
import { SavedDuelCard } from "../../components";
import useQuery from "../../hooks/useQuery";

function History() {
  const { data: savedDuels, isLoaded } = useQuery(
    "https://wizarding-duel-saved-duels.herokuapp.com/history"
  );

  return (
    <StyledHistory>
      <h2>Your saved duels</h2>
      {isLoaded ? (
        <div className="saved-duels-container">
          {savedDuels.map((savedDuel) => (
            <SavedDuelCard
              key={savedDuel.id}
              savedDuel={savedDuel}
            ></SavedDuelCard>
          ))}
        </div>
      ) : null}
    </StyledHistory>
  );
}

export default History;
