document.addEventListener("DOMContentLoaded", function () {
  const pikachu = document.querySelector('.pikachu');
  const startButton = document.getElementById('start');
  const stopButton = document.getElementById('stop');
  const speedButton = document.getElementById('speed');
  let currentSpeed = 10;

  if (startButton && stopButton && speedButton) {
   
    startButton.addEventListener('click', () => {
      pikachu.style.animationPlayState = 'running';
    });


    stopButton.addEventListener('click', () => {
      pikachu.style.animationPlayState = 'paused';
    });


    speedButton.addEventListener('click', () => {
      currentSpeed -= 2;
      if (currentSpeed < 2) currentSpeed = 2;
      pikachu.style.animationDuration = `${currentSpeed}s`;
    });
  }
});
