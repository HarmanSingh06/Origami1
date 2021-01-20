
function search(){
    var input, filter, ul, li, textValue, data,data1;
    input = document.getElementById('searchFilter');
    filter = input.value.toLowerCase();
    
    var upperCase = input.value.toUpperCase();
    input.value = upperCase
    ul = document.getElementById("list");
    li = ul.getElementsByTagName("ol");

    console.log(li)
    for(var i=0; i< li.length; i++){
        data = li[i].getElementsByTagName("h3")[0];
        textValue = data.innerText;
        /*if(textValue.toLowerCase().indexOf(filter) === -1){
            input.value = ""
             alert("No such origami figure found")
        }*/
        if(textValue.toLowerCase().indexOf(filter) > -1){
            li[i].classList.add("origami");
            li[i].style.display = "";
        }
        else{
            li[i].classList.remove("origami");
            li[i].style.display = "none";
        }
    }

}