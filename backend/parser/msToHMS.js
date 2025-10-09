//function to convert milliseconds to HH:MM:SS.mmm format
module.exports = msToHMS;
function msToHMS(ms) {
  const hours = Math.floor(ms / 3600000); // 1 hour = 3600000 ms
  const minutes = Math.floor((ms % 3600000) / 60000); // 1 min = 60000 ms
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = ms % 1000;

  // Pad minutes and seconds to 2 digits, milliseconds to 3 digits
  const hh = hours;
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');
  const msStr = String(milliseconds).padStart(3, '0');

  return `${hh}:${mm}:${ss}.${msStr}`;
}