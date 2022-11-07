import { StyledNav } from "./Nav.styled";
import { Burger} from "../../components";

function Nav({ open, setOpen }){
    return (
        <StyledNav open={open}>
            <Burger open={open} setOpen={setOpen}/>
            {/* <div className="logo">Wizarding Duel</div> */}
        </StyledNav>
    )
}

export default Nav;