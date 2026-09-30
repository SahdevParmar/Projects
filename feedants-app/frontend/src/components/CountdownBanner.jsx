import { Timer } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const CountdownBanner = ({closesAt}) => {
    const targetTime=new Date(closesAt);
    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;
    const [time, setTime] = useState(targetTime-Date.now())
    const [day, setDay] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [seconds,setSeconds]= useState()
    useEffect(()=>{
        setInterval(()=>{
            const currentTime=new Date()
            let diff=Math.abs(currentTime-targetTime)
            setDay(Math.floor(diff/msInDay))
            diff%=msInDay

            setHour(Math.floor(diff/msInHour))
            diff%=msInHour

            setMinute(Math.floor(diff/msInMinute))
            diff%=msInMinute

            setSeconds(Math.floor(diff/msInSecond))
        },'1000')
    })
  return (
    day && (
    <div className='flex items-center gap-2 justify-around text-sm md:flex-col w-full '>
        <span>Registeration Closes in</span>
        <div className='flex items-center gap-2'>
            <Timer/>
            <span>{day}D</span><span> {hour}H</span><span> {minute}M</span><span> {seconds}S</span>
        </div>
    </div>)
  )
}

export default CountdownBanner