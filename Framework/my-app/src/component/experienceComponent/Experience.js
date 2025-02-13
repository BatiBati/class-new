import style from "../../styles/experience.module.css";
import { GrayButton } from "../GrayButton";
import { ButtonExplain } from "@/component/ButtonsExplain";
import { ExperienceLogo } from "./ExperienceLogo";

const experienceArr = [
  {
    left: "/image/logo-upwork.png",
    centerTop: "Sr.Frontend Developer",
    lists: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    right: "Nov 2021 - Present",
  },
  {
    left: "/image/logo-upwork.png",
    centerTop: "Team Lead",
    lists: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    right: "Jul 2017 - Oct 2021",
  },
  {
    left: "/image/logo-upwork.png",
    centerTop: "Full Stack Developer",
    lists: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    right: "Dec 2015 - May 2017",
  },
];

export default function Experience() {
  return (
    <div className={style.container}>
      <GrayButton text="Experience" />
      <ButtonExplain text="Here is a quick summary of my most recent experiences:" />
      {experienceArr.map((element, index) => {
        return (
          <div className={style.inside}>
            <ExperienceLogo key={index} {...element} />
          </div>
        );
      })}
    </div>
  );
}
