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

    if(!isComplete){
        randomIndex.current = getRandom(0, spells.length - 1);
        randomSpell.current = spells[randomIndex.current];
        totalPoints.current = totalPoints.current + randomSpell.current.points;
        console.log("total points for ", char.character," is ", totalPoints.current);
    }
    

    return (
        <StyledCharacterScore>
            <div className="total-points-container">
                <div>{totalPoints.current}</div>
            </div>
            <div className="spell-container">
            <p>Used {randomSpell.current.spell.toUpperCase()}</p>
            <p>Gained {randomSpell.current.points} points</p>
            </div>
            
        </StyledCharacterScore>
    )
}

export default CharacterScore;