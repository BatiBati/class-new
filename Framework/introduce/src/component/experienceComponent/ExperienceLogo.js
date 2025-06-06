import style from "../../styles/experience.module.css";

export const ExperienceLogo = (props) => {
  return (
    <div className={style.list}>
      <div className={style.left}>
        <img src={props.left} />
      </div>

      <div className={style.expMiddle}>
        <h2 className={style.h2}>{props.centerTop}</h2>

        {props.lists.map((el, index) => {
          return (
            <div className={style.liCont}>
              <li className={style.liColor} key={index}></li>
              <p>{el}</p>
            </div>
          );
        })}
      </div>
      <div className={style.right}>{props.right}</div>
    </div>
  );
};
