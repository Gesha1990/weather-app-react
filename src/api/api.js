
import * as axios from "axios/index";
let apiId = '866bb374234f58496d65f3240bbc1a0d';
let units = 'metric';

const instance = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5`,
    headers: {
      'Content-Type': 'application/json'
    }
    
  });

  export const weatherAPI = {
    getWeatherByCity(searchCity) {
      try{
        return instance.get(`weather?q=${searchCity}&APPID=${apiId}&units=${units}`).then((response) => response);
      } catch (error){
        console.log(error)
      }  
    },
    getWeatherByCoordinate(lat, lon){
      try{
        return instance.get(`weather?lat=${lat}&lon=${lon}&APPID=${apiId}&units=${units}`).then((response) => response)
      }catch(error){
        console.log(error)
      }
     
    }
}
