const startbtn=document.querySelector('.start');
const screens =document.querySelectorAll('.screen');
const timelist= document.querySelector('.time-list');
const timer= document.querySelector('#time');
const colors=['#FF0000','#BF3030','#67E667','#5CCCCC','#FFB273','#39E639','#FF9640'];
let time =  0;
let score = 0;
const board = document.querySelector('.board');

startbtn.addEventListener(
'click', (event) =>
{
event.preventDefault();
screens[0].classList.add('up');
})


timelist.addEventListener('click', event =>
{
if(event.target.classList.contains('time-btn'))
{
time=parseInt(event.target.getAttribute('data-time'));
screens[1].classList.add('up');
startgame();
}
})


board.addEventListener(
'click', event =>{
if( event.target.classList.contains('dots'))
{
score++;
event.target.remove();
createdots();
}
})


function startgame( )
{
setInterval(() =>piktime(), 1000);
createdots();
settime(time);
}


function piktime(){
let current = --time;
if(current==0){finishgame()}
else
{
if (current <10){current = `0${current}`};
settime(current);
}
}


function settime(value){timer.innerHTML = `00:${value}`}


function createdots()
{
const dots=document.createElement('div');
const size = randomsize(10,70);
const randomcolor =Getrandomcolor();
const {width, height} = board.getBoundingClientRect();
const x = randomsize(0, width-size);
const y= randomsize(0, height-size);
dots.classList.add('dots');

dots.style.top=`${y}px`;
dots.style.left=`${x}px`;
dots.style.width=`${size}px`;
dots.style.height=`${size}px`;
dots.style.background= `${randomcolor}`;
dots.style.boxShadow = `0 0 3px ${randomcolor},0 0 5px ${randomcolor} `;

board.append(dots);
}


function randomsize(min,max){return Math.round(Math.random()*(max-min)+min)}

function Getrandomcolor()
{
const index = Math.floor(Math.random() * colors.length);
return colors[index];
}


function finishgame()
{
board.innerHTML= `<h1>Cчет: <span class='primary'>${score}<span></h1> <button class="remake">Заново</button>`;
timer.parentNode.style.opacity='0';

let buttonn=document.querySelector('.remake');
buttonn.addEventListener('click', e => 
{
e.preventDefault();
window.location.reload();
}

)}