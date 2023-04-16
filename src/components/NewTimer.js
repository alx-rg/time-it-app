import React, {useState} from "react";
import { useDispatch } from 'react-redux'
import './NewTimer.css';

import { addTimer } from '../features/timers/timersSlice'

export default function NewTimer() {
	const [ name, setName ] = useState('')
	const [ description, setDescription ] = useState('')
	const dispatch = useDispatch()
	return (
      <div className="div">
        <input
          type="text"
          placeholder="New Timer Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)} />
        <input
          type="text"
          placeholder="New Description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)} />
          <button
            onClick={() => dispatch(addTimer({name: name, description: description}))}
          >Save</button>
      </div>
	  )
}
