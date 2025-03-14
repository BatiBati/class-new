import Image from "next/image";
import styles from "./page.module.css";
import Timer from "@/components/Timer";
import TicTacToe from "@/components/Tic-tac-toe";
import TodoList from "@/components/TodoList";
import MyTimer from "@/components/MyTimer";
import MemoGame from "@/components/MemoGame";
import WeatherApp from "@/components/weatherApp/WeatherApp";
import MyTestedApps from "@/components/MyTestedApps";
import MyWeather from "@/components/weatherApp/MyWeather";
import { FormPage } from "@/components/RegistrationForm/FormPage";

export default function Home() {
  return (
    <>
      <FormPage />
    </>
  );
}
