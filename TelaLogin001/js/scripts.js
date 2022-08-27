const rains = document.querySelectorAll(".rain");
const getRandomNumber = (min, max)=>{
    return Math.floor(Math.random() * (max - min + 1)+ min);
}
rains.forEach(rain => {
    rain.style = `--rain-delay:${getRandomNumber(0,1000)}ms`;
})
