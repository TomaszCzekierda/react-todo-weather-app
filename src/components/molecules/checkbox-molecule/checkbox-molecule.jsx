import React, { Component } from "react";
import styled from "styled-components";
import SVGInline from "react-svg-inline";
import iconSVG from "./check-solid.svg";

class CheckboxMolecule extends Component {
  isChecked(checked) {
    if (checked) {
      return <SVGInline svg={iconSVG} />;
    }
  }
  render() {
    return <Box>{this.isChecked(this.props.checked)}</Box>;
  }
}

const Box = styled.span`
  border: 2px solid gray;
  width: 30px;
  height: 30px;
  display: inline-block;
  padding: 5px;
  & > span {
    color: gray;
  }
`;

export default CheckboxMolecule;
