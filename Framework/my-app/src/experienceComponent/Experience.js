import style from "../styles/experience.module.css";
import { GrayButton } from "../component/GrayButton";
import { ButtonExplain } from "@/component/ButtonsExplain";
import { ExperienceLogo } from "./ExperienceLogo";

const experienceArr = [
  {
    left: "/image/logo-upwork.png",
    centerTop: "Sr.Frontend Developer",
    centerTBot: "Sr.Frontend Developer",
    right: "Nov 2021 - Present",
  },
  {
    left: "/image/logo-upwork.png",
    centerTop: "Team Lead",
    centerTBot: "Sr.Frontend Developer",
    right: "Jul 2017 - Oct 2021",
  },
  {
    left: "/image/logo-upwork.png",
    centerTop: "Full Stack Developer",
    centerTBot: "Sr.Frontend Developer",
    right: "Dec 2015 - May 2017",
  },

  // {
  //   logo: "/image/logo-upwork.png",
  //   text: "Sr.Frontend Developer",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   date: "Nov 2021 - Present",
  // },
  // {
  //   logo: "/image/logo-upwork.png",
  //   text: "Team Lead",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   date: "Jul 2017 - Oct 2021",
  // },
  // {
  //   logo: "/image/logo-upwork.png",
  //   text: "Full Stack Developer",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   date: "Dec 2015 - May 2017",
  // },
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
