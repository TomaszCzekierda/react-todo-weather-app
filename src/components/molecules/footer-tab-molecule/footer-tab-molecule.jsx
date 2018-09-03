import React, { Component } from "react";
import styled from "styled-components";
import SVGInline from "react-svg-inline";
import sunIcon from "./sun-solid.svg";
import listIcon from "./th-list-solid.svg";
import BadgeItem from "../../atoms/badge-atom/badge-atom";

class FooterTabMolecule extends Component {
  getTabIcon(icon) {
    if (icon === "sun") {
      return <SVGInline svg={sunIcon} />;
    }
    return <SVGInline svg={listIcon} />;
  }
  addBadge(alerts) {
    if (alerts && alerts !== "0") {
      return <FooterBadge>{alerts}</FooterBadge>;
    }
  }
  render() {
    return (
      <FooterTabWrapper {...this.props}>
        {this.addBadge(this.props.alerts)}
        <FooterTabIcon>{this.getTabIcon(this.props.icon)}</FooterTabIcon>
        <FooterTabText>{this.props.title}</FooterTabText>
      </FooterTabWrapper>
    );
  }
}

const FooterBadge = styled(BadgeItem)`
  position: absolute;
  right: 50%;
  margin-right: -40px;
`;

const FooterTabWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding: 10px;
  text-align: center;
  position: relative;
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
