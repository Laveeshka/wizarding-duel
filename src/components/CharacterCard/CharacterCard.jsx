import { StyledCharacterCard } from "./CharacterCard.styled";
import { useState } from 'react';

function CharacterCard({ character, charOne, setCharOne, charTwo, setCharTwo, onCharacterChosen, isChosen}){
    //destructure properties that we need from character object
    const { name, house, image} = character;
    const [isClicked, setIsClicked] = useState(false);

    function handleCharacterClick(){
        if (!isClicked){
            if(!charOne){
                setCharOne(character);
                setIsClicked(true);
            }
            else{
                setCharTwo(character);
                setIsClicked(true);
                onCharacterChosen();
            }
        } 
        //new code
        if (isClicked){
            setIsClicked(false);
            if (charTwo){
                setCharTwo(null);
                onCharacterChosen();
            }
            else {
                setCharOne(null);
            }
        }
    }

    return (
        <StyledCharacterCard house={house} onClick={handleCharacterClick} isClicked={isClicked} isChosen={isChosen} charOne={charOne} charTwo={charTwo}>
            <img alt={name} src={image}></img>
            <h3>{name}</h3>
            <div>
                <h2>{house[0]}</h2>
            </div>
            <span>Dueller 1</span>
        </StyledCharacterCard>
    )
}

export default CharacterCard;

