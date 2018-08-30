import React, { Component } from "react";
import styled from "styled-components";
import SVGInline from "react-svg-inline";
import sunIcon from "./sun-solid.svg";
import listIcon from "./th-list-solid.svg";

class FooterTabMolecule extends Component {
  getTabIcon(icon) {
    if (icon === "sun") {
      return <SVGInline svg={sunIcon} />;
    }
    return <SVGInline svg={listIcon} />;
  }

  render() {
    return (
      <FooterTabWrapper {...this.props}>
        <FooterTabIcon>{this.getTabIcon(this.props.icon)}</FooterTabIcon>
        <FooterTabText>{this.props.title}</FooterTabText>
      </FooterTabWrapper>
    );
  }
}

const FooterTabWrapper = styled.div`
  flex-grow: 1;
  padding: 10px;
  text-align: center;
  background: ${props => (props.selected ? "gray" : "transparent")};
`;

const FooterTabText = styled.span`
  color: white;
  font-weight: 900;
  font-size: 12px;
`;

const FooterTabIcon = styled.span`
  color: white;
  display: block;
  height: 24px;
  width: 24px;
  margin: 0px auto;
  padding-bottom: 10px;
`;

export default FooterTabMolecule;
