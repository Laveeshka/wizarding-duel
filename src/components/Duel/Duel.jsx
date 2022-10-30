import { Redirect } from 'react-router-dom';
import { StyledDuel } from './Duel.styled';

function Duel({ isChosen }){
    //if the user has not chosen two characters yet, redirect them to the home page
    if (!isChosen) return <Redirect to="/"/>;

    return (
        <StyledDuel>
            <h1>Duel content here</h1>
        </StyledDuel>
    )
}

export default Duel;