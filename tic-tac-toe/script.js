let class_x='x'
let class_o='o'
let circleTurn;
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
let result=document.getElementById("result")
let resulta=document.querySelector('[data-winning-message-text]')
const cellelements=document.querySelectorAll('[data-cell]')
cellelements.forEach(cell => {
    cell.addEventListener('click',handleClick,{once:true})

});
const rb=document.getElementById('rb')
function handleClick(e){
    const cell=e.target
    const currentClass=circleTurn ?  class_o:class_x
    placemark(cell,currentClass);
    Swapturns(cell)
    if(checkwin(currentClass))
    {
        endgame(false)
    }
    else if(isdraw()){   
        endgame(true)
    }
    else
    {
        resulta.innerText="unknown error"
    }
}
rb.addEventListener('click',function(){
    location.reload();
})
function endgame(draw){
    if(draw){
       resulta.innerText="DRAW!!"
    }else{
       resulta.innerText= (circleTurn ? "player 0 " :"player x ")+'wins'
    }
    result.classList.add('show')
}
function placemark(cell,currentClass){
    cell.classList.add(currentClass)
}
function Swapturns(){
    circleTurn=!circleTurn
}
function isdraw(){
    return [...cellelements].every(cell=>{
        return cell.classList.contains(class_x)||
        cell.classList.contains(class_o)
    })
}
function checkwin(currentClass){
    return WINNING_COMBINATIONS.some(
        combinations=>{return combinations.every
        (index=> {return cellelements[index].classList.contains(currentClass)})
}
    )
}

