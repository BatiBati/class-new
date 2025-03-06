"use client";
import style from "@/styles/myWeather.module.css";
import { useEffect, useState } from "react";

export default function MyWeather() {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = fetch(
        "https://api.weatherapi.com/v1/forecast.json?key=5318e9f41f86455f93b73750252502&q=Ulaanbaatar",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setData(data);
    };
    getData();
  }, []);

  console.log(data?.current.wind_mph);

  return (
    <div className={style.splitContainer}>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.inputCont}>
            <div className={style.first}>
              <img src="./images/search.png" />
            </div>
            <div className={style.second}>
              <input placeholder="Search" />
            </div>
          </div>
          <div className={style.sunny}>
            <div className={style.dateCont}>
              <div>
                <div className={style.date}>September 10, 2021</div>
                <div className={style.catipal}>KRAKOW</div>
              </div>

              <div className={style.searchLogo}>
                <img src="./images/locationicon.svg" />
              </div>
            </div>
            <div className={style.sun}>
              <img src="./images/sun.svg" />
            </div>
            <div className={style.temperatureCont}>
              <div className={style.temperature}>36'</div>
              <div className={style.bright}>Bright</div>
            </div>
            <div className={style.logoCont}>
              <img src="./images/Home.svg" />
              <img src="./images/locationIcon.svg" />
              <img src="./images/Heart.svg" />
              <img src="./images/User.svg" />
            </div>
          </div>
        </div>
        <div className={style.right}></div>
        <div className={style.centerRound}>
          <div>
            <img src="./images/leftLogo.png" />
          </div>
          <div>
            <img src="./images/rightLogo.png" />
          </div>
        </div>
        <div className={style.circleOne}></div>
        <div className={style.circleTwo}></div>
        <div className={style.circleThree}></div>
      </div>
    </div>
  );
}
