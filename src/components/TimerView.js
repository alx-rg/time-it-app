import React from 'react';
import { useDispatch } from 'react-redux'
import { toggleTimer, resetTimer } from '../features/timers/timersSlice';
import { formatTime } from '../utils/index.js';
import './TimerView.css';

export default function TimerView({name, time, isRunning, index, description}) {
  const dispatch = useDispatch()

  return (



    <div className='card'>



        <div class="card-container">
  <div class="card-header">
    <div class="img-avatar"></div>
    <div class="text-chat">{formatTime(time)}</div>
  </div>
  <div class="card-body">
    <div class="messages-container">
        <div class="message-box left">
            <p>{name}</p>
        </div>
        <div class="message-box right">
            <p>{description}</p>
        </div>
    </div>
    <div class="message-input">
    <button className={isRunning? "stop-button": "start-button"}
                onClick={() => dispatch(toggleTimer(index))}>
          {isRunning? "Stop": "Start"}
        </button>
        <button className="button-reset"
        onClick={() => dispatch(resetTimer(index))}
        >
        Reset
        </button>    </div>
  </div>
</div>

    </div>
  )
}
