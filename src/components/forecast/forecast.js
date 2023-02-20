import React from 'react';
import forecastStyles from './forecast.module.css';
import ForecastCard from '../UI/forecastCard/forecastCard';

function Forecast({weatherData, tempUnit}) {
  return (
    <div className={forecastStyles.forecast}>
      {
        weatherData.forecast.forecastday.map((dayData, index) => {
          if (index !== 0) {
            return <ForecastCard key={dayData.date_epoch} dayData = {dayData} tempUnit={tempUnit}/>
          }
        })
      }
    </div>
  )
}

export default Forecast;