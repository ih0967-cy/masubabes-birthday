let pages=document.querySelectorAll('.page');
let current=0;

const bgm=document.getElementById("bgm");
const toggle=document.getElementById("musicToggle");

function nextPage(){
  if(current===0) bgm.play();
  pages[current].classList.remove("active");
  current++;
  pages[current].classList.add("active");
}

toggle.onclick=()=>{
  if(bgm.paused){bgm.play();toggle.textContent="🔊";}
  else{bgm.pause();toggle.textContent="🔇";}
};

/* PASSWORD */
function unlock(){
  if(document.getElementById("pass").value==="2302"){
    nextPage();
  }else{
    alert("Wrong code");
  }
}

/* TEXT SUBMIT */
function submitText(){
  localStorage.setItem("her_message",document.getElementById("herText").value);
  document.getElementById("herText").style.display="none";
  document.querySelector("button").style.display="none";
  document.getElementById("finalText").style.display="block";
}

/* SLIDER */
let imgs=document.querySelectorAll(".slider img");
let i=0;
imgs[0].classList.add("active");
setInterval(()=>{
  imgs[i].classList.remove("active");
  i=(i+1)%imgs.length;
  imgs[i].classList.add("active");
},1800);

/* COUNTDOWN */
const target=new Date("Feb 23, 2026 00:00:00").getTime();
setInterval(()=>{
  let now=new Date().getTime();
  let d=target-now;
  document.getElementById("countdown").innerText=
    Math.floor(d/86400000)+" Days "+
    Math.floor((d%86400000)/3600000)+" Hours "+
    Math.floor((d%3600000)/60000)+" Min";
},1000);
const form = document.getElementById("herForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        form.style.display = "none";
        document.getElementById("afterSend").classList.remove("hidden");
      } else {
        alert("Something went wrong. Please try again.");
      }
    });
  });
}

