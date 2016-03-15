import axios from 'axios';
import * as types from '../constants/ActionTypes';

const appId = 'afe77969c0e78acb86292385684acec9';
const foreCast = '70660c6bb98637b1d4e5815d3b456840';

const openWeatherByString = (query) =>
  `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${appId}&lang=ru&units=metric`;
const openWeatherById = (id) =>
  `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${appId}&lang=ru&units=metric`;
const openWeatherByCoords = (lat, lon) =>
  `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&lang=ru&units=metric`;
const forecast = (lat, long) =>
  `https://api.forecast.io/forecast/APIKEY/${lat},${long},TIME?units=si`;


export function addCity(cityName) {
  const query = openWeatherByString(cityName);
  return {
    type: types.ADD_CITY,
    promise: axios.get(query).then(result => result.data)
  };
}

export function removeCity(id) {
  return {
    type: types.REMOVE_CITY,
    id
  };
}

export function updateCity(id) {
  const query = openWeatherById(id);
  return {
    type: types.UPDATE_CITY,
    id,
    promise: axios.get(query).then(result => result.data)
  };
}

export function addCityCoords(lat, long) {
  const query = openWeatherByCoords(lat, long);
  return {
    type: types.ADD_CITY_COORDS,
    promise: axios.get(query).then(result => result.data)
  };
}

export function forecastCity(id) {
  return {
    type: types.FORECAST_CITY
  };
}
