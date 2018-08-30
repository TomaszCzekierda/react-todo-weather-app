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

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderAtom>
          <LogoMolecule />
        </HeaderAtom>
        <BodyAtom>
          <WeatherView />
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
