import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ClassicalPiano from "./components/ClassicalPiano";
import Soundtracks from "./components/Soundtracks";
import { css } from "glamor";
import glamorous, { Div } from "glamorous";
import Radium from "radium";

// Actual NavLink from react-router-dom has a bug where on :hover style does not work.
const NavLink = Radium(Link);

const style = {
  NavLink: {
    display: "inline-block",
    marginLeft: 30,
    marginBottom: 20,
    color: "grey",
    textDecoration: "none",
    transition: ".2s",
    ":hover": { color: "black" },
    ":active": { color: "black" }
  }
};

class App extends Component {
  render() {
    return (
      <Div height="100vh" backgroundColor="">
        <Div fontSize={20} marginLeft={20} marginTop={20}>
          <BrowserRouter>
            <Div>
              <NavLink to="/" style={style.NavLink}>
                Kimberly Hou
              </NavLink>
              <NavLink to="/classical-piano" style={style.NavLink}>
                Piano
              </NavLink>
              <NavLink to="/film-music" style={style.NavLink}>
                Soundtracks
              </NavLink>

              <Switch>
                <Route path="/" exact component={Home} />
                <Route
                  path="/classical-piano"
                  exact
                  component={ClassicalPiano}
                />
                <Route
                  path="/film-music"
                  exact
                  component={Soundtracks}
                />
              </Switch>
            </Div>
          </BrowserRouter>
        </Div>
      </Div>
    );
  }
}

render(<App />, document.getElementById("root"));
