import styles from "./page.module.css";

const choices = [
  {
    text: "",
    state: false,
  },
  {
    text: "",
    state: false,
  },
  {
    text: "",
    state: false,
  },
  {
    text: "",
    state: false,
  },
  {
    text: "",
    state: false,
  },
  {
    text: "",
    state: false,
  },
  {
    text: "",
    state: false,
  },
  {
    text: "",
    state: false,
  },
  {
    text: "",
    state: false,
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      {choices.map(() => {
        return (
          <div className={styles.cardCont}>
            <div className={styles.cards}></div>
          </div>
        );
      })}
    </div>
  );
}
