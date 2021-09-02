import React, {useState} from "react";


function Hooking(){
    //return Practice1();
    //return Practice2();
    return Practice3();
}

function Practice3(){

    setInterval(refresh, 1000)

    const[time, setTime] = useState();

    function refresh(){
        setTime(new Date().toLocaleTimeString());
    }

    return <div>
        <h1>{time}</h1>
    </div>
}

function Practice2(){
    const[time, setTime] = useState("TIME");

    function refresh(){
        setTime(new Date().toLocaleTimeString());
    }

    return <div>
        <h1>{time}</h1>
        <button onClick={refresh}>+</button>
    </div>
}

function Practice1(){
    const [count, setCount] = useState(0);

    function increase(){
        setCount(count + 1);
    }

    return<div>
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
    </div>
}

export default Hooking;