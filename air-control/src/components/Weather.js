import React from "react";
import "../Css/MainContainer.css";

class Weather extends React.Component {
  state = { weather: "", temperature: null };

  componentDidMount() {
    this.displayWeather();
  }

  

  displayWeather = () => {
    const weather = ["Sunny  ☀️", "Rainy  🌧", "Cloudy  🌫", "Snowy  ❄️"];
    const randomCondition = weather[Math.floor(Math.random() * weather.length)];
    this.setState({ weather: randomCondition });

    if (randomCondition === "Sunny  ☀️") {
      this.setState({
        temperature: Math.floor(Math.random() * (90 - 50)) + 50
      });
    } else if (randomCondition === "Rainy  🌧") {
      this.setState({
        temperature: Math.floor(Math.random() * (70 - 40)) + 40
      });
    } else if (randomCondition === "Cloudy  🌫") {
      this.setState({
        temperature: Math.floor(Math.random() * (60 - 40)) + 40
      });
    } else {
      this.setState({ temperature: Math.floor(Math.random() * (33 - 1)) + 1 });
    }

  };

  changeWeather = setInterval(this.displayWeather, 30000);

  render() {

    return (
      <div className="weather">
        <h6>Current conditions</h6>
        <p>Weather: {this.state.weather} </p>
        <p>Temperature: {this.state.temperature}°F </p>
       
      </div>
    );
  }
}

export default Weather;
