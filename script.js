
function showSideBar(){
    let Bar = document.querySelector('.sidebar');

    Bar.style.display ='flex'

};

function hideSideBar(){
    let hideBar = document.querySelector('.sidebar');

    hideBar.style.display ='none'

};

function showResult(){

let result = document.querySelector(".result");
result.style.color = 'white'
result.style.marginTop ='90px'
result.style.marginLeft ='16px'


let age = 16;
let adultAge = 18 - age;
if(age >= 18){
    result.innerHTML = "can vote"
    
}

else{
    result.innerHTML = `your not up to voting age wait till ${adultAge} years time`
}
};

showResult();

function clickMe(){
let ButtonElement =document.getElementById('click');

if(ButtonElement.textContent === 'Subscribe'){
    ButtonElement.innerHTML = 'Subscribed'
    ButtonElement.style.background ='gray'
    ButtonElement.style.color = 'white'
}
else{
    ButtonElement.innerHTML = 'Subscribe'
    ButtonElement.style.background ='black'
    ButtonElement.style.color = 'white'

}
}




let myFruit = ['Banana', 'Apple', 'Orange', 'Cherry','Pineapple'];


for(let i =0; i < myFruit.length; i++){
    console.log(`I love ${myFruit[i]}`);
    
  
};

for(let i =0; i < 10; i++){
    console.log(`This is number ${[i]}`);
    
  
};