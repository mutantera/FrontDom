baisc:-
        js the language : it is made by Brendan Eich. Ecmascript is a community that work to make good javascript.
        es5 consist var & es6 consist let
        js the language : code likhna sikhna, main features
        js the dom : code likhkar chije banana seekhna
        
inbuilt features:- console, alert, prompt

variable constants :- ye container hote hai. variable mein value change hoo sakti hai lakin constant mein nahi hoo sakti hai.
        
jab bhi koi js ka code run karte hai woh ram pee run hota hai.

compilers and interpreters :- compiler code ko machine language mein convert karta hai lakin interpreter bytes code mein convert karta hai ye running time fast hota hai.

window:- ye kuch aaisay features deta hai jo js mein hote par js use karta hai browser ke help se
         
types:- iska matlab data ka roop
        harsh - string
        12 - integer
        12.3 - float
        true - boolean
        a - character
data dow types ke hote hai:- 
                            primitive datatypes
                            reference datatypes
                            referance datatypes :- {} [] () 
                            primitive datatypes :- reference ke aalawa jo bhi hoga premeitive datatypes hoga

conditions:- if else, else-if, ternary operator, switch case
* As we focus on if else, else-if 99% and ternary operator 1% for our daily uses
* if ke aandar only true ya false hote hai.false mein null, undefined, NaN, 0, "", '',document.all, false

loops :- repeat
        for while, do-while, foreach, forin, forof
* foreach ek normal loop nahi hai for and while ki tarah jo numbers pe ya start end par chalta hai, foreach loop sirf array pe chalta hai.
* In web development we use 70% for while & foreach we use 25% in daily use.

function :- ye tub banate jub kisi chij ko ek se jayada baar call karna hai, jub tak call nahi karaingay tub tak ye nahi chalegaa.

es5 :- 
        function statement, function expressions, anonymous function
es6 :- fat arrow function
        (a) basic fat arrow
        (b) fat arrow with one param
        (c) fat arrow with implicit return

* Js mein function banaane ke liye type nahi batana padta
* Js mein function ko value/variable ki tarah treat kiya jata hai.
* what is function 
koi aisa code jo aapko baar baar use karna ho, ya fir koi aisa code jisko turant na chalana ho par kabhi chalana ho, usey function mein daal sakte hai.
* why we need :- to reuse code and to wrap the code which we want to run in future at some point of time.
* how to use :- 
                function abcd(){ your code}
* extras we should know :- parameters and arguments

                            function abcd(val){  //parameter

                            }
                            abcd(); //argument
* prep for interview :-

                            function abcd(){
                                //function statement
                            }
                            var abcd = function(){
                                //function expression
                            }
                            function(){
                                //anonymous function
                            }
* fat arrow function :-
    (a) basic fat arrow

                            var a = ()=>{

                            }
    (b)fat arrow with one param

                            var g = (ab)=>{}

                            g(12)

    (c)fat arrow with implicit return

                            var abcd = ()=>"harsh";
                    
return :- return functions ke aandar lagta hai, jaha par bhi return lagega uske aage jo bhi likha hoga woh jayega waha par jaha par function call hua tha.
* Aaisha function jo kuch return nahi karta woh undefined return karta hai.

                            function abcd(){
                                return 1;
                            }
                            abcd();
undefined :-
* undefined is a value
* undefined tabhi jaati hai jab variable ko koi value nahi mila hoo, ye ek garbage value ki tarah treat ki jaati hai, isse hum default value bhi keh sakte hai.

* not defined :- 
* not defined is an error
* notdefined kisi element/identity ko use karte hai without declaration ke tow woh error deta hai aur ush error ko undefined bolte hai.

* null:-
* null is also a value
* this is value which resolve like, not found. when something is not found that is null.

array :- jub bhi ek ya ek se jayada value ek sath rakhna ho.
        
        var arr = ["sarvesh", "abhi", "kabhi", "suno"]
        arr[3];
* jab kisi ek type ke bahut sare data ko store karna hoo tow aur eaksath then save it in an array.

loop with array :- see the js file

object :- ye ek tariak hai jissay hum ek identity ki details ko eak sath rakhte hai.
* kie logo ka data = array
* ek bande ka kie saara data = object
* object ko {} ish bracket mein likhte hai.

                                            var obj = {};
                                            var obj2 = new Object();

* synchronous :- ye code ko line by line chalata hai, ye tub tak dusre code ko execute nahi karne dega jubtak pahela wala puri tarah execute nahi ho jata hai.
* jitna bhi synchronous code hai bydefault main stak me jata hai.
* asynchronous :- ye sare code ko ek sath suru kar deta uske baad jo pahael ho jaye usko execute kar deta hai.
* asynchronous ka code pahale side stak mein hota hai aur jab tak main stak khali nahi hota tab tak asynchronous code ko main stak mein nahi laya jata.

keyword :- aaisha word jika koi matlab hoo programming language mein.

* Understanding this call aplly bind

* this keyword :- ishki value baar-baar badal sakti hai alag-alag condition mein.
                global - windows
                function - windows
                method - object
                function inside method (es5) - windows
                function inside method (es6) - object
                constructor function mein this ki value - new blank object
                event listener mein this ki value - that element jisper event laga hoo 

* Call apply bind :- ye teen tarike hai function ko call karne ke kisi object ko this maan kar, apply mein jab koi value pass karte hai tow pahali chij this hota hai aur dusri chij ek array hota hai, bind ek aur function deta hai return kar ke jisko aap baad mein chala sakte hoo With the bind() method, an object can borrow a method from another object.

                               > const obj = {name: "sarvesh"}
                                function abcd(){
                                        console.log(this);
                                }
                                abcd.call(obj)

                               > const obj = {name: "sarvesh}
                                function abcd(a,b,c){
                                        console.log(this,a,b,c);
                                }
                                abcd.apply(obj,[1,2,3])

                               > const obj = {name: "sarvesh"}
                                function abcd(){
                                        console.log(this);
                                }
                                const baadmechalanekeliyefunction = abcd.bind(obj);
                                baadmechalanekeliyefunction();

* ek function jo ki this ka upyog kar raha ho and new ke dwaare naye-naye object bana kar deta ho aise function ko constructor function kahate hai.

                        function abcd(){
                                this.username = "sarvesh";
                        }
                        var ans = new abcd();

* Prototypal Inheritance :- The linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class.

                    function makeHuman(name, age){
                        this.name = name;
                        this.age = age;
                    }
                    makeHuman.prototype.printMyName = function(){
                        console.log(this.name);
                    }
                    const human1 = new makeHuman("sarvesh", 21);
                    const human2 = new makeHuman("chhote", 20);

Closures :- aaisa koi bhi function jo kisi aur function ko return kar de ussay closure kahate hai, ek function jo return kare dusra function aur use kare parent function ka koi variable.

                        function abcd(){
                                var a = 12;
                                return function(){
                                        console.log(a)
                                }
                        }
                        var ans = abcd();
                        ans();

event delegation :- jab ek event listener se kai saare different element ke events ko handle kar sake, event listener ko parent par lagao and unki id, class ya fir tag ke basis par differentiate kar ke different task karao.

High-Order Functions :- aisa koi function jo ek function ko parameter mein accept karle and/or, ek function ko return karde.

                        function abcd(param){

                        }
                        abcd(function(){});

                        var arr = [1,2,3,4,5,6];
                        arr.forEach(function(){})

Error Handling (try...catch blocks) :- error handle karne mein use aata hai iska

Custom Events :- khud se events ko create kar sako, 

                const yourevent = new Event("chaah");
                document.querySelector("button")
                .addEventListner("chaah", function(){
                        alert("event occur");
                })
                document.querySelector("button").dispatchEvent(yourevent);

* how to make event 
                        make event
                        attach event to some dom element
                        dispatch that event from that dom element in which you attached the event

