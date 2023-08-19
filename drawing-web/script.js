const canvas=document.getElementById('canvas')
const context=canvas.getContext('2d')
const button=document.getElementById('b')
let isdrawing=false;

canvas.width=window.innerWidth-20
canvas.height=window.innerHeight-20

context.strokeStyle="#000"
context.lineWidth=5
context.linecap='round'

canvas.addEventListener('mousedown',startdrawing)
canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mouseout',stopdrawing)
canvas.addEventListener('mouseup',stopdrawing)
button.addEventListener('click',clear)

function startdrawing(e){
  isdrawing=true
  context.beginPath()
  context.moveTo(e.clientX-canvas.offsetLeft,e.clientY-canvas.offsetTop)
}

function draw(e){
  if(!isdrawing)return
  context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop)
  context.stroke()
}

function stopdrawing(e){
  isdrawing=false;
  context.closePath()
}

function clear(e){
  context.clearRect(0,0,canvas.width,canvas.height)
}