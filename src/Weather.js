import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city..."
                            className="form-control"
                        autoFocus="on"/>
                        </div>
                <div className="col-3">
                <input type="submit" value="Search"
                className="btn-btn-primary" />
                    </div>
                    </div>
                
            </form>

            <h1>Las Vegas</h1>
            <ul>
                <li> Wednesday 07:00 </li>
                <li> Sunny </li>
                    </ul>
                <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny"
                            className="float-left" />
                        <div className="float-left">
                    <span className="tempearture">36
                    </span>
                    <span className="unit">°C</span>
                        </div>
                    </div>
                    </div>
                <div className="col-6">
                    <ul>
                    <li>
                        Precipitation: 25%
                    </li>
                    <li>
                        Humidty: 80%
                         </li>
                        <li>Wind: 1km/h </li>
                        </ul>
                </div>
            
                </div>
        </div>
    );
}