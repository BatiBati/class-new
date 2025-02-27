"use client";

import style from "@/styles/weather.module.css";
import { useEffect, useState } from "react";

export default function WeatherApp() {
  const [cities, setCities] = useState();
  const [value, setValue] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://api.weatherapi.com/v1/forecast.json?key=5318e9f41f86455f93b73750252502&q=Ulaanbaatar",
        { method: "GET" }
      );
      const cities = await response.json();
      setCities(cities);
    };
    getData();
  }, []);

  const handleSearch = (event) => {
    setValue(event.target.value);
  };

  return (
    //             {/* {isCity.map((item, index) => {
    //               return (
    //                 <input
    //                   type="search"
    //                   key={index}
    //                   onChange={() => {
    //                     handleChange(item);
    //                   }}
    //                 />
    //               );
    //             })} */}
    //           </div>
    //         </div>
    //         <div className={style.leftInsideCont}>
    //           {/* <div className={style.date}>{data?.location.localtime}</div> */}

    <>
      <div className={style.container}>
        <div className={style.first}>
          <div className={style.roundCont}>
            <div className={style.leftLogo}>
              <img src="./images/leftLogo.png/" />
            </div>
          </div>
        </div>
        <div className={style.sss}>
          <div className={style.inputCont}>
            <div className={style.inputsDiv}>
              <img src="./images/search.png" />

              <input
                className={style.inputValue}
                value={value}
                onChange={() => {
                  handleSearch();
                }}
              />
            </div>
          </div>
        </div>
        <div className={style.leftContainer}>
          <div className={style.leftWeather}>
            <div className={style.leftCont}>
              <div className={style.leftWeatherTop}>
                <div className={style.dateContain}>
                  <div className={style.date}>
                    {cities?.forecast.forecastday[0].date}
                  </div>
                  <div className={style.locationName}>
                    <h1>{cities?.location.name}</h1>
                  </div>
                </div>
                <div className={style.locationSVG}>
                  <img src="./images/locationIcon.svg" />
                </div>
                <div className={style.sunny}>
                  <img src="./images/sunny.png" />
                </div>
              </div>
              <div className={style.leftWeatherBot}>
                <h1>BOT</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={style.second}>
          <div className={style.secondRoundCont}></div>
          <div className={style.thirdRound}></div>
          <div className={style.thirdfourth}></div>
          <div className={style.fifth}></div>
          <div className={style.sixth}></div>
          <div className={style.rightLogo}>
            <img src="./images/rightLogo.png" />
          </div>

          <div className={style.ii}>
            <div className={style.leftRound}></div>

            <div className={style.aa}>
              <div className={style.rightRound}></div>

              <div className={style.halfRoundCont}>
                <div className={style.halfRoundCont11}>
                  <div className={style.halfRoundCont1}></div>
                </div>
                <div className={style.halfRoundCont22}>
                  <div className={style.halfRoundCont2}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
