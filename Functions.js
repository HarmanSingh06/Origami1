
window.onscroll = function () { headerOpacity(), tutorials() };
function headerOpacity() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("header3").style.position = "fixed";
    document.getElementById("header3").style.backgroundColor = "rgba(0,0,0,1)";
    document.getElementById("header3").style.color = "#ffffff";
    document.getElementById("origami").style.transform = "translate(0px,100px)";
    document.getElementById("origami1").style.transform = "translate(0px,100px)";
  }
  if (document.body.scrollTop < 500 && document.documentElement.scrollTop < 500) {
    //document.getElementById("header2").style.opacity = "1"
    document.getElementById("header3").style.transitionProperty = "all";
    document.getElementById("header3").style.transitionDuration = "0.4s";
    document.getElementById("logo").style.transitionProperty = "all";
    document.getElementById("logo").style.transitionDuration = "0.4s";
    document.getElementById("header3").style.backgroundColor = "rgba(0,0,0,.4)";
    document.getElementById("header3").style.color = "#db0d29";
    document.getElementById("header3").style.position = "absolute";
  }
}
function classAdder(){
  ul = document.getElementById("list");
  li = ul.getElementsByTagName("ol");
  for(var i=0; i< li.length; i++){
    li[i].classList.add("origami");
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
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("tutorials").style.transitionProperty = "all";
    document.getElementById("tutorials").style.transitionDuration = "0.4s";
    document.getElementById("tutorials").style.opacity = "1";
    document.getElementById("tutorials").style.transform = "translate(0px,200px)";
    document.getElementById("anime1").style.transitionProperty = "all";
    document.getElementById("anime1").style.transitionDuration = "0.4s";
    document.getElementById("anime1").style.transform = "translate(0px,400px)";
  }
  else if (document.body.scrollTop < 700 || document.documentElement.scrollTop < 700) {
    document.getElementById("tutorials").style.transitionProperty = "all";
    document.getElementById("tutorials").style.transitionDuration = "0.4s";
    document.getElementById("tutorials").style.opacity = "0";
  }
}
function fold() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("fold").style.transitionProperty = "all";
    document.getElementById("fold").style.transitionDuration = "0.4s";
    document.getElementById("fold").style.transform = "translate(0px,-100px)";
  }
  else if (document.body.scrollTop < 700 || document.documentElement.scrollTop < 700) {
    document.getElementById("tutorials").style.transitionProperty = "all";
    document.getElementById("tutorials").style.transitionDuration = "0.4s";
    document.getElementById("tutorials").style.transform = "translate(0px,0px)";
  }
}
function Video() {
  window.location.href = "./Steps/Steps.html";
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


//box-shadow: inset 0 0 100px black;  ------ Use This after I Create Steps.html






