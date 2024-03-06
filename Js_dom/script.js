//selector
// document.getElementById -- Id 
// document.getElementsByClassName -- Class
// document.getElementsByTagName -- Tagname

// var btn = document.querySelector('button');

// var abcd = document.querySelector('#abcd');

// var classabcd = document.querySelector('.abcd');

//create two image in html and two h3 and select all of them this way give first image some id and second image a class, give first h3 a class and second h3 with id.

// var h3 = document.querySelector('.defg');
// var h3 = document.querySelector('#defg');

// var img = document.querySelector('.abcd');
// var img = document.querySelector('#abcd');

//agar bahut saare h3 hai aur unko select karte ho tow sirf pahla h3 select hoga, lakin agar cahate hai saare h3 select karna tow "document.queryselectorAll("h3")"
 
//kisi bhi element ko change karne ke liye pahela step hota hai select karna 
// var btn = document.querySelector('button');
// btn.textContent = "Starting in 3s"

// --> textContent
// var h1 = document.querySelector('h1');
// h1.textContent += "happy"

// --> innerHTML
// var h1 = document.querySelector("h1");
// h1.innerHTML += '<i>hello</i>'

// --> Manipulation Styles
// var h1 = document.querySelector("h1");
// h1.style.color = 'red';
// h1.style.fontFamily = 'gilroy';
// h1.style.fontSize = '16px';

// --> Manipulation Class
// var h1 = document.querySelector("h1");
// h1.classList.add('makeitred')
// h1.classList.remove('makeitred'); 

// --> Creating and Deleting Elements
// var h1 = document.createElement('h1');
// h1.textContent = "hey";
// h1.classList.add("makeitred");
// document.querySelector('body').appendChild(h1);
// document.querySelector('body').removeChild(h1);


// --> addEventListener()
// var btn = document.querySelector('button');
// btn.addEventListener('click', function(){
//     btn.textContent = 'starting';
//     btn.style.backgroundColor = 'red';
// })

// --> Event Object
// document.querySelector("body")
// .addEventListener("mousemove", function(dets){
//     console.log('dets');
// })