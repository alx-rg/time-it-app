import React from 'react';
import { useDispatch } from 'react-redux'
import { toggleTimer } from '../features/timers/timersSlice';

export default function TimerView({name, time, isRunning}) {
  const dispatch = useDispatch()
  console.log(name, time, isRunning)
  return (
    <div>
      <h2>Timer Name: {name}</h2>
      <h1>Time: {time}</h1>
      <button
          onClick={() => dispatch(toggleTimer(isRunning))}
        >Start</button>
    </div>
  )
}
