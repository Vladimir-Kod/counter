import React, {useEffect, useState} from 'react';
import './App.css';
import {displayNotificationType} from "./App";
import SuperButton from "./SuperButton";

type CounterType = {
    // count: number
    maxCount: number
    // setCount: (newCount:number)=> void
    startCount: number
    displayNotification: displayNotificationType
}

const Counter = (props:CounterType) => {
    // let startCount = props.count
    const[count, setCount]=useState<number>(props.startCount)

    useEffect(()=>{

            setCount(props.startCount)

    },[props.startCount])



    const onClickHandler =() => {

        if (count<props.maxCount){
            setCount(count+1)
        }
    }

    const onClickReset =()=>{
        setCount(props.startCount)
    }
    let countButtonDisabled = count===props.maxCount?'disabled':'button';
    let resetButtonDisabled = count===props.startCount?'disabled':'button';
    return (
        <div className={'count'}>
        <div className={'display'}>
            {props.displayNotification==='enterValue'
                ? <h3>enter value and pres "set"</h3>
                : props.displayNotification==='error'
                ? <h3 className={props.displayNotification==='error'? 'incorrectValue': ''}>incorrect value</h3>
                : <h1 className={count===props.maxCount?"redCount":''}>{count}</h1>

            }

    </div>


    <div className={'button-place'}>
    <span className={'span-block'}>
        <SuperButton disabled={count===props.maxCount || props.displayNotification==='error' || props.displayNotification==='enterValue'}
                         className={countButtonDisabled}
                         onClick={onClickHandler}
                         title="inc"
        />
        </span>
        <span className={'span-block'}>


        <SuperButton disabled={count===props.startCount || props.displayNotification==='error' || props.displayNotification==='enterValue'}
                     className={resetButtonDisabled}
                     onClick={onClickReset}
                     title="reset"
        />
        </span>

        </div>


        </div>
    );
};

export default Counter;