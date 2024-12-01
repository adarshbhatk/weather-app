import React, { useEffect } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

function Weather() {


    const search = async (city) => {
      try {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
      } catch (error) {
        console.log("Error fetching weather data: ", error);
      }
    }

    useEffect(() => {
      search("Bengaluru")
    }, []);

    return (
        <div className="weather">
          <div className="search-bar">
            <input type="text" placeholder='Search' />
            <img src={search_icon} alt="Search icon" />
          </div>
          <img src={clear_icon} alt=" Weather icon" className='weather-icon' />
          <p className='temperature'>22°C</p>
          <p className='location'>Bengaluru</p>
          <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} alt="Humidity icon" />
                <div>
                    <p>80%</p>
                    <span>Humidity</span>
                    </div>
            </div>
            <div className="col">
                <img src={wind_icon} alt="Wind icon" />
                <div>
                    <p>3.5 km/h</p>
                    <span>Wind Speed</span>
                    </div>
            </div>
          </div>
        </div>
      );
}

export default Weather;
