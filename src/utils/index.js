import { SUPPORT_WEATHER_TYPES } from "../constant";

export function getWeatherImageName(userWeather) {
  for (let weather in SUPPORT_WEATHER_TYPES) {
    if (userWeather.toLowerCase().includes(weather)) {
      return SUPPORT_WEATHER_TYPES[weather];
    }
  }
  return SUPPORT_WEATHER_TYPES["sunny"];
}
