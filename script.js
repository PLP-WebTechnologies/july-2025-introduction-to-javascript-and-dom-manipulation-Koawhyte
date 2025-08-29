//Question Two
let ButtonElement = document.getElementById('btn');

//First Function
function clickMe(){

    ButtonElement.textContent = "Subscribed";
    ButtonElement.style.background = "#f4f4f4";
    ButtonElement.style.color = "#333";

};

clickMe();

//Second Function
let welcome = document.getElementById('welcome');
function greet(name){
   
   welcome.innerHTML = `Hello, ${name} Nice to meet you`;
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