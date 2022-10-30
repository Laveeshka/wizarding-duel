import {StyledCharacterScore} from './CharacterScore.styled';
import getRandom from "../../utils/randomNumberGenerator";
import { useRef, useEffect } from 'react';

function CharacterScore({ char, spells, onAddPoints, isComplete }){
    const totalPoints = useRef(0);

    const randomIndex = getRandom(0, spells.length - 1);
    const randomSpell = spells[randomIndex];
    console.log("random spell is: ", randomSpell);
    totalPoints.current = totalPoints.current + randomSpell.points;
    
    useEffect(() =>{
        if(isComplete){
            console.log("It is complete!");
            onAddPoints(totalPoints.current);
        }
    }, [isComplete]);
    

    return (
        <StyledCharacterScore>
            <h3>{char.name}</h3>
            <p>Spell used: {randomSpell.name}</p>
            <p>Spell points: {randomSpell.points}</p>
            <p>Total points: {totalPoints.current}</p>
        </StyledCharacterScore>
    )
}

export default CharacterScore;