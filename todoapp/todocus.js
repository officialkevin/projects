
    let olref=document.createElement("ol")
    let dateref= document.querySelector(".date")
    let timeref=document.querySelector(".time")

function fn(){

    let inpref= document.getElementById("inp")
    let divref=document.querySelector('header')
    let newh1=document.createElement("h1")
    let listref=document.createElement("li")
    olref.appendChild(listref)
    newh1.style.borderRight="2px solid black"
    newh1.style.boxShadow= "10px 0 5px -2px #888";
    newh1.innerText=`${inpref.value} on  ${dateref.value} starting time ${timeref.value}`
    listref.append(newh1.innerText)
    
    
   
    
    

   
    divref.appendChild(olref)

    listref.addEventListener("click",function (){
        newh1.style.display="none"
        listref.style.display="none"


    })


}

