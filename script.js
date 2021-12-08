var confettiCount = 70
var countDownDate = new Date('Jun 30, 2022 00:00:00').getTime()
var currConfettiId = 0
var timerType = 'days'
var timerIntervalFunc = NaN

function createDaysTimer() {

  var now = new Date().getTime()
  var timeleft = countDownDate - now

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  const fixeddays = ('' + days).padStart(3, '0')
  const fixedhours = ('' + hours).padStart(2, '0')
  const fixedminutes = ('' + minutes).padStart(2, '0')
  const fixedseconds = ('' + seconds).padStart(2, '0')

  var counter = `${fixeddays}:${fixedhours}:${fixedminutes}:${fixedseconds}`

  document.getElementById('timer').innerHTML = counter
}

function createSecondsTimer(){
  var now=new Date().getTime()
  var timeleft = countDownDate-now

  document.getElementById('timer').innerHTML = Math.floor(timeleft/1000)
}

function timerInterval(){
  clearInterval(timerIntervalFunc)
  if(timerType==='days'){
    createDaysTimer()
    timerIntervalFunc = setInterval(function(){
    createDaysTimer()
    },1000)
  }

  if(timerType==='seconds'){
    createSecondsTimer()
    timerIntervalFunc = setInterval(function(){
      createSecondsTimer()
    },1000)
  }
}

function setTimerType(e){
  if(e.target.textContent==='שניות'){
    timerType = 'seconds'
  }
  if(e.target.textContent==='ימים'){
    timerType = 'days'
  }
  timerInterval()
}

timerInterval()

function randomTiming() {
  var timing = Math.random() + 2.2
  return timing
}

function createConfettiDiv(id, top, right, timing) {

  var textArray = ['עד מתי', 'כמה עוד', 'למה אכלתי','איפה כולם']
  var item = textArray[Math.floor(Math.random()*textArray.length)]

  var div = document.createElement('div')
  div.id = id
  div.className = 'confetti , unselectable'
  div.innerHTML = item
  div.style.position = 'absolute'
  div.style.overflow = 'hidden'
  div.style.top = top
  div.style.right = right

  div.style.transition = 'top '+ timing +'s ease-in , right '+ timing +'s linear'

  var tilt = Math.random() * 10
  tilt *= Math.round(Math.random()) ? 1:-1;
  div.style.transform = 'rotate('+ tilt + 'deg)'
  
  document.getElementById('page').appendChild(div)
}

function createConfetti(id,timing) {
  var w = window.innerWidth - (0.1 * window.innerWidth)
  var tops = -Math.floor(Math.random() * 2500 + 200) + 'px'
  var right = Math.floor(Math.random() * w) + 'px'
  createConfettiDiv(id, tops , right, timing)
}


function throwConfetti(id) {
  setTimeout(function(){
  var h = window.innerHeight
  var tops = Math.floor(Math.random() * 1000 + h + 200)
  var right = Math.floor(Math.random() * 200 + 20 )
  right *= Math.round(Math.random()) ? 1: -1;

  document.getElementById(id).style.top = tops +'px'

  var currRight = document.getElementById(id).style.right
  document.getElementById(id).style.right = (parseInt(currRight,10) + right)},1)
}

function deleteConfetti(id, timing){
  setTimeout(function(){
    document.getElementById(id).remove()
  },timing*1000)
}

function confetti(e){

  for (let i = 0; i<confettiCount; i++){
    var rndTiming = randomTiming()
    var id = 'confetti'+(currConfettiId+i)
    createConfetti(id, rndTiming)
    throwConfetti(id)
    deleteConfetti(id,rndTiming)
  }
  currConfettiId += 50
}

document.getElementById('timer').addEventListener('click',confetti)
document.getElementById('set-timer-to-seconds').addEventListener('click',setTimerType)
document.getElementById('set-timer-to-days').addEventListener('click',setTimerType)
