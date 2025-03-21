function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be converted to 12
  
    const formattedTime =' ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}';
  
    console.log('Current Time: ${formattedTime}');
  
    // Optional: Update HTML if you're displaying in a browser
    // document.getElementById('clock').textContent = formattedTime; 
  }
  
  function padZero(num) {
    return num < 10 ? '0' + num : num;
  }
  
  updateClock(); // Initial call
  setInterval(updateClock, 1000); // Update every second