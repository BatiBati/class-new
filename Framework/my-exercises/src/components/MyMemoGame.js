"use client"
import style from "@/styles/myMemoGame.module.css"
import { News_Cycle } from "next/font/google"
import { useEffect, useState } from "react"

const cards = ["1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3", "4", "5", "6", "7", "8"]
{
    const shuffle = Math.floor(Math.random() * 10)
}
const buttons = ["Start", "Restart"]
const times = (time) => {

    const sec = time % 60;
    const min = ((time - sec) / 60) % 60;
    return `  ${min
        .toString()
        .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}


export default function MyMemoGame() {
    const [time, setTime] = useState(120);
    const [shown, setShown] = useState([])
    const [matched, setMatched] = useState([]);

    const handleShow = (index) => {
        if (shown.length === 2) return;
        if (shown.includes(index)) return;
        const newShown = [...shown];
        newShown.push(index);
        setShown(newShown);
        console.log(newShown);
    }

    useEffect(() => {
        if (shown.length !== 2) return;
        const [first, second] = shown;
        if (cards[first] === cards[second]) {
            matched.push(first);
            matched.push(second)
            setMatched([]);
        }
    }, [shown])
    return (<div className={style.container}>
        <div>{times(time)}</div>
        <div className={style.timeCont}>
            {buttons.map((el, indx) => {
                return (<button className={style.time}>{el}</button>)
            })}
        </div>
        <div className={style.memoCont}>
            {cards.map((card, index) => {
                return (<button className={style.memo} onClick={() => {
                    handleShow(index)
                }}>{shown.includes(index) ? card : ""}</button>)
            })}
        </div>
    </div>)
}