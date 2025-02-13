<<<<<<< Updated upstream
// const card = document.querySelector('.card')
// const yRange = [-90, 90]
// const xRange = [-90, 90]
//
// function getRotate(offset, max, range) {
//     return (offset / max) * (range[1] - range[0]) + range[0]
// }
//
//
// card.onmousemove = e => {
//     console.log(e)
//     const {offsetX, offsetY} = e;
//     const {offsetWidth, offsetHeight} = card
//     const ry =getRotate(offsetX,offsetWidth,yRange)
//     const rx =getRotate(offsetY,offsetHeight,xRange)
//     card.style.setProperty('--rx', `${rx}deg`)
//     card.style.setProperty('--ry', `${ry}deg`)
//
// }


const canvas = document.querySelector("#canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const c = canvas.getContext("2d")

// c.fillRect(100, 100, 100, 100)
// c.fillRect(200, 200, 100, 100)
// c.fillRect(300, 300, 100, 100)
// c.fillRect(400, 200, 100, 100)
//
//
// c.beginPath()
// c.moveTo(200, 200)
// c.lineTo(400, 300)
// c.lineTo(600, 200)
// c.strokeStyle = "#ff00cd"
// c.stroke();
//
// c.arc(600, 600, 50, 0, 1.5 * Math.PI)
// c.strokeStyle = "#11a011"
// c.stroke()

// canvas.onmousemove = e => {
//     c.clearRect(0, 0, innerWidth, innerHeight)
//     const {screenX, screenY} = e;
//     c.beginPath()
//     c.moveTo(screenX, screenY)
//     const toX = screenX + 100
//     const toY = screenY + 100
//     c.lineTo(toX, toY)
//     // c.lineTo(600,200)
//     c.strokeStyle = "#ff00cd"
//     c.stroke();
// }
var x = 200;
var y = 200;
var dx = 4
var dy = 6;

var radius = 30;

function animate() {
    c.clearRect(0, 0, innerWidth, innerHeight)
    console.log("animate")
    requestAnimationFrame(animate)
    c.beginPath()
    c.arc(x, y, radius, 0, 2 * Math.PI)

    c.strokeStyle = "#ff00cd"
    c.stroke();
    if (x + radius > innerWidth || (x < radius)) {
        dx = -dx;
    }
    if (y + radius > innerWidth || (y < radius)) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

animate()
=======
const card = document.querySelector('.card');
const yRange = [-10, 10]
const xRange = [-10, 10]
function getRotate(range, value, max) {
    return value / max * (range[1] - range[0]) + range[0];
}

card.onmousemove = e => {
    console.log("on mouse move")
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = card
    const ry = getRotate(yRange,offsetX,offsetWidth)
    const rx = getRotate(xRange,offsetY,offsetHeight)
    card.style.setProperty('--rx',`${rx}deg`)
    card.style.setProperty('--ry',`${ry}deg`)
}
>>>>>>> Stashed changes
