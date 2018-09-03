import { observable, action } from "mobx";

class WeatherStore {
  @observable
  weather = [];
  @observable
  status = "";

  @action
  fetchWeather() {
    this.status = "pending";
    fetch("http://localhost:3000/api/weather")
      .then(function(response) {
        return response.json();
      })
      .then(this.fetchWeatherSuccess, this.handleError);
  }

  @action.bound
  fetchWeatherSuccess(payload) {
    this.state = "success";
    payload.map(function(day, index) {
      day.date = new Date(day.date);
    });
    this.weather = payload;
  }

  @action.bound
  handleError(error) {
    this.state = "error";
  }
}

export default new WeatherStore();
