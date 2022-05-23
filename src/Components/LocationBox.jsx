import React from "react";

const LocationBox = (props) => {
  return (
    <div className="location-box">
      <div className="location">
        {props.weather.name}, {props.weather.sys.country}
      </div>

      <div className="date">{props.cityTime}</div>
    </div>
  );
};

export default LocationBox;
