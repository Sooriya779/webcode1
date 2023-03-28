var div=document.createElement("div");
div.setAttribute("class","main1");

var formgroup=document.createElement("div");
formgroup.setAttribute("class","form-group");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","from-control");
input.setAttribute("id","main");
input.setAttribute("placeholder","Nationalize API");
input.style.width="520px";

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","main2")
button.innerHTML="search";
button.style.marginLeft="20px";
button.addEventListener("click",foo);



var makeup=document.createElement("div");
makeup.setAttribute("class","makeup");


formgroup.append(input,button,makeup);

div.append(formgroup);
document.body.append(div);


async function foo(){
    let res=document.getElementById("country").value;
    console.log(res);
    var url=fetch`https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane?${res}`;
    let res1=await fetch(url);
    let res2=await res1.json();
    let index=res2.length-1;
    console.log(res2[index]);
    console.log(res2[index].probability);
    active.innerHTML=`top two values:${res2[index].probability}`;
    }
    
    







