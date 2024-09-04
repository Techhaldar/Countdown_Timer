document.getElementById('startButton').addEventListener('click', function () {
    const minutsInput = document.getElementById('minutes').value;
    let time = minutsInput * 60;

    const countdownDisplay = document.getElementById('countdownDisplay')

    const timer = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        countdownDisplay.textContent = `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;

        if(time > 0){
            time--;
        }else{
            clearInterval(timer);
            countdownDisplay.textContent = "Time's up!";
        }

    },1000);

});