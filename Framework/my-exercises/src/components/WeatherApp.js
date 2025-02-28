"use client";

import style from "@/styles/weather.module.css";
import { useEffect, useState } from "react";

export default function WeatherApp() {
  const [data, setdata] = useState();
  const [cities, setCities] = useState();
  const [value, setValue] = useState("");
  const [selectedCityName, setSelectedCityName] = useState("Ulaanbaatar");

  const handleSearch = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=5318e9f41f86455f93b73750252502&q=${selectedCityName}`,
        { method: "GET" }
      );
      const data = await response.json();
      setdata(data);
    };
    getData();
  }, [selectedCityName]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        "https://countriesnow.space/api/v0.1/countries",
        { method: "GET" }
      );
      const cities = await data.json();
      setCities(cities);
    };
    getData();
  }, []);

  // const suggestCity = cities.filter((item, index) => {
  //   if (cities.item === value[index]) return setCities(suggestCity);
  // });

  const filteredCities = cities?.data.filter((item) =>
    item.country.includes(value)
  );

  console.log(cities);

  return (
    <div className={style.splitContainer}>
      <div className={style.container}>
        <div className={style.left}>
          <img src="./images/left.png " />
          <div className={style.searchInput}>
            <img src="./images/search.png" />
            <input onChange={handleSearch} />
          </div>
          {value.length === 0 ? (
            ""
          ) : (
            <div className={style.cities}>
              {filteredCities?.map((item, index) => {
                return (
                  <div key={index}>
                    {item.cities.map((city, cityIndex) => {
                      return (
                        <div key={cityIndex}>
                          {item.country}, {city}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}

          <div className={style.leftCenter}>
            <div className={style.dateInfo}>DATE</div>
            <div className={style.cityName}>{data?.location.name}</div>
            <div className={style.locationIcon}>
              <img src="./images/locationIcon.svg" />
            </div>

            <div className={style.weatherPic}>
              <img src="./images/sunny.png" />
            </div>
            <div className={style.temperature}>
              <div className={style.temp}> 35'C</div>
              <div className={style.bot}>Bright</div>
            </div>
            <div className={style.icons}>
              <img src="./images/home.svg" />
              <img src="./images/locationIcon.svg" />
              <img src="./images/heart.svg" />
              <img src="./images/user.svg" />
            </div>
          </div>
        </div>
        {/* <div className={style.right}>
          <img src="./images/Dark right.png " />

          <div className={style.searchInput}>
            <img src="./images/search.png" />
            <input />
          </div>
          <div className={style.leftCenter}>
            <div className={style.dateInfo}>DATE</div>
            <div className={style.cityName}>Write City Name here</div>
            <div className={style.locationIcon}>
              <img src="./images/locationIcon.svg" />
            </div>

            <div className={style.weatherPic}>
              <img src="./images/sunny.png" />
            </div>
            <div className={style.temperature}>
              <div className={style.temp}> 35'C</div>
              <div className={style.bot}>Bright</div>
            </div>
            <div className={style.icons}>
              <img src="./images/home.svg" />
              <img src="./images/locationIcon.svg" />
              <img src="./images/heart.svg" />
              <img src="./images/user.svg" />
            </div>
          </div>
        </div> */}

        <div className={style.left}>
          <img src="./images/Dark right.png " />
          <div className={style.searchInput}>
            <img src="./images/search.png" />
            <input />
          </div>
          <div className={style.leftCenter}>
            <div className={style.dateInfo}>DATE</div>
            <div className={style.cityName}>Write City Name here</div>
            <div className={style.locationIcon}>
              <img src="./images/locationIcon.svg" />
            </div>

            <div className={style.weatherPic}>
              <img src="./images/moon.png" />
            </div>
            <div className={style.temperature}>
              <div className={style.temp}> 35'C</div>
              <div className={style.bot}>Bright</div>
            </div>
            <div className={style.icons}>
              <img src="./images/home.svg" />
              <img src="./images/locationIcon.svg" />
              <img src="./images/heart.svg" />
              <img src="./images/user.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
