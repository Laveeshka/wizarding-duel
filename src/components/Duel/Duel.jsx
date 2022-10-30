import { Redirect } from 'react-router-dom';
import { StyledDuel } from './Duel.styled';
import { ChosenCharacters } from '../../components';

function Duel({ isChosen, charOne, charTwo, spells }){
    //if the user has not chosen two characters yet, redirect them to the home page
    if (!isChosen) return <Redirect to="/"/>;

    return (
        <StyledDuel>
            <ChosenCharacters charOne={charOne} charTwo={charTwo}/>
        </StyledDuel>
    )
}

export default Duel;