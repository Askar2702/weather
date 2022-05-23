import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";
import LocationBox from "./Components/LocationBox";
import SearchBox from "./Components/SearchBox";
import WeatherBox from "./Components/WeatherBox";

function App() {
  const api = {
    key: "d0031e692a4047814d974896ce260360",
    base: "https://api.openweathermap.org/data/2.5/weather?",
  };

  const [query, setQuery] = useState("Taraz");
  const [queryCountry, setQueryCountry] = useState("KZ");
  const [weather, setWeather] = useState({});
  const [cityTime, setCityTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const search = async (evt) => {
    if (evt.key === "Enter") {
      try {
        const response = await axios.get(
          `${api.base}q=${query},${queryCountry}&units=metric&APPID=${api.key}`
        );
        console.log(response);
        setWeather(response.data);
        getTimeCity(new Date(), response.data);
        setQuery("");
        setQueryCountry("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getTimeCity = (d, data) => {
    let time = data.timezone;
    let GMTtime = dataTime(query, time / 3600);
    setCityTime(GMTtime);
  };

  const dataTime = (city = null, offset) => {
    var d = new Date();
    var uts = d.getTime() + d.getTimezoneOffset() * 60000;
    var newDate = new Date(uts + 3600000 * offset);
    setCurrentTime(newDate.getHours());
    return `${city} is ${newDate.toLocaleString()}`;
  };

  const CheckingTheTimeOfDay = () => {
    if (currentTime >= 6 && currentTime < 12) return "morningTime";
    else if (currentTime >= 12 && currentTime < 18) return "dayTime";
    else if (currentTime >= 18 && currentTime < 24) return "eveningTime";
    else return "nightTime";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${api.base}q=${query},${queryCountry}&units=metric&APPID=${api.key}`
        );
        setWeather(response.data);
        getTimeCity(new Date(), response.data);
        setQuery("");
        setQueryCountry("");
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className={`container ${CheckingTheTimeOfDay()}`}>
        {typeof weather.main != "undefined" ? (
          <div className="left__block">
            <LocationBox weather={weather} cityTime={cityTime} />
            <WeatherBox weather={weather} />
          </div>
        ) : (
          ""
        )}

        <SearchBox
          query={query}
          setQuery={setQuery}
          queryCountry={queryCountry}
          setQueryCountry={setQueryCountry}
          search={search}
        />
      </div>
    </div>
  );
}

export default App;
