//Question Two


//First Function
function clickMe(){
let ButtonElement = document.querySelector('.btn');


    if (ButtonElement.innerText === 'Subscribe'){
        ButtonElement.innerHTML= 'Subscribed';
        ButtonElement.style.background = "#f7f7f7";
        ButtonElement.style.color = "gray";
    
    }
    else {
       ButtonElement.innerHTML= 'Subscribe';
       ButtonElement.style.background = "black";
       ButtonElement.style.color = "white";
    }
        
    
};

clickMe();
 
//Second Function
let welcome = document.getElementById('welcome');
function greet(name){
   
   welcome.innerHTML = `Hello, ${name} Nice to meet you`;
   welcome.style.color = "white";
   welcome.style.marginTop ='70px';
};

greet("Koawhyte");


//Question one
let result = document.getElementById('result');
let age = 16;



//first variable and condition
if(age >=18) {
result.innerHTML = "Can Vote";
}

else{
    let yearsToWait = 18 - age;
    result.innerHTML = `you are too young, wait till ${yearsToWait} years time`;
    result.style.color ="white";
    result.style.marginTop ="1rem";
}
//second variable and condition
let x = 10;
if(x==="10"){
    console.log("yah, i said so!!")
}
else{
    console.log("It just can't be")
}

//Question Three
//loop1
myFruits = ["Apple", "Banana", "Oranges", "Cherry", "pineapples"]
for(let i = 0; i< myFruits.length; i++ ){
    console.log(`I love ${myFruits[i]}`);
};

//loop2
for(let i =0; i<10; i++){
    console.log(`This is number ${i}`)
};

//Dom
function hideSideBar(){
let sidebar = document.querySelector('.sidebar')
sidebar.style.display ="none"
}

function showSideBar(){
let mainbar = document.querySelector('.sidebar')
mainbar.style.display ="flex"
}