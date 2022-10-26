import { StyledNav } from "./Nav.styled";
import { Burger, Menu } from "../../components";

function Nav({ open, setOpen }){
    return (
        <StyledNav open={open}>
            <Burger open={open} setOpen={setOpen}/>
            <Menu open={open}/>
        </StyledNav>
    )
}

export default Nav;