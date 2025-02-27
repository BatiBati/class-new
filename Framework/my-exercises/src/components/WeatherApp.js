"use client";

import style from "@/styles/weather.module.css";
import { useEffect, useState } from "react";

export default function WeatherApp() {
  // const [cities, setCities] = useState();
  // const [myCities, setMyCities] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch(
  //       "https://countriesnow.space/api/v0.1/countries",
  //       { method: "GET" }
  //     );
  //     const cities = await response.json();

  //     for (let i = 0; i < cities.data.length; i++) {
  //       setCities(cities[i]);
  //     }
  //   };
  //   getData();
  // }, []);

  // console.log(cities);

  return (
    // <>
    //   <div className={style.container}>
    //     <div className={style.leftContainer}>
    //       <div className={style.left}>
    //         <div className={style.search}>
    //           <img src="./images/search.png"></img>
    //           <div className={style.inputCont}>
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
    //           <div className={style.date}>2025.01.01</div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className={style.right}></div>

    //     <div className={style.logo}>
    //       <img src="./images/leftLogo.png" />
    //       <img src="./images/rightLogo.png" />
    //     </div>
    //     <div className={style.round1}></div>
    //     <div className={style.round2}></div>
    //     <div className={style.round3}></div>
    //     <div className={style.round4}></div>
    //     <div className={style.round5}></div>
    //     <div className={style.leftRound}></div>
    //     <div className={style.rightRound}></div>
    //   </div>
    // </>
    //---------------------------------------------------------------------
    <>
      <div className={style.container}>
        <div className={style.first}>
          <div className={style.roundCont}>
            <div className={style.leftLogo}>
              <img src="./images/leftLogo.png/" />
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
