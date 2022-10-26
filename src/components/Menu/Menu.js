import { StyledMenu } from './Menu.styled';
import { NavLink } from 'react-router-dom';

function Menu({ open }) {
    return (
        <StyledMenu open={open}>
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink to="/duel">
                Duel
            </NavLink>
            <NavLink to="/history">
                History
            </NavLink>
            {/* <a href="/">Home</a>
            <a href="/">Duel</a>
            <a href="/">History</a> */}
        </StyledMenu>
    )
}

export default Menu;