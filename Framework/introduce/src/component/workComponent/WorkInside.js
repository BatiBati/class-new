import { GrayButton } from "@/component/GrayButton";
import style from "../../styles/work.module.css";

export const WorkInside = (props) => {
  return (
    <div
      className={style.contInside}
      style={{ flexDirection: props.reverse % 2 !== 0 ? "row-reverse" : "row" }}
    >
      <div className={style.imgCont}>{<img src={props.imgURl} />}</div>
      <div className={style.right}>
        <div className={style.rightInside}>
          <h3>{props.title}</h3>
          <p style={{ width: "100%" }}>{props.text}</p>
          <div className={style.skillNames}>
            {props.usedTechnology.map((element, index) => {
              return <GrayButton key={index} text={element} />;
            })}
          </div>
          <img src="/image/iconButton.png" />
        </div>
      </div>
    </div>
  );
};
