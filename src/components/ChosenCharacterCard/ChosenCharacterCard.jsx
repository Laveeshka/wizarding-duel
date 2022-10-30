import { StyledChosenCharacterCard } from './ChosenCharacterCard.styled';

function ChosenCharacterCard({ char }){
    return (
        <StyledChosenCharacterCard>
            <h3>{char.name}</h3>
            <img alt={char.name} src={char.image}/>
        </StyledChosenCharacterCard>
    )
}

export default ChosenCharacterCard;