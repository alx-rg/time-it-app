import React from 'react';
import { useDispatch } from 'react-redux'
import { toggleTimer } from '../features/timers/timersSlice';

export default function TimerView({name, time, isRunning, index}) {
  const dispatch = useDispatch()
  console.log(name)
  return (
    <div>
      <h2>Timer Name: {name}</h2>
      <h1>Time: {time}</h1>
      <button onClick={() => dispatch(toggleTimer(index))}>
        {isRunning? "Stop": "Start"}
      </button>
    </div>
  )
}
