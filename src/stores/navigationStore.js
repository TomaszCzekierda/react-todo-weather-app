import { computed, observable } from "mobx";

class NavigationStore {
  @observable
  currentView = "todo-list";

  setView(view) {
    this.currentView = view;
  }
}

var navigationStore = new NavigationStore();

export default navigationStore;
