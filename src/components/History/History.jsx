import { StyledHistory } from "./History.styled";
import { SavedDuelCard } from "../../components";
import useQuery from "../../hooks/useQuery";

function History() {
  const { data: savedDuels, isLoaded } = useQuery(
    "http://localhost:3000/history"
  );

  return (
    <StyledHistory>
      <h2>Your saved duels</h2>
      {isLoaded
        ? savedDuels.map((savedDuel) => (
            <SavedDuelCard
              key={savedDuel.id}
              savedDuel={savedDuel}
            ></SavedDuelCard>
          ))
        : null}
    </StyledHistory>
  );
}

export default History;
