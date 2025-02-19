
import styles from "./page.module.css";

const arr = [{
  title: "FIRST",
  description: "Text messaging, or simply texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile phones, tablet computers, smartwatches,"
},
{
  title: "SECOND",
  description: "Text messaging, or simply texting, ending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile phones, tablet computers, smartwatches,"
},
{
  title: "THIRD",
  description: "Text mesf composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile phones, tablet computers, smartwatches,"
}, {
  title: "FOURTH",
  description: "Text messaging, or simply texting, is the act oandges, typically consisting of alphabetic and numeric characters, between two or more users of mobile phones, tablet computers, smartwatches,"
},
{
  title: "FIFTH",
  description: "Text messaging, or simply texting, is the act of composing ",
}]


export default function Home() {
  return (
    <div className={styles.main} >
      {
        arr.map((el) => {
          return (<div className={styles.inside}>
            <h1>{el.title}</h1>
            <p>{el.description}</p>
          </div>)
        })
      }
    </div >
  );
}
