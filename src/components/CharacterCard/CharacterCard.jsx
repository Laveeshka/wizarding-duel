import { StyledCharacterCard } from "./CharacterCard.styled";
import { useState } from 'react';

function CharacterCard({ character, charOne, setCharOne, charTwo, setCharTwo, onCharacterChosen, isChosen}){
    //destructure properties that we need from character object
    const { name, house, image} = character;
    const [isClicked, setIsClicked] = useState(false);

    function handleCharacterClick(){
        if (!isChosen){
            if(!charOne){
                setCharOne(character);
                //new line
                setIsClicked(true);
            }
            else{
                setCharTwo(character);
                setIsClicked(true);
                onCharacterChosen();
            }
        } 
    }

    return (
        <StyledCharacterCard house={house} onClick={handleCharacterClick} isClicked={isClicked}>
            <img alt={name} src={image}></img>
            <h3>{name}</h3>
            <div>
                <h2>{house[0]}</h2>
            </div>
            <span>Dueller 1</span>
            {/* <button onClick={handleCharacterClick}>Choose</button> */}
        </StyledCharacterCard>
    )
}

export default CharacterCard;