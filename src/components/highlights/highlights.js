import React from "react";
import highlightsStyles from "./highlights.module.css";
import HighlightCard from "../UI/highlightCard/highlightCard";

function Highlights({weatherData}) {
  return (
    <div className={highlightsStyles.highlights}>
      <h1 className={highlightsStyles.heading}>Today's Highlights</h1>
      <div className={highlightsStyles["highlights-grid"]}>
        <HighlightCard>
          <p>Wind Status</p>
          <h1>{weatherData.current.wind_mph} mph</h1>
          <p>WSW</p>
        </HighlightCard>
        <HighlightCard>
          <p>Humidity</p>
          <h1>{weatherData.current.humidity}%</h1>
          <div>
            <div className={highlightsStyles["humidity-bar-number-label"]}>
              <p>0</p>
              <p>50</p>
              <p>100</p>
            </div>
            <div className={highlightsStyles["humidity-bar"]}>
              <div className={highlightsStyles["humidity-bar-fill"]} style={{width: `${weatherData.current.humidity}%`}}></div>
            </div>
            <p className={highlightsStyles["humidity-bar-unit-label"]}>%</p>
          </div>
        </HighlightCard>
        <HighlightCard>
          <p>Visibility</p>
          <h1>{weatherData.current.vis_miles} miles</h1>
        </HighlightCard>
        <HighlightCard>
          <p>Air Pressure</p>
          <h1>{weatherData.current.pressure_mb} mb</h1>
        </HighlightCard>
      </div>
    </div>
  );
}

export default Highlights;
