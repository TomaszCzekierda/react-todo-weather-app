import React, { Component } from "react";
import styled from "styled-components";
import SVGInline from "react-svg-inline";
import ListItemAtom from "../../atoms/list-item-atom/list-item-atom";
import stormIcon from "./bolt-solid.svg";
import cloudsIcon from "./cloud-solid.svg";
import sunIcon from "./sun-solid.svg";
import rainIcon from "./tint-solid.svg";

class WeatherItemOrganism extends Component {
  getIcon(forecast) {
    if (forecast === "sun") {
      return sunIcon;
    }
    if (forecast === "clouds") {
      return cloudsIcon;
    }
    if (forecast === "rain") {
      return rainIcon;
    }
    if (forecast === "storm") {
      return stormIcon;
    }
    return sunIcon;
  }
  render() {
    return (
      <WeatherListItem>
        <WeatherListLabel>
          {this.props.date.toLocaleDateString()}
        </WeatherListLabel>
        <WeatherListIcon>
          <SVGInline svg={this.getIcon(this.props.forecast)} />
        </WeatherListIcon>
      </WeatherListItem>
    );
  }
}

const WeatherListItem = styled(ListItemAtom)`
  margin-bottom: 10px;
`;

const WeatherListIcon = styled.span`
  float: right;
  & svg {
    width: 40px;
    height: 40px;
  }
`;

const WeatherListLabel = styled.span`
  line-height: 40px;
  font-weight: bold;
`;

export default WeatherItemOrganism;
