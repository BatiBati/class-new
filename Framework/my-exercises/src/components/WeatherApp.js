"use client";

import style from "@/styles/weather.module.css";
import { useEffect, useState } from "react";

export default function WeatherApp() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=5318e9f41f86455f93b73750252502&q=Ulaanbaatar",
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(data);

  // {data?.current.wind_mph}
  return (
    <>
      <div className={style.container}>
        <div className={style.left}>
          <div>
            <img src="./images/leftLogo.png" />
          </div>
        </div>
        <div className={style.right}>
          <div>
            <img src="./images/rightLogo.png" />
          </div>

          <div className={style.rightCont}>
            <div className={style.one}></div>
            <div className={style.two}></div>
          </div>
        </div>
      </div>
    </>
  );
}
