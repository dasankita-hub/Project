function updateClock() { 
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Format hours, minutes, and seconds with leading zeros if needed
  let newHours = hours < 10 ? "0" + hours : hours;
  let newMinutes = minutes < 10 ? "0" + minutes : minutes;
  let newSeconds = seconds < 10 ? "0" + seconds : seconds;

  // Display the formatted time
  document.getElementById("clock").textContent = `${newHours}:${newMinutes}:${newSeconds}`;
}

// Update the clock every second
updateClock();
setInterval(updateClock, 1000); 
