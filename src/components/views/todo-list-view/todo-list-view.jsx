import React, { Component } from "react";
import { InputAtom, ButtonAtom } from "../../components-index";
import SectionAtom from "../../atoms/section-atom/section-atom";
import TodoItemOrganism from "../../organisms/todo-item-organism/todo-item-organism";
import styled from "styled-components";
import { observer } from "mobx-react";
import TodoListStore from "./todo-list-store";

@observer
class TodoListView extends Component {
  constructor(props) {
    super(props);
    this.viewStore = new TodoListStore();
  }

  createToDo(event) {
    this.props.store.createTodo(
      this.viewStore.form.title,
      new Date(this.viewStore.form.deadline)
    );
    this.viewStore.clearForm();
  }

  onChange(event) {
    this.viewStore.setFormValue(event.target.name, event.target.value);
  }

  toggleCompleted(todo) {
    this.props.store.toggleCompleted(todo);
  }

  showErrorMessages() {
    return (
      <SectionAtom lower>
        {this.viewStore.validationMessages.map((msg, index) => (
          <ValidationMessage key={index}>{msg}</ValidationMessage>
        ))}
      </SectionAtom>
    );
  }

  render() {
    return (
      <React.Fragment>
        <SectionAtom>
          <InputAtom
            type="text"
            placeholder="Type your todo"
            name="title"
            value={this.viewStore.form.title}
            isValid={this.viewStore.validate.title.isValid}
            onChange={this.onChange.bind(this)}
          />
        </SectionAtom>
        <DateAndAddSection lower>
          <InputAtom
            type="date"
            name="deadline"
            placeholder="yyyy-mm-dd"
            onChange={this.onChange.bind(this)}
            isValid={this.viewStore.validate.deadline.isValid}
            defaultValue={this.viewStore.form.deadline}
          />
          <ButtonAtom
            onClick={this.createToDo.bind(this)}
            disabled={!this.viewStore.isValid}
          >
            Add
          </ButtonAtom>
        </DateAndAddSection>
        {!this.viewStore.isValid ? this.showErrorMessages() : ""}
        <SectionAtom lower>
          {this.props.store.todoList.map(todo => (
            <div key={todo.id} onClick={this.toggleCompleted.bind(this, todo)}>
              <TodoItemOrganism
                data-id={todo.id}
                title={todo.title}
                completed={todo.completed}
                deadline={todo.date}
              />
            </div>
          ))}
        </SectionAtom>
      </React.Fragment>
    );
  }
}

const DateAndAddSection = styled(SectionAtom)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > * {
    margin: 0 5px;
  }
  & > *:first-child {
    margin-left: 0;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

const ValidationMessage = styled.p`
  color: red;
  font-size: 12px;
  text-align: center;
`;

export default TodoListView;
