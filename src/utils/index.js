export const formatSecondsToMinutes = (seconds) => {
  seconds = Math.floor(seconds);

  const minutes = Math.floor(seconds / 60);

  if (minutes > 0) seconds = seconds % 60; 

  return `${minutes}:${('0'+ seconds).slice(-2)}`;
}