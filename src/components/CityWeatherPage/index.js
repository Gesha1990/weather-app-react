import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getWeatherByCityThunkCreator,
  getWeatherByCoordinateThunkCreator,
} from "../../redux/weatherReducer";
import Loader from "../../Common/Loader.jsx";
import { withRouter, NavLink } from "react-router-dom";

import capitals from "../../capitals/capitals";

//Styles
import "./style.scss";
import defaultBackgroungImage from "../../assets/img/default.jpg";
import storm from "../../assets/img/storm.jpg";
import snow from "../../assets/img/snow.jpg";
import rain from "../../assets/img/rain.jpg";
import clear from "../../assets/img/clear.jpg";
import cloudy from "../../assets/img/cloudy.jpg";
import home from "../../assets/img/home.svg";

function CityWeatherPage({
  weather_data,
  isLoaded,
  getWeatherByCityThunkCreator,
  getWeatherByCoordinateThunkCreator,
  history,
  match
}) {
  const [backgroundImage, setBackgroundImage] = useState(
    defaultBackgroungImage
  );
  useEffect(() => {
    getWeatherByCityThunkCreator(match.params.city)
    console.log(weather_data)
  }, []);

  useEffect(() => {
    if (isLoaded) {
      switch (weather_data.weather[0].main) {
        case "Clouds":
          setBackgroundImage(cloudy);
          break;
        case "Thunderstorm":
          setBackgroundImage(storm);
          break;
        case "Drizzle":
        case "Rain":
          setBackgroundImage(rain);
          break;
        case "Clear":
          setBackgroundImage(clear);
          break;
        case "Snow":
          setBackgroundImage(snow);
          break;
        default:
          break;
      }
    }
  }, [weather_data]);

  return (
    <div className="weather-app">
      {!isLoaded ? (
        <Loader />
      ) : (
        <>
          <img
            className={"weather-app__background-img"}
            src={backgroundImage}
            alt="background"
          />
          <NavLink to="/" className="weather-app__home-page" ><img  src={home} alt="home" /></NavLink> 
          <div className="weather-app__container">
            <div className="weather-app__container-description">
              <h1 className="weather-app__container-description-city">
                {weather_data.name}
              </h1>
              <div className="weather-app__container-main">
                <div className="temperature">
                  {`${weather_data.main.temp} ${"\u00b0"}`}
                  {}C
                </div>

                <div className="weather-app__container-main-description">
                  <div>{weather_data.weather[0].description}</div>
                  <img
                    src={`http://openweathermap.org/img/wn/${weather_data.weather[0].icon}.png`}
                    id="documentIconImg"
                  />
                </div>
              </div>
              <div>{`Winds at: ${weather_data.wind.speed}  m/s`}</div>
              <div>{`Humidity levels at: ${weather_data.main.humidity} %`}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    weather_data: state.weatherPage.weather_data,
    isLoaded: state.weatherPage.isLoaded,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    getWeatherByCityThunkCreator,
    getWeatherByCoordinateThunkCreator,
  })(CityWeatherPage)
);
