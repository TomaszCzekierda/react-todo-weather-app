import { observable, action, computed } from "mobx";

class Todo {
  constructor() {
    this.title = "";
    (this.deadline = new Date()), (this.completed = false);
  }
}

class ToDoListStore {
  constructor() {
    this.createToDoForm;
  }

  constructForm() {
    return {
      title: "",
      deadline: new Date().toLocaleDateString()
    };
  }

  @observable
  form = this.constructForm();

  @action.bound
  clearForm() {
    this.form = this.constructForm();
  }

  getValidationMessages() {
    var msgs = [];
    if (!this.validate.title.isValid) {
      msgs.push(this.validate.title.message);
    }
    if (!this.validate.deadline.isValid) {
      msgs.push(this.validate.deadline.message);
    }
    return msgs;
  }

  @action.bound
  setFormValue(field, value) {
    this.form[field] = value;
  }

  @computed
  get validate() {
    var validationResult = {
      title: {
        isValid: true
      },
      deadline: {
        isValid: true
      }
    };
    if (this.form.title.toLocaleLowerCase().indexOf("php") !== -1) {
      validationResult.title.isValid = false;
      validationResult.title.message = "Don't touch php!";
    }
    if (
      new Date().getTime() - 1000 * 60 * 60 * 24 >
      new Date(this.form.deadline).getTime()
    ) {
      validationResult.deadline.isValid = false;
      validationResult.deadline.message = "Can't plan for the past!";
    }
    return validationResult;
  }

  @computed
  get validationMessages() {
    return this.getValidationMessages();
  }

  @computed
  get isValid() {
    return this.getValidationMessages().length === 0;
  }
}

export default ToDoListStore;
