import React from "react";
import "./Weather.css";

function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Monday December 21",
    time: "16:25",
    imgUrl: "http://openweathermap.org/img/wn/04n@2x.png",
    description: "Cloudy",
    realFeel: 15,
    imgMain: "./Tree_swing.svg",
    sentance: "How about a nice cup of coco?",
    humidity: 80,
    wind: 5,
    sunriseTime: "8:06",
    sunsetTime: "16:45"
  };

  return (
    <div className="Weather">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h1 className="title city">{weatherData.city}</h1>
              <div className="date-time">
                <p className="last-uptdate">Last updated</p>
                <p className="current-date">{weatherData.date}</p>
                <p className="time">{weatherData.time}</p>
              </div>
              <div className="current-temp">
                <span className="now-temp">{weatherData.temperature}</span>
                °C
              </div>
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="main-icon"
              />
              <div className="weather-description">
                {weatherData.description}
              </div>
              <div className="real-feel-text">
                Real feel
                <br />
                <span className="real-feel-temp">{weatherData.realFeel}</span>
                <span className="celsius">°C</span>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <button type="button" className="btn btn-primary btn-units">
                  <a href="/" className="active metric">
                    Metric
                  </a>
                  <span className="spacing"> | </span>
                  <a href="/" className="imperial">
                    Imperial
                  </a>
                </button>
              </div>
              <img
                src={weatherData.imgMain}
                alt="Scenary"
                className="illustration"
              />
              <p className="sentence">
                <em>{weatherData.sentance}</em>
              </p>
            </div>

            <div className="col">
              <form className="search-form">
                <div className="row search-bar">
                  <div className="col">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control city-search"
                        placeholder="City"
                        autoComplete="off"
                        autoFocus="on"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-primary btn-search"
                        value="Search"
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div className="row indications">
                <div className="col-6 humidity">Humidity</div>
                <div className="col-6 emoji">
                  <span role="img" aria-label="emoji drop">
                    💧
                  </span>
                  <span>{weatherData.humidity}</span>%
                </div>
                <div className="col-6 wind">Wind</div>
                <div className="col-6 emoji">
                  <span role="img" aria-label="emoji wind">
                    💨
                  </span>
                  <span>{weatherData.wind}</span>
                  Km/h
                </div>
                <div className="col-6 sunrise">Sunrise</div>
                <div className="col-6 emoji">
                  <span role="img" aria-label="emoji sunrise">
                    🌄
                  </span>
                  <span>{weatherData.sunriseTime}</span>
                </div>
                <div className="col-6 sunset">Sunset</div>
                <div className="col-6 emoji">
                  <span role="img" aria-label="emoji sunset">
                    🌇
                  </span>
                  <span>{weatherData.sunsetTime}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row forecast">
            <div className="col">Forecast</div>
            <div className="col">Forecast</div>
            <div className="col">Forecast</div>
            <div className="col">Forecast</div>
            <div className="col">Forecast</div>
            <div className="col">Forecast</div>
          </div>
        </div>
      </div>
      <div class="code-by">
        <a href="/" class="open-source-link" target="_blank">
          Open-source code
        </a>{" "}
        by{" "}
        <a href="https://www.linkedin.com/in/charlotte-gachoud-5210811b9/" target="_blank" rel="noreferrer">
          Charlotte Gachoud
        </a>
      </div>
    </div>
  );
}
export default Weather;