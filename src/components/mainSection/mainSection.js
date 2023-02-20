import React from 'react';
import mainSectionStyles from './mainSection.module.css';
import Forecast from '../forecast/forecast';
import Highlights from '../highlights/highlights';
import TempUnit from '../tempUnit/tempUnit';

function MainSection({weatherData, tempUnit, setTempUnit}) {
  return (
    <div className={mainSectionStyles.main}>
        <TempUnit setTempUnit={setTempUnit}/>
        <Forecast weatherData={weatherData} tempUnit={tempUnit}/>
        <Highlights weatherData={weatherData}/>
    </div>
  )
}

export default MainSection;