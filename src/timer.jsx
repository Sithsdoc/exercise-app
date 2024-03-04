import {useState, useEffect, useCallBack} from "react";

export default function StopWatch(){
    let [timer, setTimer] = useState(0);
    let [curTime, setCurTime] = useState(0);
    let [running, setRunning] = useState(true);

    useEffect(() =>{
        let newTimer = setInterval(() =>setCurTime(prev=>prev+1), 1000)
        setTimer(newTimer)
        return () => clearInterval(newTimer)
    }, []
    )
    let click = useCallBack(()=>{
        console.log("CLick " + running);
        if (running) {
            console.log("clearing time");
            clearInterval(timer)
            setRunning(false)
        } else {
            console.log("staring time");
            setRunning(true)
            let timer = setInterval(()=>setCurTime(prev=>prev+1), 1000)
            setTimer(timer)
        }
    }, [running, timer]
    )
    return <p>{curTime}<button onClick={click}>{running ? "stop" : "start"}</button></p>
}