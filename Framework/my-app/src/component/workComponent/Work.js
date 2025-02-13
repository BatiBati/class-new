import style from "../../styles/work.module.css";
import { ButtonExplain } from "../ButtonsExplain";
import { GrayButton } from "../GrayButton";
import { WorkInside } from "./WorkInside";

const arr = [
  {
    imgURl: "/image/ubCab.png",
    title: "UBCab",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    usedTechnology: [
      "React",
      "Next.js",
      "Typescript",
      " Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    imgURl: "/image/Mentorhub.png",
    title: "Mentorhub ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    usedTechnology: [
      "React",
      "Next.js",
      "Typescript",
      " Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    imgURl: "/image/iToim.png",
    title: "iToim",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    usedTechnology: [
      "React",
      "Next.js",
      "Typescript",
      " Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    imgURl: "/image/ubCab.png",
    title: "UBCab",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    usedTechnology: [
      "React",
      "Next.js",
      "Typescript",
      " Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
];

export default function Work() {
  return (
    <div className={style.container}>
      <div className={style.categore}>
        <GrayButton text={"Work"} />
      </div>
      <ButtonExplain text={"Some of the noteworthy projects I have built:"} />
      {arr.map((el, index) => {
        return (
          <div className={style.cont}>
            <WorkInside key={index} {...el} reverse={index} />
          </div>
        );
      })}

      <div className={style.contactInfo}>
        <GrayButton text={"Get in touch"} />
        <p>
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
        <div className={style.information}>
          <img src="/image/mailIcon.png" />
          <h1>tom@pinecone.mn</h1>
          <img src="/image/copyIcon.png" />
        </div>
        <div className={style.information}>
          <img src="/image/phoneIcon.png" />
          <h1>+976 12345678</h1>
          <img src="/image/copyIcon.png" />
        </div>
        <h5>You may also find me on these platforms!</h5>
        <img src="/image/Links.png" />
      </div>
      <div className={style.footer}>
        <img src="/image/footerIcon.png" />
        2024 | Greetings with ❤️️ from Ulaanbaatar
      </div>
    </div>
  );
}
