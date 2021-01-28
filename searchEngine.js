
function search(){
    var input, filter, ul, li, textValue, data,data1;
    input = document.getElementById('searchFilter');
    filter = input.value.toLowerCase();
    
    var upperCase = input.value.toUpperCase();
    input.value = upperCase
    ul = document.getElementById("list");
    li = ul.getElementsByTagName("ol");

 
    for(var i=0; i< li.length; i++){
        data = li[i].getElementsByTagName("h3")[0];
        textValue = data.innerText;

        if(textValue.toLowerCase().indexOf(filter) > -1){
            li[i].classList.add("origami");
            li[i].style.display = "";
            document.getElementById('searchResult').style.opacity = "0" 
        }
        else if(textValue.toLowerCase().indexOf(filter) <= -1){
            li[i].classList.remove("origami");
            li[i].style.display = "none";
            //ask this -------- document.getElementById('searchResult').style.opacity = "1" 
        }
    }
console.log(textValue.toLowerCase().indexOf(filter) == -1)
}