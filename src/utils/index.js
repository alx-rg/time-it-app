export const formatTime = (time) => {
  const hours = Math.floor(time / 3600000)
  const minutes = Math.floor(time / 60000)
  const seconds = ((time % 60000) / 1000).toFixed(0)
  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
