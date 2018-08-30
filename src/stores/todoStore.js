import { computed, observable } from "mobx";

class ToDoStore {
  @observable
  todos = {
    1: {
      id: 1,
      title: "Get milk!",
      date: new Date(new Date().setDate(new Date().getDate() + 4))
    },
    2: {
      id: 2,
      title: "Fix mailbox!",
      date: new Date(new Date().setDate(new Date().getDate() - 2))
    },
    3: {
      id: 3,
      title: "Call Saul",
      date: new Date(new Date().setDate(new Date().getDate())),
      completed: true
    }
  };
  @computed
  get todoList() {
    return Object.values(this.todos).sort(function(a, b) {
      return a.date < b.date;
    });
  }

  createTodo(title, deadline) {
    var id = Date.now();
    this.todos[id] = {
      id: id,
      title: title,
      date: deadline
    };
  }

  toggleCompleted(todo) {
    this.todos[todo.id].completed = !this.todos[todo.id].completed;
  }
}

var todoStore = (window.todoStore = new ToDoStore());

export default todoStore;
