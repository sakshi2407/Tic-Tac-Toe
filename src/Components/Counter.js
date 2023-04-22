import React, { useState, useEffect } from "react";

export default function Counter({ initialCount }){
    const [counter, setCounter] = useState(initialCount)
    const [even, setEven] = useState(initialCount%2==0)
    function onPlusClick(){
        setCounter(counter+1)
    }
    function onMinusClick(){
        setCounter(counter-1)
    }
    useEffect(function (){
            setEven(counter%2==0)
    }, [counter])
    // function incrementCounter(currCounter){
    //     return currCounter + 1
    // }
    // function decrementCounter(currCounter){
    //     return currCounter - 1
    // }
    return(
        <div>
            <button onClick={onMinusClick}>-</button>
            {counter}
            <button onClick={onPlusClick}>+</button>
            {even && <div>The counter is currently even</div>}
        </div>
    )
}