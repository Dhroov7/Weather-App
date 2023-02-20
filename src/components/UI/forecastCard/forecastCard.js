import React from "react";
import forecastCardStyles from "./forecastCard.module.css";
import moment from "moment";
import { getWeatherImageName } from "../../../utils/index";
import { TEMP_UNIT } from "../../../constant";

function ForecastCard({ dayData, tempUnit }) {
  const date = moment(dayData.date_epoch * 1000).format("ddd, D MMM");
  return (
    <div className={forecastCardStyles["forecast-card"]}>
      <p>{date}</p>
      <img
        src={`/images/${getWeatherImageName(dayData.day.condition.text)}.png`}
        className={forecastCardStyles["forecast-image"]}
        alt="weather"
      />
      <div className={forecastCardStyles["temp-range"]}>
        <p>
          {tempUnit === TEMP_UNIT.C ? dayData.day.maxtemp_c : dayData.day.maxtemp_f}
          {tempUnit === TEMP_UNIT.C ? "\u2103" : "\u2109"}
        </p>
        <p>
        {tempUnit === TEMP_UNIT.C ? dayData.day.mintemp_c : dayData.day.mintemp_f}
          {tempUnit === TEMP_UNIT.C ? "\u2103" : "\u2109"}
        </p>
      </div>
    </div>
  );
}

export default ForecastCard;
