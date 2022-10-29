
import { StyledCharacterCard } from "./CharacterCard.styled";
import witchImg from "./../../images/witch_placeholder_img.svg";
import wizardImg from "./../../images/wizard_placeholder_img.svg";

function CharacterCard({ character, charOne, setCharOne, charTwo, setCharTwo, onCharacterChosen }){
    //destructure properties that we need from character object
    const { name, house, image, gender } = character;
    //let source;

    // if (image === ""){
    //     if(gender === "female"){
    //         source = witchImg;
    //     }
    //     else {
    //         source = wizardImg;
    //     }
    // }
    // else {
    //     source = image;
    // }
    
    function handleCharacterClick(){
        if(!charOne){
            //console.log("I am falsey hee");
            setCharOne(character);
        }
        else{
            setCharTwo(character);
            onCharacterChosen();
        }
        
        //onsole.log("Character one is: ", charOne);
        //console.log("Character two is: ", charTwo);
    }

    return (
        <StyledCharacterCard>
            <img alt={name} src={image}></img>
            <h3>{name}</h3>
            <p>{house}</p>
            <button onClick={handleCharacterClick}>Choose</button>
        </StyledCharacterCard>
    )
}

export default CharacterCard;