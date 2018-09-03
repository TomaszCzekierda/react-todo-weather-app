import React, { Component } from "react";
import { observer } from "mobx-react";
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
import weatherStore from "./stores/weatherStore";
import navigationStore from "./stores/navigationStore";

@observer
class App extends Component {
  renderView() {
    if (navigationStore.currentView === "todo-list") {
      return <TodoListView store={toDoStore} />;
    }
    if (navigationStore.currentView === "weather-list") {
      return <WeatherView store={weatherStore} />;
    }
  }
  navigateToView(view) {
    navigationStore.setView(view);
  }
  render() {
    return (
      <div className="App">
        <HeaderAtom>
          <LogoMolecule />
        </HeaderAtom>
        <BodyAtom>{this.renderView()}</BodyAtom>
        <FooterAtom>
          <FooterTabMolecule
            onClick={this.navigateToView.bind(this, "todo-list")}
            title="TODO"
            icon="list"
            alerts={toDoStore.unfinishedTodos.length}
            selected={navigationStore.currentView === "todo-list"}
          />
          <FooterTabMolecule
            onClick={this.navigateToView.bind(this, "weather-list")}
            title="WEATHER"
            icon="sun"
            selected={navigationStore.currentView === "weather-list"}
          />
        </FooterAtom>
      </div>
    );
  }
}

export default App;
