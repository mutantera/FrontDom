//console.log
// console.log("hallo")

//console.warn
// console.warn("alert")

//console.error
// console.error("red")

//show alert at page
// alert("hello")

//prompt alert ke sath - sath message box deta hai
// prompt("hello")

//spread
// var ar = [12, 13, 14, 15];
// var ba = [...ar];

// for(start; end; change){

// }

// for(var num = 1; num<11; num++){

// }
// for(var num = 25; num<=51; num++){

// }
// for(var num = 20; num>4; num--){

// }
// for(var num = 5; num>0; num--){

// }

//for while foreach
// start;
// while(end){
//     change;
// }

// var num = 1;
// while(num<11){
//     num++;
// }

// var i = 45;
// while(i<31){
//     num--;
// }

// function abcd(~param){

// }

//how  to loop an array
// var arr = [1, 2, 3, 4, 5];
// arr.forEach(function(val){
//     console.log(val)
// });

//how to loop an array and do something with each element
// arr.forEach(function(val){
//     console.log(val+1);
// })

//Object examples
// var obj = {
//     name: "sarvesh",
//     age: 25,
//     email: "kuchbhi@gmil.com",
//     contact:36859742
// };

// this keyword 
//global 
// console.log(this);

// function
// function abcd(){
//     console.log(this);
// }
// abcd();

//method
// var obj = {
//     name: function(){
//         console.log(this);
//     }
// }
// obj.name();

//function inside method (es5)
// var obj2 = {
//     sayName: function(){
//         function childfunction(){
//             console.log(this);
//         }

//         childfunction();
//     }
// }
// obj2.sayName();

//function inside method (es6)
// var obj3 = {
//     sayName: function(){
//         const child = ()=>{
//             console.log(this);
//         }
//         child;
//     }
// }
// obj3.sayName

//constructor function mein this ki value - new blank object
// function add(){
//     console.log(this);
// }
// const ans = new add();

//event listener mein this ki value - that element jisper event laga hoo
// document.querySelector("button")
// .addEventListener("click", function(){
//     console.log(this);
// })

// function makeHuman(name, age){
//     this.name = name;
//     this.age = age;
// }
// const human1 = new makeHuman("sarvesh", 21);
// const human2 = new makeHuman("chhote", 20);

// function abcd(){
//     var a = 12;
//     return function(){
//             console.log(a)
//     }
// }
// var ans = abcd();
// ans();

//event delegation
// var parent = document.querySelector("#parent");
// parent.addEventListener("click", function(details){
//     if(details.target.id === "play"){
//         console.log("play song");
//     }
//     else if(details.target.id === "pause"){
//         console.log("pause song");
//     }
// })

//Error handling try catch block

// function divide(a,b){
//     try{
//         if(b==0){
//             throw Error("koi garbar hai");
//         }
//         console.log(a/b);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// divide(12,13)

//custom event
// const yourevent = new Event("chaah");

// document.querySelector("button")
// .addEventListner("chaah", function(){
//     alert("event occur");
// })

// document.querySelector("button").dispatchEvent(yourevent);
