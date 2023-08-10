const n1=document.getElementById('no1');
const n2=document.getElementById('no2');

const b1=document.getElementById('add');
const b2=document.getElementById('sub');
const b3=document.getElementById('mul');
const b4=document.getElementById('div');

let r1=document.getElementById('ans');

b1.addEventListener("click",function(){
    let num1=parseInt(n1.value);
    let num2=parseInt(n2.value);
    const sum = num1+num2;
    r1.textContent='result:  '+sum;
});
b2.addEventListener("click",function(){
    let num1=parseInt(n1.value);
    let num2=parseInt(n2.value);
    const dif = num1-num2;
    r1.textContent='result:  '+dif;
});
b3.addEventListener("click",function(){
    let num1=parseInt(n1.value);
    let num2=parseInt(n2.value);
    const result = num1*num2;
    r1.textContent='result:  '+result;
});
b4.addEventListener("click",function(){
    let num1=parseInt(n1.value);
    let num2=parseInt(n2.value);
    const result = num1/num2;
    r1.textContent='result:  '+result;
});