import React from 'react';
import { useDispatch } from 'react-redux'
import { toggleTimer, resetTimer } from '../features/timers/timersSlice';
import { formatTime } from '../utils/index.js';
import './TimerView.css';

export default function TimerView({name, time, isRunning, index, description}) {
  const dispatch = useDispatch()

  return (
    <div className='card'>
      <div className="card-container">
        <div className="card-header">
          <div className={isRunning? "img-avatar" : "img-stop"}></div>
          <div className="text-chat">{formatTime(time)}</div>
        </div>
        <div className="card-body">
          <div className="messages-container">
              <div className="message-box left">
                  <p>{name}</p>
              </div>
              <div className="message-box right">
                  <p>{description}</p>
              </div>
          </div>
          <div className="message-input">
            <button className={isRunning? "stop-button": "start-button"}
                        onClick={() => dispatch(toggleTimer(index))}>
                  {isRunning? "Stop": "Start"}
            </button>
            <button className="button-reset"
              onClick={() => dispatch(resetTimer(index))}
              >Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
