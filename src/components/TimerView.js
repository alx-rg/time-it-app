import React from 'react';
import { useDispatch } from 'react-redux'
import { toggleTimer } from '../features/timers/timersSlice';

export default function TimerView({name, time, isRunning, index}) {
  const dispatch = useDispatch()

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000)
    const minutes = Math.floor(time / 60000)
    const seconds = ((time % 60000) / 1000).toFixed(0)
    return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }
  return (
    <div>
      <h2>Timer Name: {name}</h2>
      <h1>Time: {formatTime(time)}</h1>
      <button onClick={() => dispatch(toggleTimer(index))}>
        {isRunning? "Stop": "Start"}
      </button>
    </div>
  )
}
