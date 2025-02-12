import style from "../styles/work.module.css";
import { ButtonExplain } from "../component/ButtonsExplain";
import { GrayButton } from "../component/GrayButton";
import { WorkInside } from "./WorkInside";

const arr = [
  {
    imgURl: "/image/ubCab.png",
    title: "UBCab",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    usedTechnology: ["React", "Next.js", "Typescript"],
    icon: "/image/iconButton.png",
  },
];

export default function Work() {
  return (
    <div className={style.container}>
      <GrayButton outside={"Work"} />
      <ButtonExplain text={"Some of the noteworthy projects I have built:"} />
      {arr.map((el, index) => {
        return (
          <div className={style.cont}>
            <WorkInside key={index} {...el} />
          </div>
        );
      })}
    </div>
  );
}
