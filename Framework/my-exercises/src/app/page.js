import Image from "next/image";
import styles from "./page.module.css";
import Timer from "@/components/Timer";
import TicTacToe from "@/components/Tic-tac-toe";
import TodoList from "@/components/TodoList";
import MyTimer from "@/components/MyTimer";

export default function Home() {
  return (
    <>
      <MyTimer />
    </>
  );
}
