const drawingEl=document.getElementById('drawing');
const ctx=drawingEl.getContext('2d');
const increaseEl=document.getElementById('increase');
const decreaseEl=document.getElementById('decrease');
const clearEl=document.getElementById('clear');
const colorEl=document.getElementById('color');
const sizeEl=document.getElementById('size');
let size=30;
let isPressed=false;
let color='black';
let x=undefined;
let y=undefined;
drawingEl.addEventListener('mousedown',(e)=>{
    isPressed=true;
    x=e.offsetX;
    y=e.offsetY;
});
drawingEl.addEventListener('mouseup',()=>{
    isPressed=false;
    x=undefined;
    y=undefined;
});
drawingEl.addEventListener('mousemove',(e)=>{
    if(isPressed){
        const x2=e.offsetX;
        const y2=e.offsetY;
        drawCircle(x,y,x2,y2);
        x=x2;
        y=y2;
    }
});
function drawCircle(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle=color;
    ctx.lineWidth=2*size;
    ctx.stroke();
}
increaseEl.addEventListener('click',()=>{
    size+=5;
    if(size>50){
        size=50;
    }
    updateSizeOnScreen();
});
decreaseEl.addEventListener('click',()=>{
    size-=5;
    if(size<5){
        size=5;
    }
    updateSizeOnScreen();
});
function updateSizeOnScreen(){
    sizeEl.innerHTML=size;
};
clearEl.addEventListener('click',()=>{
    ctx.clearRect(0,0,drawingEl.width,drawingEl.height);
});
colorEl.addEventListener('change',(e)=>{
    color=e.target.value;
});