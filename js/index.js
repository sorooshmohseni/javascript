function searchMenu(){
    let input, filter, ul, li;
    input=document.getElementsByClassName("search")[0];
    // console.log(input)
    filter=input.value.toUpperCase();
    console.log(filter);
    ul=document.getElementsByClassName("menu")[0];
    console.log(ul);
    li=ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a=li[i].getElementsByTagName("a")[0];
        console.log(a);
        if(a.innerHTML.toUpperCase().indexOf(filter)>-1){
            li[i].style.display="block";
        }else{
            li[i].style.display="none"
        }
        
    }
    
}