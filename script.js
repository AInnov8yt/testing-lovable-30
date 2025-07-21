document.addEventListener('DOMContentLoaded', () => {
  const counterDisplay = document.getElementById('counter');
  const incrementBtn = document.getElementById('incrementBtn');
  const resetBtn = document.getElementById('resetBtn');
  
  let count = 0;
  
  incrementBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
  });
  
  resetBtn.addEventListener('click', () => {
    count = 0;
    counterDisplay.textContent = count;
  });
});