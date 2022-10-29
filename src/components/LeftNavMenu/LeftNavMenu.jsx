import { StyledLeftNavMenu } from './LeftNavMenu.styled';
import { NavLink } from 'react-router-dom';

function LeftNavMenu({ open }) {
    return (
        <StyledLeftNavMenu open={open}>
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink to="/duel">
                Duel
            </NavLink>
            <NavLink to="/history">
                History
            </NavLink>
        </StyledLeftNavMenu>
    )
}

export default LeftNavMenu;