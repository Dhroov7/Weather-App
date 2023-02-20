import React from 'react';
import tempUnitStyles from './tempUnit.module.css';

function TempUnit({setTempUnit}) {
  const handleUnitChangeToCelcius = () => {
    setTempUnit("C");
  }

  const handleUnitChangeToFahrenheit = () => {
    setTempUnit("F");
  }

  return (
    <div className={tempUnitStyles['temp-container']}>
        <div className={tempUnitStyles['temp-button']} onClick={handleUnitChangeToCelcius}>
            <p>&#8451;</p>
        </div>
        <div className={tempUnitStyles['temp-button']} onClick={handleUnitChangeToFahrenheit}>
            <p>&#8457;</p>
        </div>
    </div>
  )
}

export default TempUnit;