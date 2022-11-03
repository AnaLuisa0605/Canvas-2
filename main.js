var mouseEvent = "empty"
var lastPositionX, lastPositionY

canvas = document.getElementById
ctx = canvas.getContext('2d')

color = "black"
widthLine = 1

canvas.addEventListener("mousedown", myMouseDown)

function myMouseDown (e){
    color = document.getElementById("color").value
    widthLine = document.getElementById("widthLine").value
    mouseEvent = "mouseDown"
}

canvas.addEventListener("mousemove" , myMouseMove)


function myMouseMove(e){
    PositionMouseX = e.clientX - canvas.offsetLeft
    PositionMouseY + e.clientY - canvas.offsettop

    if(mouseEvent == "mouseDown"){
        ctx.beginPath()
        ctx.strokesStyle = color
        ctx.lineWidth = widthLine
        ctx.moveTo(lastPositionX, lastPositionY)
        ctx.lineTo(PositionMouseX, PositionMoseY)

        lastPositionX = PositionMouseX
        lastPositionY = PositionMouseY
    }
}
canvas.addEventListener("mouseUp" , myMouseUp)

function myMouseUp(e){
    mouseEvent = "mouseUP"
}
canvas.addEventListener("mouseleave" , myMouseLeave)
function mymouseLeave(e){
    mouseEvent = "mouseleave"
}

function clearArea(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.heigth)
} 

