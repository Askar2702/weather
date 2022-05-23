import React from "react";

const WeatherBox = (props) => {
  const icon = props.weather.weather[0].icon;
  return (
    <div className="weather-box">
      <div className="temp">{Math.round(props.weather.main.temp)}°c</div>
      <div className="weather">{props.weather.weather[0].main}</div>
      <div className="weather-icon">
        <img
          style={{ width: "70px" }}
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        />
      </div>
    </div>
  );
};

export default WeatherBox;
