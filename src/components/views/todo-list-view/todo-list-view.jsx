import React, { Component } from "react";
import { InputAtom, ButtonAtom } from "../../components-index";
import SectionAtom from "../../atoms/section-atom/section-atom";
import TodoItemOrganism from "../../organisms/todo-item-organism/todo-item-organism";
import styled from "styled-components";

class TodoListView extends Component {
  todos = [
    {
      id: 1,
      title: "Get milk!",
      date: new Date(new Date().setDate(new Date().getDate() + 4))
    },
    {
      id: 2,
      title: "Fix mailbox!",
      date: new Date(new Date().setDate(new Date().getDate() - 2))
    },
    {
      id: 3,
      title: "Call Saul",
      date: new Date(new Date().setDate(new Date().getDate())),
      completed: true
    }
  ];
  render() {
    return (
      <React.Fragment>
        <SectionAtom>
          <InputAtom type="text" placeholder="Type your todo" />
        </SectionAtom>
        <DateAndAddSection lower>
          <InputAtom type="date" placeholder="yyyy-mm-dd" />
          <ButtonAtom>Add</ButtonAtom>
        </DateAndAddSection>
        <SectionAtom lower>
          {this.todos.map(function(todo, index) {
            return (
              <TodoItemOrganism
                key={todo.id}
                title={todo.title}
                completed={todo.completed}
                deadline={todo.date}
              />
            );
          })}
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
