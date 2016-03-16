import axios from 'axios';
import * as types from '../constants/ActionTypes';

const appId = 'afe77969c0e78acb86292385684acec9';

const openWeather = (query) =>
  `http://api.openweathermap.org/data/2.5/weather?${query}&appid=${appId}&lang=ru&units=metric`;

const buildQuery = (params) => {
  let result = '';
  Object.keys(params).forEach((i) => result += `${i}=${params[i]}&`);
  return result;
};


export function addCity(q) {
  const query = openWeather(buildQuery({ q }));
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
  const query = openWeather(buildQuery({ id }));
  return {
    type: types.UPDATE_CITY,
    id,
    promise: axios.get(query).then(result => result.data)
  };
}

export function addCityCoords(lat, lon) {
  const query = openWeather(buildQuery({ lat, lon }));
  return {
    type: types.ADD_CITY_COORDS,
    promise: axios.get(query).then(result => result.data)
  };
}

