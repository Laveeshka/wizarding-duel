import { ThemeProvider } from "styled-components"; //wrapper component to make theme variables available to the whole component tree
import { GlobalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";
//import routing components
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import hooks
import { useState } from "react";
//import components
import { Nav, Home, Duel, History } from "./components";

//pass GlobalStyles as a component to the app so that the app has access to all global styles
//remember Switch will return the first matched path
function App() {
  const [open, setOpen] = useState(false); //initial state is false since the menu ought to be hidden on mount
  const [charOne, setCharOne] = useState(null);
  const [charTwo, setCharTwo] = useState(null);
  const [isChosen, setIsChosen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div id="app" open={open}>
        <GlobalStyles />
        <BrowserRouter>
          <Nav open={open} setOpen={setOpen} />
          <Switch>
            <Route exact path="/">
              <Home
                charOne={charOne}
                setCharOne={setCharOne}
                charTwo={charTwo}
                setCharTwo={setCharTwo}
                isChosen={isChosen}
                setIsChosen={setIsChosen}
              />
            </Route>
            <Route path="/duel">
              <Duel 
                isChosen={isChosen}
              />
            </Route>
            <Route path="/history">
              <History />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
