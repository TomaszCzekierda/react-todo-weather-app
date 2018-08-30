import React, { Component } from "react";
import {
  HeaderAtom,
  BodyAtom,
  FooterAtom,
  LogoMolecule,
  FooterTabMolecule,
  TodoListView
} from "./components/components-index.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderAtom>
          <LogoMolecule />
        </HeaderAtom>
        <BodyAtom>
          <TodoListView />
        </BodyAtom>
        <FooterAtom>
          <FooterTabMolecule title="TODO" icon="list" selected />
          <FooterTabMolecule title="WEATHER" icon="sun" />
        </FooterAtom>
      </div>
    );
  }
}

export default App;
