
function beatDiv(){
  return document.getElementById("beats")
}
beatDiv().innerHTML = "BeatS!"

let m1beat1 = "-KicK!---"
let m1beat2 = "-2-"
let m1beat3 = "-3-"
let m1beat4 = "-4-"
let m2beat1 = "-5-"
let m2beat2 = "-6-"
let m2beat3 = "-7-"
let m2beat4 = "-8-"
let m3beat1 = "-9-"
let m3beat2 = "-10-"
let m3beat3 = "-11-"
let m3beat4 = "-12-"
let m4beat1 = "-13-"
let m4beat2 = "-14-"
let m4beat3 = "-15-"
let m4beat4 = "-16-"

let hhm1beat1 = "-HiHat!-"
let hhm1beat2 = "-2-"
let hhm1beat3 = "-3-"
let hhm1beat4 = "-4-"
let hhm2beat1 = "-5-"
let hhm2beat2 = "-6-"
let hhm2beat3 = "-7-"
let hhm2beat4 = "-8-"
let hhm3beat1 = "-9-"
let hhm3beat2 = "-10-"
let hhm3beat3 = "-11-"
let hhm3beat4 = "-12-"
let hhm4beat1 = "-13-"
let hhm4beat2 = "-14-"
let hhm4beat3 = "-15-"
let hhm4beat4 = "-16-"

let sm1beat1 = "-SnaRe!-"
let sm1beat2 = "-2-"
let sm1beat3 = "-3-"
let sm1beat4 = "-4-"
let sm2beat1 = "-5-"
let sm2beat2 = "-6-"
let sm2beat3 = "-7-"
let sm2beat4 = "-8-"
let sm3beat1 = "-9-"
let sm3beat2 = "-10-"
let sm3beat3 = "-11-"
let sm3beat4 = "-12-"
let sm4beat1 = "-13-"
let sm4beat2 = "-14-"
let sm4beat3 = "-15-"
let sm4beat4 = "-16-"

const loop = [m1beat1, m1beat2, m1beat3, m1beat4, m2beat1, m2beat2, m2beat3, m2beat4, m3beat1, m3beat2, m3beat3, m3beat4, m4beat1, m4beat2, m4beat3, m4beat4]
const hhloop = [hhm1beat1, hhm1beat2, hhm1beat3, hhm1beat4, hhm2beat1, hhm2beat2, hhm2beat3, hhm2beat4, hhm3beat1, hhm3beat2, hhm3beat3, hhm3beat4, hhm4beat1, hhm4beat2, hhm4beat3, hhm4beat4]
const snareloop = [sm1beat1, sm1beat2, sm1beat3, sm1beat4, sm2beat1, sm2beat2, sm2beat3, sm2beat4, sm3beat1, sm3beat2, sm3beat3, sm3beat4, sm4beat1, sm4beat2, sm4beat3, sm4beat4]

let loopIndex = 0

let bpm = 120

function intervalTime() {
 return 60000/parseInt(bpm)
}

function startButtonTemplate(){
  return `<input type="submit" value="Play Loop!" id="loop-start">`
}

function renderButton(button, event){
  let div = document.getElementById("button-div")
  let h4 = document.createElement("h4")
  h4.innerHTML = button
  div.appendChild(h4)
  h4.addEventListener("click", event)
}

function startLoopButton(){
  return document.getElementById("loop-start")
}

function bpmFormTemplate(){
  return `
  <form id="bpm-form">
    <label for="bpm">BPM</label>
    <input type="text" name="bpm" id="bpm">
    <input type="submit">
  </form>
  `
}

function bpmForm(){
  return document.querySelector("form")
}

function renderBpmForm(){
  let div = document.getElementById("bpm-input")
  let h4 = document.createElement("h4")
  h4.innerHTML = bpmFormTemplate()
  div.appendChild(h4)
  h4.children[0].addEventListener("submit", bpmEvent)
}

function bpmEvent(e){
  e.preventDefault()
  console.log("clicked")
  bpm = document.getElementById("bpm").value
}


function startLoopEvent(e){
    e.preventDefault()
    playLoop()
}

function stopButtonTemplate(){
  return `<input type="submit" value="Stop Loop!" id="loop-stop">`
}

function stopLoopEvent(e){
  e.preventDefault()
  clearInterval(intervalID)
}

let playLoop = function (){
  
  if (document.getElementById("button-div").children.length < 2){
    renderButton(stopButtonTemplate(), stopLoopEvent)}

  // if (intervalID != undefined){
  //   clearInterval(this.intervalID)
  // }


  this.intervalID = setInterval(function(){
  //   if (loopIndex == 0 || loopIndex == 4 || loopIndex == 8 || loopIndex == 12){
  //     beatDiv().style.color = "red"
  //   }
  //   else{
  //     beatDiv().style.color = "black"
  //   }

  //   beatDiv().innerHTML = loop[loopIndex]

  //   if (loopIndex > 14){
  //     loopIndex = 0
  //   }
  //   else {
  //     loopIndex ++
  //   }
  // }, 500)
    let kul = document.getElementById("in-line-ul")
    let hhul = document.getElementById("hh-ul")
    let sul = document.getElementById("snare-ul")

    // ul.children[loopIndex].style.color = "red"
    kul.children[loopIndex].style.fontSize = "40px"
    hhul.children[loopIndex].style.fontSize = "40px"
    sul.children[loopIndex].style.fontSize = "40px"

    if (kul.children[loopIndex].style.color == "red"){
      kick.play()
    }

    if (hhul.children[loopIndex].style.color == "red"){
      hiHat.play()
    }

    if (sul.children[loopIndex].style.color == "red"){
      snare.play()
    }


    if (loopIndex == 0 || loopIndex == 4 || loopIndex == 8 || loopIndex == 12){
      // ul.children[loopIndex].style.color = "red"
      kul.children[loopIndex].style.fontSize = "45px"
      hhul.children[loopIndex].style.fontSize = "45px"
      sul.children[loopIndex].style.fontSize = "45px"
    }

    if(loopIndex > 0){
      // ul.children[loopIndex - 1].style.color = "black"
      kul.children[loopIndex - 1].style.fontSize = "32px"
      hhul.children[loopIndex - 1].style.fontSize = "32px"
      sul.children[loopIndex - 1].style.fontSize = "32px"
    }
    else if (loopIndex == 0){
      // ul.children[15].style.color = "black"
      kul.children[15].style.fontSize = "32px"
      hhul.children[15].style.fontSize = "32px"
      sul.children[15].style.fontSize = "32px"
    }

    if (loopIndex > 14){
          loopIndex = 0
        }
        else {
          loopIndex ++
        }
      }, intervalTime())

}

let kick = new Audio('http://soundcavern.free.fr/kick/kick003.wav')
let hiHat = new Audio('http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/28-foot%20closed%20hat.wav')
let snare = new Audio('http://soundcavern.free.fr/snare/snshort.wav')


function inLineTemplate(){
  let ul = document.getElementById("in-line-ul")
  loop.forEach(beat => {
    let li = document.createElement("li")
    li .innerHTML = beat
    li.style.display = "inline"
    ul.appendChild(li)
    li.addEventListener("click", changeColor)
  })
}

function hhTemplate(){
  let ul = document.getElementById("hh-ul")
  hhloop.forEach(beat => {
    let li = document.createElement("li")
    li .innerHTML = beat
    li.style.display = "inline"
    ul.appendChild(li)
    li.addEventListener("click", changeColor)
  })
}

function snareTemplate(){
  let ul = document.getElementById("snare-ul")
  snareloop.forEach(beat => {
    let li = document.createElement("li")
    li .innerHTML = beat
    li.style.display = "inline"
    ul.appendChild(li)
    li.addEventListener("click", changeColor)
  })
}

function changeColor(e){
  if (e.target.style.color != "red"){
    e.target.style.color = "red"
  }
  else {
    e.target.style.color = "black"
  }
}

document.addEventListener("DOMContentLoaded", function() {
  renderButton(startButtonTemplate(), startLoopEvent)
  renderBpmForm()
  inLineTemplate()
  hhTemplate()
  snareTemplate()
})


