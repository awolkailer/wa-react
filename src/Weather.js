import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="searc" placeholder="Enter a city..."
                            className="form-control" />
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
                    </ul>
                <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" />
                    36°C
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