let butref=document.querySelector('.toggle')

let expandref=document.getElementById('expand')

let section2ref=document.querySelector('.applist')


function toggle(){
    
    if(expandref.style.display==='block'){
        expandref.style.display="none"
    }
    else{
        expandref.style.display="block"
        butref.style.display='none'
    }
}

function toggleback(){
expandref.style.display="none"

butref.style.display='inline'
}

function newlist(){
let unorlist=document.createElement('ul')
let listref=document.createElement('li')
let inpref=document.createElement('input')
let h3ref=document.createElement('h3')
listref.append(inpref)
unorlist.style.color="grey"
inpref.style.color='grey'
inpref.style.fontWeight='600'
inpref.style.fontSize='25px'

inpref.style.border="none"
inpref.style.outline='none'

let homeappend=document.getElementById('homeappend')









inpref.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
    
    newlist()
    let dropdownref=document.createElement('select')
    let optionref=document.createElement('option')
    optionref.innerText=inpref.value
    dropdownref.style.display='block'
    dropdownref.style.border='none'
    dropdownref.style.color='none'
    dropdownref.style.margin='10px'
    dropdownref.style.padding='10px'

    dropdownref.append(optionref)
    homeappend.append(dropdownref)
    if(event.shiftKey)
      {
        let parelement=document.createElement('p')
        
        let inpref=document.createElement('input')
        
        inpref.style.color='grey'
inpref.style.fontWeight='100'

inpref.style.border="none"
inpref.style.outline='none'
        
        parelement.appendChild(inpref)

        listref.appendChild(parelement)

      }
       
    }
    

  });


unorlist.style.marginLeft='27px'


unorlist.append(listref)

section2ref.append(unorlist)


}


// ignore these parts
// let dropdownref=document.createElement('select')
//     let optionref=document.createElement('option')
//     optionref.value='kevin'
//     dropdownref.append(optionref)
    

    






