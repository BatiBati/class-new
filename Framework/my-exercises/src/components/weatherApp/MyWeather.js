"use client";
import style from "@/styles/myWeather.module.css";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function MyWeather() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");
  const [city, setCity] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dataResponse = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=5318e9f41f86455f93b73750252502&q=Washington`,
        {
          method: "GET",
        }
      );
      const data = await dataResponse.json();
      setData(data);
      const cityResponse = await fetch(
        `https://countriesnow.space/api/v0.1/countries/capital`,
        { method: "GET" }
      );
      const cityData = await cityResponse.json();
      setCity(cityData.data);
    };
    getData();
  }, []);

  const handleSearch = (event) => {
    setValue(event.target.value);
  };

  const dateFormat = () => {
    const date = new Date(data?.forecast?.forecastday?.[0]?.date || new Date());
    return format(date, "MMMM dd, yyyy");
  };

  console.log(city[19]?.name, city[19]?.capital);
  console.log(data);

  return (
    <div className={style.splitContainer}>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.inputCont}>
            <div className={style.first}>
              <img src="./images/search.png" alt="Search Icon" />
            </div>
            <div className={style.second}>
              <input placeholder="Search" onChange={handleSearch} />
            </div>
          </div>
          {value.length === 0 ? (
            ""
          ) : (
            <div className={style.citiesCont}>
              {city.map((item, index) => {
                return (
                  <div className={style.cities}>
                    <div className={style.citiesImage}>
                      <img src="./images/locationicon.svg" alt="Search Icon" />
                    </div>
                    <div className={style.second}>
                      {item.capital}, {item.name}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div className={style.sunny}>
            <div className={style.dateCont}>
              <div>
                <div className={style.date}>{dateFormat()}</div>
                <div className={style.catipal}>{data?.location?.name}</div>
              </div>

              <div className={style.searchLogo}>
                <img src="./images/locationicon.svg" />
              </div>
            </div>
            <div className={style.sun}>
              <img src="./images/sun.svg" />
            </div>
            <div className={style.temperatureCont}>
              <div className={style.temperature}>{data?.current?.temp_c}</div>
              <div className={style.bright}>
                {data?.current?.condition?.text}
              </div>
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
