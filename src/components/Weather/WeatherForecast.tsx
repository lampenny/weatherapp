import dayjs from "dayjs";
import { WeatherForecastProps } from "./types";

import { weatherMapping } from "../utils";

const advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(advancedFormat);

export const WeatherForecast = (prop: WeatherForecastProps) => {
  const { data } = prop;

  const today = dayjs(data.dt * 1000).format("dddd");
  const todayDate = dayjs(data.dt * 1000).format("Do");

  return (
    <>
      <div className="container text-center items-center flex space-x-12 flex-row mt-10 py-7 px-7 justify-center bg-gradient-to-br from-indigo-600 to-blue-300 rounded-xl shadow max-w-lg">
        <div className="-mr-2">
          <p className="leading-tight text-zinc-50">{today}</p>
          <p className="text-2xl font-light text-zinc-50">{todayDate}</p>
        </div>

        <div className="m-30">
          <p className="semi-bold text-3xl text-white">{data.name}</p>
          {data.main ? (
            <p className="font-bold text-5xl text-white">
              {data.main.temp.toFixed()}°C
            </p>
          ) : null}
        </div>
        <div className="text-8xl -mr-100">
          {weatherMapping(data.weather[0].main)}
        </div>
      </div>
      <div className="container justify-center text-center items-center flex space-x-8 flex-row my-3">
        <div className="py-2 w-60 bg-gradient-to-br from-indigo-500 to-blue-300 rounded-full shadow">
          <p className="leading-none text-xs text-gray-100">Wind</p>
          <p className="leading-none text-xl font-bold text-gray-100">
            {data.wind ? (
              <p className="">{data.wind.speed.toFixed()} MPH</p>
            ) : null}
          </p>
        </div>
        <div className="py-2 w-60 bg-gradient-to-br from-indigo-500 to-blue-300 rounded-full shadow">
          <p className="leading-none text-xs text-gray-100">Humidity</p>
          <p className="leading-none text-xl font-bold text-gray-100">
            {data.main ? <p className="">{data.main.humidity}%</p> : null}
          </p>
        </div>
      </div>
    </>
  );
};
