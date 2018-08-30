import React, { Component } from "react";
import { InputAtom, ButtonAtom } from "../../components-index";
import SectionAtom from "../../atoms/section-atom/section-atom";
import TodoItemOrganism from "../../organisms/todo-item-organism/todo-item-organism";
import styled from "styled-components";
import { observer } from "mobx-react";

@observer
class TodoListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoValue: "",
      toDoDate: new Date()
    };
  }

  handleToDoTitleChange(event) {
    this.setState({ todoValue: event.target.value });
  }

  createToDo(event) {
    this.props.store.createTodo(this.state.todoValue, this.state.toDoDate);
  }

  toggleCompleted(todo) {
    this.props.store.toggleCompleted(todo);
  }

  render() {
    return (
      <React.Fragment>
        <SectionAtom>
          <InputAtom
            type="text"
            placeholder="Type your todo"
            value={this.state.todoValue}
            onChange={this.handleToDoTitleChange.bind(this)}
          />
        </SectionAtom>
        <DateAndAddSection lower>
          <InputAtom
            type="date"
            placeholder="yyyy-mm-dd"
            defaultValue={this.state.toDoDate.toLocaleDateString()}
          />
          <ButtonAtom onClick={this.createToDo.bind(this)}>Add</ButtonAtom>
        </DateAndAddSection>
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

export default TodoListView;
