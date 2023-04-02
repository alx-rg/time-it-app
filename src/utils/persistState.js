const TIMER_STATE = "TIMER_STATE";

export const loadState = () => {
  try {
    const serializeState = localStorage.getItem(TIMER_STATE)
    if (serializeState === null) {
      return undefined
    }
    return JSON.parse(serializeState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializeState = JSON.stringify(state)
    localStorage.setItem(TIMER_STATE, serializeState)
  } catch (err) {
    console.log("Error saving data")
  }
}
