import React from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';

function Weather() {
    return (
        <div>
          <div className="weather">
            <div className="search-bar">
                <input type="text" placeholder='Search' />
                <img src={search_icon} alt="Search icon" />
            </div>
          </div>
        </div>
      )
}

export default Weather;
