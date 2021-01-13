window.onscroll = function() {headerOpacity()};
//window.onscroll = function() {greetOpacity()};
        
function headerOpacity(){
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      document.getElementById("header3").style.position = "fixed";
        document.getElementById("header3").style.backgroundColor = "rgba(0,0,0,1)";
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
function scrollAbout(){  
    window.scrollTo(0,700);
}
function scrollFolding(){
  if(document.body.scrollTop < 100 || document.documentElement.scrollTop < 100 && document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
    window.scrollTo(0,900);
  }
}
function scrollContact(){
  if(document.body.scrollTop < 100 || document.documentElement.scrollTop < 100 && document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
    window.scrollTo(0,1200);
  }
}
/*function greetOpacity(){
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    document.getElementById("gr").style.opacity = "0";
  }
}*/

function Video(){
    window.location.href = "./Steps/Steps.html"
    document.getElementById("gr").style.color = "black";
}


//box-shadow: inset 0 0 100px black;  ------ Use This after I Create Steps.html