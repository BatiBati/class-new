import style from "../styles/experience.module.css";

export const ExperienceLogo = (props) => {
  return (
    <div className={style.experience1Left}>
      <img src={props.img} />
    </div>
  );
};
