import { GrayButton } from "@/component/GrayButton";
import style from "../styles/work.module.css";

export const WorkInside = (props) => {
  return (
    <div className={style.contInside}>
      <div className={style.imgCont}>{<img src={props.imgURl} />}</div>
      <div className={style.right}>
        <div className={style.rightInside}>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
          <div>
            {props.usedTechnology.map((element, index) => {
              return <GrayButton key={index} text={element} />;
            })}
          </div>
          <img src={props.icon} />
        </div>
      </div>
    </div>
  );
};
