import React, { useState } from "react";
import sideBarStyles from "./sideBar.module.css";
import { Location, LocateOutline } from "react-ionicons";
import moment from "moment";
import { getWeatherImageName } from "../../utils/index";
import { useGeolocated } from "react-geolocated";
import { TEMP_UNIT } from "../../constant";
import axios from "axios";

export default function SideBar({ weatherData, setLocation, tempUnit }) {
  const date = moment(weatherData.location.localtime_epoch * 1000).format(
    "ddd, D MMM"
  );
  const [cityList, setCityList] = useState([]);
  const [city, setCity] = useState("");

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });

  const handleLocationInput = (event) => {
    setCity(event.target.value);
    const timeOutId = setTimeout(() => {
      axios
        .get(
          `http://api.weatherapi.com/v1/search.json?key=3e6d2cbe5fa64c18b21173827232701&q=${event.target.value}`
        )
        .then((response) => {
          setCityList(response.data);
        });
    }, 300);

    return () => clearTimeout(timeOutId);
  };

  const handleCurrentUserLocation = () => {
    if (isGeolocationAvailable && isGeolocationEnabled && coords) {
      setLocation(`${coords.latitude},${coords.longitude}`);
    }
  };

  const handleCitySelect = (event) => {
    const city = cityList[event.currentTarget.value];
    setCity("");
    setLocation(`${city.lat},${city.lon}`);
  };

  return (
    <div className={sideBarStyles.sidebar}>
      <div className={sideBarStyles["search-container"]}>
        <div className={sideBarStyles["search-bar-container"]}>
          <input
            type="text"
            placeholder="Search for Places"
            onChange={handleLocationInput}
            className={sideBarStyles["search-bar"]}
            value={city}
          ></input>
          {city.length > 0 && (
            <ul className={sideBarStyles["search-list"]}>
              {cityList.map((city, index) => {
                return (
                  <li key={index}>
                    <button
                      onClick={handleCitySelect}
                      className={sideBarStyles["list-button"]}
                      value={index}
                    >
                      <Location
                        color={"#FFFFFF"}
                        title={""}
                        height="19px"
                        width="14px"
                      />
                      <p>{city.name.length > 15 ? city.region : city.name}</p>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div
          className={sideBarStyles["location-icon"]}
          onClick={handleCurrentUserLocation}
        >
          <LocateOutline
            color={"#E7E7EB"}
            title=""
            height="22px"
            width="22px"
          />
        </div>
      </div>
      <img
        src={`/images/${getWeatherImageName(
          weatherData.current.condition.text
        )}.png`}
        alt="weather"
        className={sideBarStyles["weather-image"]}
      />
      <h1>
        {tempUnit === TEMP_UNIT.C
          ? Math.round(weatherData.current.temp_c)
          : Math.round(weatherData.current.temp_f)}
        <sub className={sideBarStyles.unit}>
          {tempUnit === TEMP_UNIT.C ? "\u2103" : "\u2109"}
        </sub>
      </h1>
      <p className={sideBarStyles.weatherType}>
        {weatherData.current.condition.text}
      </p>
      <div className={sideBarStyles["date-location-container"]}>
        <div className={sideBarStyles.date}>
          <p>Today</p>
          <p>.</p>
          <p>{date}</p>
        </div>
        <div className={sideBarStyles["location-container"]}>
          <Location color={"#88869D"} title={""} height="19px" width="14px" />
          <p className={sideBarStyles.location}>
            {weatherData.location.name}, {weatherData.location.country}
          </p>
        </div>
      </div>
    </div>
  );
}
