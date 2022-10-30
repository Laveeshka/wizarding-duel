import { StyledChosenCharacters } from './ChosenCharacters.styled';
import { ChosenCharacterCard } from '../../components';

function ChosenCharacters({ charOne, charTwo }){
    return (
        <StyledChosenCharacters>
            <ChosenCharacterCard char={charOne}/>
            <ChosenCharacterCard char={charTwo}/>
        </StyledChosenCharacters>
    )
}

export default ChosenCharacters;