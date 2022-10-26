import { ThemeProvider } from "styled-components"; //wrapper component to make theme variables available to the whole component tree
import { GlobalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";
//import routing components
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import hooks
import { useState } from 'react';
//import components
import { Burger, Menu, Nav } from "./components";

//pass GlobalStyles as a component to the app so that the app has access to all global styles
function App() {
  const [open, setOpen] = useState(false); //initial state is false since the menu ought to be hidden on mount

  return (
    <ThemeProvider theme={theme}>
      <div id="app" open={open}>
        <GlobalStyles />
        <BrowserRouter>
          <Nav open={open} setOpen={setOpen}/>
          <div>
            <h1>
              Welcome to Wizarding Duel! Elves are working in the background
            </h1>
          </div>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
