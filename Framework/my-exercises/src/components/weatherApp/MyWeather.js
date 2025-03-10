"use client";
import style from "@/styles/myWeather.module.css";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function MyWeather() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");
  const [city, setCity] = useState([]);
  const [selectCityName, setSelectCityName] = useState("Ulaanbaatar");

  useEffect(() => {
    const getData = async () => {
      const dataResponse = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=5318e9f41f86455f93b73750252502&q=${selectCityName}`,
        { method: "GET" }
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
  }, [selectCityName]);

  const handleSearch = (event) => {
    let inputValue = event.target.value.toLowerCase();
    setValue(inputValue);
  };

  const dateFormat = () => {
    const date = new Date(data?.forecast?.forecastday?.[0]?.date || new Date());
    return format(date, "MMMM dd, yyyy");
  };

  const filteredCities = city.filter((iteem, indx) => {
    return iteem?.capital.toLowerCase().includes(value);
  });

  const onClickAndClearValue = (item) => {
    return setSelectCityName(item.capital), setValue("");
  };

  return (
    // splitContainer
    <div className="w-screen 100vw h-screen 100vh">
      {/* container */}
      <div className="flex size-full relative justify-center items-center">
        {/* left */}
        <div className="relative flex justify-center items-center w-height h-full w-1/2 bg-[#f3f4f6]">
          {/* inputCont */}
          <div className="absolute top-20 left-20 w-[400px] h-[50px] flex items-center z-10 gap-1 rounded-[48px] shadow-md bg-[#f3f4f6] overflow-hidden p-[10px]">
            {/* first */}
            <div className="w-[10%] h-full">
              {/* first img */}
              <img
                src="./images/search.png"
                alt="Search Icon"
                className="h-full w-full"
              />
            </div>
            {/* second */}
            <div className="w-[90%] h-full flex items-center text-[20px] font-medium">
              {/* second input */}
              <input
                placeholder="Search"
                onChange={handleSearch}
                className="w-full h-full p-[10px]"
              />
            </div>
          </div>
          {value.length === 0 ? (
            ""
          ) : (
            // citiesCont
            <div className="w-[400px] h-[128px] rounded-[20px] rounded-tr-none rounded-br-none p-[10px] shadow-lg bg-white z-20 flex flex-col items-center gap-[5px] overflow-auto cursor-pointer absolute top-35 left-20">
              {filteredCities.map((item, index) => {
                return (
                  // cities
                  <div
                    className="flex w-full h-fit items-center hover:bg-gray-100"
                    key={index}
                    onClick={() => {
                      onClickAndClearValue(item);
                    }}
                  >
                    <div>
                      {/* citiesImage img*/}
                      <img
                        src="./images/locationicon.svg"
                        alt="Search Icon"
                        className="w-[25px] h-[25px]"
                      />
                    </div>
                    {/* second */}
                    <div
                      div
                      className="w-[90%] h-full flex items-center text-[20px] font-medium"
                    >
                      {item.capital}, {item.name}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {/* sunny */}
          <div className="bg-white w-[50%] h-[70%] z-10 rounded-[48px] flex flex-col justify-between p-5">
            {/* dateCont */}
            <div className="w-full h-[8%] flex justify-between items-center">
              <div>
                <div>{dateFormat()}</div>
                {/* catipal */}
                <div className="text-[30px] font-[500]">
                  {data?.location?.name}
                </div>
              </div>
              <div>
                <img src="./images/locationicon.svg" />
              </div>
            </div>
            {/* sun */}
            <div className="flex justify-center">
              <img src="./images/sun.svg" />
            </div>
            {/* temperatureCont */}
            <div className="bg-amber-400 ">
              {/* temperature */}
              <div className="text-[100px] font-bold">
                {data?.current?.temp_c}
              </div>
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
        <div className={style.right}>
          <div className={style.moonCont}>
            <div className={style.dateCont}>
              <div>
                <div className={style.date} style={{ color: "white" }}>
                  {dateFormat()}
                </div>
                <div className={style.catipal} style={{ color: "white" }}>
                  {data?.location?.name}
                </div>
              </div>
              <div className={style.searchLogo}>
                <img src="./images/locationicon.svg" />
              </div>
            </div>
            <div className={style.sun}>
              <img src="./images/moon.svg" />
            </div>
            <div className={style.temperatureCont}>
              <div className={style.nightTemperature}>
                {data?.forecast?.forecastday[0]?.day?.mintemp_c}
              </div>
              <div className={style.bright}>
                {data?.forecast?.forecastday[0]?.day?.condition?.text}
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
