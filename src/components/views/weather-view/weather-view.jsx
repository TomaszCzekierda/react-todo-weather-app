import React, { Component } from "react";
import styled from "styled-components";
import { LoaderMolecule, SectionAtom } from "../../components-index";
import WeatherItemOrganism from "../../organisms/weather-item-organism/weather-item-organism";
import { observer } from "mobx-react";

@observer
class WeatherView extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.store.fetchWeather();
  }

  renderLoader() {
    if (this.props.store.state === "pending") {
      return (
        <SectionAtom>
          <LoaderMolecule />
        </SectionAtom>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderLoader()}
        <SectionAtom>
          {this.props.store.weather.map(function(day, index) {
            return (
              <WeatherItemOrganism
                key={index}
                date={day.date}
                forecast={day.forecast}
              />
            );
          })}
        </SectionAtom>
      </React.Fragment>
    );
  }
}

export default WeatherView;
