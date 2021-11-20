const time = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
let count = 0;
let run = 0;
function changeTime() {
    if (run) {
        count++;
    }
    time.value = count;
}
start.addEventListener('click', () => {
    setInterval(changeTime, 500);
    run = true;
})

stop.addEventListener('click', () => {
    clearInterval();
    run = false;
})