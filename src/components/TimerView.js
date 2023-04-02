import React from 'react';
import { useDispatch } from 'react-redux'
import { toggleTimer, resetTimer } from '../features/timers/timersSlice';
import { formatTime } from '../utils/index.js';
import './TimerView.css';

export default function TimerView({name, time, isRunning, index}) {
  const dispatch = useDispatch()

  return (
    <div className='TimerView'>
      <h2>{name}</h2>
      <h1>{formatTime(time)}</h1>
      <button className={isRunning? "stop-button": "start-button"}
              onClick={() => dispatch(toggleTimer(index))}>
        {isRunning? "Stop": "Start"}
      </button>
      <button className="reset-button"
      onClick={() => dispatch(resetTimer(index))}
      >
       Reset
      </button>

    </div>
  )
}
