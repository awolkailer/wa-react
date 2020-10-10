import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import Loader from "react-loader-spinner";
import axios from "axios";

export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState(props.defaultCity);
    
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            wind: response.data.wind.speed,
            city: response.data.name

        });

        
        setReady(true);
    }

    function search() {
        const apiKey = "8f64ba8aed726b6e04d4af5e8025ebf4";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
        }

    
    function handleSubmit(event) {
        event.preventDefault();
        search(city);

        }

    function handleCityChange(event) {
        setCity(event.target.value);
        search();
            
        }
    
    if (ready) {
    
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city..."
                                className="form-control"
                                autoFocus="on"
                            onChange={handleCityChange} />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search"
                                className="btn-btn-primary" />
                        </div>
                    </div>
                
                </form>
                <WeatherInfo data={weatherData}/>

                
            </div>
        );
    } else {
        search();
        
        return(
      <Loader
         type="Audio"
         color="limegreen"
         height={100}
         width={100}
         timeout={10000} //3 secs
 
      />
     );
        
        
    }
}