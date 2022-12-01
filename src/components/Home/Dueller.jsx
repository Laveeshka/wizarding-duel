import { StyledDueller } from './Dueller.styled';

function Dueller({ char }){
    return (
        <StyledDueller>
            <div className="text-italic">First dueller</div>
            <div className="dueller-name">
              {!char ? "Not yet selected!" : char.character}
            </div>
        </StyledDueller>
    )
}

export default Dueller;