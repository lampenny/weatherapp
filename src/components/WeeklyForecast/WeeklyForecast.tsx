import dayjs from "dayjs";
import { futureDataProps } from "./types";
import { weatherMapping } from "../utils";

export const WeeklyForecast = ({ futureData }: futureDataProps) => {
  return (
    <div className="mb-20">
      <div className="container text-center items-center flex flex-wrap py-3 px-3 my-3 justify-center bg-gradient-to-br from-indigo-400 to-blue-200 rounded-xl shadow">
        <h1 className="text-xl font-semibold text-slate-50">Weekly forecast</h1>
      </div>

      <div className="container bg-gradient-to-br from-indigo-400 to-blue-200 p-4 rounded-xl shadow">
        {futureData.daily.map((daily) => (
          <div className="bg-white/50 rounded-xl text-base mb-1 p-1 text-center items-center text-slate-700 grid grid-cols-3 col-span-2 content-start">
            <p className="-mr-7">
              {dayjs(daily.dt * 1000).format("ddd")}{" "}
              {dayjs(daily.dt * 1000).format("Do")}{" "}
              {dayjs(daily.dt * 1000).format("MMM")}
            </p>
            <p className="text-3xl -mr-6">
              {weatherMapping(daily.weather[0].main)}
            </p>
            <p className="-ml-11 font-semibold">{daily.temp.max}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};
