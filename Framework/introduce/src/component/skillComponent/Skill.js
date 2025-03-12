import style from "../../styles/skill.module.css";
import { GrayButton } from "../GrayButton";
import { ButtonExplain } from "@/component/ButtonsExplain";

const skillArr = [
  { image: "/image/icon-javscript.svg", title: "Javascript" },
  { image: "/image/icon-typescript.svg", title: "Typescript" },
  { image: "/image/icon-react.svg", title: "React" },
  { image: "/image/icon-nextjs.svg", title: "Next.js" },
  { image: "/image/icon-nodejs.svg", title: "Node.js" },
  { image: "/image/icon-express.svg", title: "Express.js" },
  { image: "/image/icon-nest.svg", title: "Nest.js" },
  { image: "/image/icon-socket.svg", title: "Socket.io" },
  { image: "/image/icon-postgresql.svg", title: "PostgreSQL" },
  { image: "/image/icon-mongodb.svg", title: "MongoDB" },
  { image: "/image/icon-sass.svg", title: "Sass/Scss" },
  { image: "/image/icon-tailwindcss.svg", title: "Tailwindcss" },
  { image: "/image/icon-figma.svg", title: "Figma" },
  { image: "/image/icon-cypress.svg", title: "Cypress" },
  { image: "/image/icon-storybook.svg", title: "Storybook" },
  { image: "/image/icon-git.svg", title: "Git" },
];

export default function Skill() {
  return (
    <div className={style.container}>
      <div className={style.categore}>
        <GrayButton text="Skills" />
      </div>
      <ButtonExplain text="The skills, tools and technologies I am really good at:" />
      <div className={style.skillContainer}>
        {skillArr.map((element, index) => {
          return (
            <div key={index} className={style.skills}>
              <div>
                <img src={element.image} />
              </div>
              <div>{element.title} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
