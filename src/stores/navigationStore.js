import { computed, observable, action } from "mobx";
import createBrowserHistory from "history/createBrowserHistory";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";

const browserHistory = createBrowserHistory();

class NavigationStore {
  constructor() {
    this.routing = new RouterStore();
    syncHistoryWithStore(browserHistory, this.routing);
    if (this.routing.location.pathname === "/") {
      this.routing.push("/todo-list");
    }
  }

  @action.bound
  setView(view) {
    this.routing.push("/" + view);
    this.currentView = view;
  }

  isRouteActive(route) {
    return this.routing.location.pathname.indexOf(route) !== -1;
  }
}

var navigationStore = new NavigationStore();

export default navigationStore;
