//import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const MIN = 0;
const MAX = colors.length - 1;
const TIME_INTERVAL = 1000;

const refs = {
    bodyEl: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', onClickStart)

const changeBackgroundColor = () => {
    const item = randomIntegerFromInterval(MIN, MAX);
    refs.bodyEl.style.backgroundColor = colors[item];
    //console.log(item + '-' + colors[item])
};
function onClickStart() {
    //console.log('onClickStart');
    const intervalId = setInterval(changeBackgroundColor, TIME_INTERVAL);

    refs.startBtn.setAttribute('disabled', true);

    refs.stopBtn.addEventListener('click', onClickStop);

    function onClickStop() {
        //console.log('onClickStop');
        //refs.startBtn.removeEventListener('click', onClickStart)
        clearInterval(intervalId);
        refs.startBtn.removeAttribute('disabled');
    }
}
