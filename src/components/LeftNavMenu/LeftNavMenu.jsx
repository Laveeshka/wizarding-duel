import { StyledLeftNavMenu } from './LeftNavMenu.styled';
import { NavLink } from 'react-router-dom';

function LeftNavMenu({ open }) {
    return (
        <StyledLeftNavMenu open={open}>
            <NavLink exact to="/" activeClassName="selected">
                Home
            </NavLink>
            <NavLink to="/duel" activeClassName="selected">
                Duel
            </NavLink>
            <NavLink to="/history" activeClassName="selected">
                History
            </NavLink>
        </StyledLeftNavMenu>
    )
}

export default LeftNavMenu;