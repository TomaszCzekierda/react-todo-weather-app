import React, { Component } from "react";
import styled from "styled-components";
import SVGInline from "react-svg-inline";
import iconSVG from "./umbrella-solid.svg";

class LogoMolecule extends Component {
  render() {
    return (
      <div>
        <LogoText>TO</LogoText>
        <LogoIcon>
          <SVGInline svg={iconSVG} />
        </LogoIcon>
        <LogoText>DO</LogoText>
      </div>
    );
  }
}

const LogoText = styled.span`
  font-weight: bold;
  font-size: 26px;
  vertical-align: middle;
`;

const LogoIcon = styled.span`
  display: inline-block;
  height: 36px;
  width: 36px;
  vertical-align: bottom;
`;

export default LogoMolecule;
