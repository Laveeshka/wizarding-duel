import {StyledCharacterScore} from './CharacterScore.styled';
import getRandom from "../../utils/randomNumberGenerator";
import { useRef, useEffect } from 'react';

function CharacterScore({ char, spells, onAddPoints, isComplete }){
    const totalPoints = useRef(0);
    const randomIndex = useRef(0);
    const randomSpell = useRef(null);

    useEffect(() =>{
        if(isComplete){
            console.log("It is complete!");
            onAddPoints(totalPoints.current);
        }
    }, [isComplete]);

    // const randomIndex = getRandom(0, spells.length - 1);
    // const randomSpell = spells[randomIndex];
    //console.log("random spell is: ", randomSpell);

    if(!isComplete){
        randomIndex.current = getRandom(0, spells.length - 1);
        randomSpell.current = spells[randomIndex.current];
        totalPoints.current = totalPoints.current + randomSpell.current.points;
        console.log("total points for ", char.name," is ", totalPoints.current);
    }
    

    return (
        <StyledCharacterScore>
            <h3>{char.name}</h3>
            <p>Spell used: {randomSpell.current.name}</p>
            <p>Spell points: {randomSpell.current.points}</p>
            <p>Total points: {totalPoints.current}</p>
        </StyledCharacterScore>
    )
}

export default CharacterScore;