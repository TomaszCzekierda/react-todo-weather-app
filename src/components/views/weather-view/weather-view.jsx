import React, { Component } from "react";
import styled from "styled-components";
import { LoaderMolecule, SectionAtom } from "../../components-index";
import WeatherItemOrganism from "../../organisms/weather-item-organism/weather-item-organism";

class WeatherView extends Component {
  weather = [
    {
      date: new Date("2018-08-30"),
      forecast: "sun"
    },
    {
      date: new Date("2018-08-31"),
      forecast: "clouds"
    },
    {
      date: new Date("2018-09-01"),
      forecast: "rain"
    },
    {
      date: new Date("2018-09-02"),
      forecast: "rain"
    },
    {
      date: new Date("2018-09-03"),
      forecast: "storm"
    },
    {
      date: new Date("2018-09-04"),
      forecast: "sun"
    },
    {
      date: new Date("2018-09-01"),
      forecast: "clouds"
    }
  ];

  render() {
    return (
      <React.Fragment>
        <SectionAtom>
          <LoaderMolecule />
        </SectionAtom>
        <SectionAtom lower>
          {this.weather.map(function(day, index) {
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
