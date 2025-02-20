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
      <div className={styles.cards}>
        {choices.map((el, index) => {
          return (




            <div className={styles.card}></div>




          );
        })}
      </div>

    </div>
  );
}
