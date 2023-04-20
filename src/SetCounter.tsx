import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {displayNotificationType} from "./App";
import SuperButton from "./SuperButton";

type SetCounterType = {
    setMaxCount: (newSetMaxCount: number) => void
    setStartCount: (newSetCount: number) => void
    setDisplayNotification:(newNotification:displayNotificationType)=>void
    startValue: number
    maxValue:number



}
const SetCounter = (props: SetCounterType) => {




    const [newMaxCount, setNewMaxCount] = useState<string>(String(props.maxValue))
    const [newStartValue, setNewStartValue] = useState<string>(String(props.startValue))
    const [buttonDisabled,setButtonDisabled] = useState<boolean>(true)

    // useEffect(()=>{
    //     let localStorageStartValue = localStorage.getItem("StartValue")
    //     let localStorageMaxCount = localStorage.getItem("MaxCount")
    //     if(localStorageStartValue){
    //         setNewStartValue(localStorageStartValue)
    //     }
    //     if (localStorageMaxCount){
    //         setNewMaxCount(localStorageMaxCount)
    //     }
    //
    // },[])


    let inputErrorMaxCount = false
    let inputErrorStartValue = false


    if (+newMaxCount === +newStartValue || +newMaxCount < +newStartValue) {
        inputErrorMaxCount = true;
        inputErrorStartValue = true
        props.setDisplayNotification('error')
    } else if (+newMaxCount < 0) {
        inputErrorMaxCount = true;
        props.setDisplayNotification('error')
    } else if (+newStartValue < 0) {
        inputErrorStartValue = true;
        props.setDisplayNotification('error')
    }


    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStartValue(e.target.value)
        props.setDisplayNotification('enterValue')
        setButtonDisabled(false)
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMaxCount(e.target.value)
        props.setDisplayNotification('enterValue')
        setButtonDisabled(false)

    }


    const onClickHandler = () => {
        props.setMaxCount(+newMaxCount)
        props.setStartCount(+newStartValue)
        props.setDisplayNotification('display')
        localStorage.setItem("MaxCount",newMaxCount)
        localStorage.setItem("StartValue",newStartValue)
    }


    let countButtonDisabled = inputErrorMaxCount||inputErrorStartValue || buttonDisabled ? 'disabled' : 'button';


    return (
        <div className={'count'}>
            <div className={'display'}>
                <div className={'maxValue'}>
                    <h3>max value</h3>
                    <input className={inputErrorMaxCount ? "inputError" : ""} value={newMaxCount} type={"number"}
                           onChange={onChangeMaxValue}/>
                </div>
                <div className={'startValue'}>
                    <h3>start value</h3>
                    <input className={inputErrorStartValue ? "inputError" : ""} value={newStartValue} type={"number"}
                           onChange={onChangeStartValue}/>
                </div>

            </div>


            <div className={'button-place'}>
    <span className={'span-block'}>
        <SuperButton disabled={inputErrorMaxCount || inputErrorStartValue || buttonDisabled}
                     className={countButtonDisabled}
                     onClick={onClickHandler} title="set"/>
        </span>


            </div>
        </div>
    );
};

export default SetCounter;