import {weatherAPI} from "../api/api";

const ADD_WEATHER_DATA = "ADD-WEATHER-DATA";


let initialState = {
  weather_data: null,
  isLoaded: false
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WEATHER_DATA: {
      return {
        weather_data: action.weather,
        isLoaded: action.isLoaded
      };
    }
    default:
      return state;
  }
};
export const addWeatherAC = (weather) => ({
  type: ADD_WEATHER_DATA,
  weather,
  isLoaded: true
});

export const getWeatherByCityThunkCreator = (searchCity) => {
  return (dispatch) => {
    weatherAPI.getWeatherByCity(searchCity)
      .then(data => {
        dispatch(addWeatherAC(data.data))
      })
  }
};
export const getWeatherByCoordinateThunkCreator = (lat, lon) => {
  return (dispatch) => {
    weatherAPI.getWeatherByCoordinate(lat, lon)
      .then(data => {
        dispatch(addWeatherAC(data.data))
      })
  }
};
export default weatherReducer;
