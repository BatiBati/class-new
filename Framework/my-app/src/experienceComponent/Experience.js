import style from "../styles/experience.module.css";
import { GrayButton } from "../component/GrayButton";
import { ButtonExplain } from "@/component/ButtonsExplain";
import { ExperienceLogo } from "./ExperienceLogo";

export default function Experience() {
  return (
    <div className={style.container}>
      <GrayButton text="Experience" />
      <ButtonExplain text="Here is a quick summary of my most recent experiences:" />
      <div className={style.experience1}>
        {/* <div className={style.experience1Left}>
          <img src="/image/logo-upwork.png" />
        </div> */}
        <ExperienceLogo img="/image/logo-upwork.png" />
        <div className={style.experience1Middle}>
          <h2>Sr. Frontend Developer</h2>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
          <li>Sed quis justo ac magna.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </div>
        <div className={style.experience1Date}>Nov 2021 - Present</div>
      </div>
      <div className={style.experience1}>
        <div className={style.experience1Left}>
          <img src="/image/logo-upwork.png" />
        </div>
        <div className={style.experience1Middle}>
          <h2>Team Lead</h2>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Sed quis justo ac magna.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </div>
        <div className={style.experience1Date}>Jul 2017 - Oct 2021</div>
      </div>
      <div className={style.experience1}>
        <div className={style.experience1Left}>
          <img src="/image/logo-upwork.png" />
        </div>
        <div className={style.experience1Middle}>
          <h2>Full Stack Developer</h2>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </li>
        </div>
        <div className={style.experience1Date}>Dec 2015 - May 2017</div>
      </div>
    </div>
  );
}
