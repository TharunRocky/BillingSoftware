let availableItems=['Chicken Biryani','Dum Biryani','Starters','Mutton','Prawns'];

const resultsbox = document.querySelector(".result-box");
const inputbox=document.getElementById("input-box");

inputbox.onkeyup=function(){
    let result=[];
    let input=inputbox.value;
    if(input.length){
        result=availableItems.filter((keyword)=>{ return keyword.toLowerCase().includes(input.toLowerCase())});
        console.log(result);
    }
    display(result);
    if(!result.length){
        resultsbox.innerHTML='';
    }
}

function display(result){
    const content=result.map((list)=>{
        return "<li onclick=selectInput(this)>"+list+"</li>";
    });
    resultsbox.innerHTML="<ul>"+content.join('')+"</ul>";
}
function selectInput(list){
    inputbox.value=list.innerHTML;
    resultsbox.innerHTML="";
    console.log(prices[inputbox.value]);
}

///To store Prices
var prices=[];
prices["Chicken Biryani"]="190";
prices["Dum Biryani"]="110";

const listcontainer = document.getElementById("list-container");
function addItem(){
    let li=document.createElement("li");
    li.innerHTML=inputbox.value+" "+prices[inputbox.value]+" Qty";
    console.log(li.innerHTML);
    listcontainer.append(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    inputbox.value='';
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    }
},false);