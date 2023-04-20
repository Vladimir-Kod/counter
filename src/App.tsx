import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter";
import SetCounter from "./SetCounter";

export type displayNotificationType = 'error'| 'enterValue'| 'display'

function App() {

    let localStorageStartValue = localStorage.getItem("StartValue")
    let localStorageMaxCount = localStorage.getItem("MaxCount")
    const startValue = localStorageStartValue? +localStorageStartValue: 0
    const maxValue = localStorageMaxCount? +localStorageMaxCount : 5






    const[startCount, setStartCount] = useState<number>(startValue)  // а ты замени ноль на проверку наличия значения из локал сораджа
    const [maxCount, setMaxCount] = useState<number>(maxValue)
    const[displayNotification, setDisplayNotification]=useState<displayNotificationType>('display')

    useEffect(()=>{
        let localStorageStartValue = localStorage.getItem("StartValue")
        let localStorageMaxCount = localStorage.getItem("MaxCount")
        if(localStorageStartValue){
            setStartCount(+localStorageStartValue)
        }
        if (localStorageMaxCount){
            setMaxCount(+localStorageMaxCount)
        }
    },[])



    // console.log(startCount)


    return (
        <div className={'App'}>
            <SetCounter setMaxCount={setMaxCount}
                        setStartCount={setStartCount}
                        setDisplayNotification={setDisplayNotification}
                        startValue={startValue}
                        maxValue={maxValue}
            />
            <Counter maxCount={maxCount} startCount={startCount} displayNotification={displayNotification}/>


        </div>
    );
}
export default App;
