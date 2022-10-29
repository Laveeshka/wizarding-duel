import { StyledBurger } from "./Burger.styled";
import { LeftNavMenu } from "../../components";

function Burger({ open, setOpen }) {
  function handleBurgerClick() {
    setOpen((prevState) => !prevState);
  }

  return (
    <>
      <LeftNavMenu open={open} />
      <StyledBurger open={open} onClick={handleBurgerClick}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
}

export default Burger;
