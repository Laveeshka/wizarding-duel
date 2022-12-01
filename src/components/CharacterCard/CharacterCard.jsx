import { StyledCharacterCard } from "./CharacterCard.styled";
import { useState } from 'react';

function CharacterCard({ char, charOne, setCharOne, charTwo, setCharTwo, onCharacterChosen, isChosen}){
    //destructure properties that we need from character object
    const {character, hogwartsHouse, image} = char;
    const [isClicked, setIsClicked] = useState(false);

    function handleCharacterClick(){
        if (!isClicked){
            if(!charOne){
                setCharOne(char);
                setIsClicked(true);
            }
            else{
                setCharTwo(char);
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
        <StyledCharacterCard house={hogwartsHouse} onClick={handleCharacterClick} isClicked={isClicked} isChosen={isChosen} charOne={charOne} charTwo={charTwo}>
            <img alt={character} src={image}></img>
            <h3>{character}</h3>
            <div>
                <h2>{hogwartsHouse[0]}</h2>
            </div>
            <span>Dueller 1</span>
        </StyledCharacterCard>
    )
}

export default CharacterCard;

