import { useState } from "react";
import axios from "axios";
import { initialValues, futureInitialValues } from "../initialValues";

import { WeatherForecast } from "../components/Weather/WeatherForecast";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { WeeklyForecast } from "../components/WeeklyForecast/WeeklyForecast";
import { Map } from "../components/Map/Map";

const API_KEY = process.env.REACT_APP_API;

const Home = () => {
  const [data, setData] = useState<typeof initialValues>(initialValues); // today's weather
  const [futureData, setFutureData] =
    useState<typeof futureInitialValues>(futureInitialValues); // future weather forecast
  const [location, setLocation] = useState("");

  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
  const futureUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly&units=metric&appid=${API_KEY}`;

  const searchLocation = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      axios
        .get(currentUrl)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => console.log(err));

      axios
        .get(futureUrl)
        .then((response) => {
          setFutureData(response.data);
        })
        .catch((err) => console.log(err));

      setLocation("");
    }
  };

  return (
    <div className="self-center container">
      <h1
        data-testid="title"
        className="font-extrabold m-3 text-center p-10 text-4xl text-indigo-500"
      >
        Daily Weather
      </h1>
      <SearchBar
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
      />

      {!!data.base && (
        <div className="container max-w-fit">
          <WeatherForecast data={data} />
          <Map center={[data.coord.lat, data.coord.lon]} zoom={13} />
          <WeeklyForecast futureData={futureData} />
        </div>
      )}
    </div>
  );
};

export default Home;
