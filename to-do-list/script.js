document.addEventListener('DOMContentLoaded', () => {


const inputbox=document.getElementById("input-box")
const submit=document.getElementById('submit')
const ogcontainer=document.getElementById('list-container')

function addtask(e){

    if(inputbox.value==''){
        alert("the text box is empty")
    }
    else{
        const li=document.createElement('li')
        const d=document.createElement('div')
        d.setAttribute('button-container','')
        li.innerText=inputbox.value 
        const removeButton = document.createElement('button');
        removeButton.textContent='X'
        removeButton.setAttribute('button-x','')
        d.appendChild(removeButton);
        li.appendChild(d)
        ogcontainer.append(li)
        inputbox.value=''
        savedata()
    }
}

submit.addEventListener('click',()=>{
    addtask()
})

ogcontainer.addEventListener('click', (e) => {

    if (e.target.tagName === 'LI') { 
          e.target.classList.toggle('cross');
        } 
    else if (e.target.tagName === 'BUTTON' && e.target.getAttribute('button-x') !== null) {
        const listElement = e.target.closest('li');
        if (listElement) {
            listElement.remove();
        }
    }
    savedata()
    })
function savedata(){
    localStorage.setItem('data',ogcontainer.innerHTML)
}
function showdata(){
    ogcontainer.innerHTML=localStorage.getItem('data')
}
showdata()
})
