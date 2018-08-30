import React, { Component } from "react";
import styled from "styled-components";
import ListItemAtom from "../../atoms/list-item-atom/list-item-atom";
import CheckboxMolecule from "../../molecules/checkbox-molecule/checkbox-molecule";

class TodoItemOrganism extends Component {
  completed = false;
  late = false;
  today = false;
  calculateBanner(props) {
    console.log(props.deadline);
    if (props.completed) {
      this.completed = true;
      return;
    }
    if (props.deadline.toDateString() == new Date().toDateString()) {
      this.today = true;
      return;
    }
    if (props.deadline.getTime() < new Date().getTime()) {
      this.late = true;
      return;
    }
  }

  componentWillMount() {
    this.calculateBanner(this.props);
  }

  render() {
    return (
      <ToDoListItem>
        <ToDoBanner
          completed={this.completed}
          late={this.late}
          today={this.today}
        />
        <CheckboxMolecule checked={this.props.completed} />
        <ToDoLabel>{this.props.title}</ToDoLabel>
      </ToDoListItem>
    );
  }
}

const ToDoListItem = styled(ListItemAtom)`
  display: flex;
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
`;

const ToDoLabel = styled.span`
  margin-left: 10px;
  line-height: 40px;
  display: inline-block;
`;

const ToDoBanner = styled.span`
  background: gray;
  display: inline-block;
  height: 84px;
  width: 10px;
  position: absolute;
  top: 0px;
  left: 0px;
  ${({ late }) =>
    late &&
    `
    background:red;
  `};
  ${({ today }) =>
    today &&
    `
    background:yellow;
  `};
  ${({ completed }) =>
    completed &&
    `
    background:green;
`};
`;

export default TodoItemOrganism;
