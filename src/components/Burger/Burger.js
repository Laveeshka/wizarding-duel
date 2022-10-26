import { StyledBurger } from "./Burger.styled";

function Burger({ open, setOpen }) {

    function handleOpenToggle(){
        setOpen(prevState => !prevState);
    }

    return (
        <StyledBurger open={open} onClick={handleOpenToggle}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

export default Burger;