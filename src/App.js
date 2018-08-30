import React, { Component } from "react";
import {
  HeaderAtom,
  BodyAtom,
  FooterAtom,
  LogoMolecule,
  FooterTabMolecule,
  TodoListView,
  WeatherView
} from "./components/components-index.jsx";

import toDoStore from "./stores/todoStore";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderAtom>
          <LogoMolecule />
        </HeaderAtom>
        <BodyAtom>
          <TodoListView store={toDoStore} />
        </BodyAtom>
        <FooterAtom>
          <FooterTabMolecule title="TODO" icon="list" alerts="2" selected />
          <FooterTabMolecule title="WEATHER" icon="sun" />
        </FooterAtom>
      </div>
    );
  }
}

export default App;
