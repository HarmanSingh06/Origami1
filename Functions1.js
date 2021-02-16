window.onscroll = function () { headerOpacity(), tutorials() };

function headerOpacity() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("header3").style.position = "fixed";
    document.getElementById("header3").style.backgroundColor = "rgba(255,255,255,1)";
    //  document.getElementById("header2").style.opacity = "70%"
    document.getElementById("header3").style.color = "#ffffff";
  }
  if (document.body.scrollTop < 600 && document.documentElement.scrollTop < 600) {
    //document.getElementById("header2").style.opacity = "1"
    document.getElementById("header3").style.transitionProperty = "all";
    document.getElementById("header3").style.transitionDuration = "0.4s";
    document.getElementById("header3").style.backgroundColor = "rgba(0,0,0,.4)";
    document.getElementById("header3").style.color = "#db0d29";
    document.getElementById("header3").style.position = "absolute";
  }
}
function scrollAbout() {
  window.scrollTo(0, 700);
}
function scrollFolding() {
  if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100 && document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    window.scrollTo(0, 900);
  }
}
function scrollContact() {
  if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100 && document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    window.scrollTo(0, 1200);
  }
}
function tutorials() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("tutorials").style.transitionProperty = "all";
    document.getElementById("tutorials").style.transitionDuration = "0.4s";
    document.getElementById("tutorials").style.opacity = "1";
  }
  else if (document.body.scrollTop < 600 || document.documentElement.scrollTop < 600) {
    document.getElementById("tutorials").style.transitionProperty = "all";
    document.getElementById("tutorials").style.transitionDuration = "0.4s";
    document.getElementById("tutorials").style.opacity = "0";
  }
}

function Video() {
var bool = true
if(bool){
  window.location.href = "./Steps/Steps.html";
}  
  else{
    //...now what will you do 
  }
}


function toggleTheme() {
  var theme = document.getElementsByTagName('link')[0];
  if (theme.getAttribute('href') == 'Light.css') {
    theme.setAttribute('href', 'Dark.css')
  }
  else if (theme.getAttribute('href') == 'Dark.css') {
    theme.setAttribute('href', 'Light.css')
  }
  console.log(theme)
}
function toggleFunctions(){
  var scripts = document.getElementsByTagName('script')[0];
  if(scripts.getAttribute('src') == 'Functions.js'){
    scripts.setAttribute('src', 'Functions1.js')
  }
  else{
    scripts.setAttribute('src', 'Functions.js')
  }
}

