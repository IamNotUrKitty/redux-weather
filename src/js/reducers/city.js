import * as types from '../constants/ActionTypes';
import _ from 'lodash';

const initialState = {
  cities: []
};

export function city(state = initialState, action = null) {
  console.log(action);
  let index;

  switch (action.type) {
    case types.ADD_CITY:
      return { cities: [...state.cities, action.res] };

    case types.REMOVE_CITY:
      index = _.findIndex(state.cities, { id: action.id });
      return { cities: [...state.cities.slice(0, index),
                        ...state.cities.slice(index + 1)]
      };

    case types.UPDATE_CITY:
      index = _.findIndex(state.cities, { id: action.id });
      return { cities: [...state.cities.slice(0, index),
                        action.res,
                        ...state.cities.slice(index + 1)]
      };
    case types.ADD_CITY_COORDS:
      index = _.findIndex(state.cities, {id: action.res.id});
      if(index === -1){
        return { cities: [action.res] };
      }
      return state;
    default :
      return state;
  }
}
