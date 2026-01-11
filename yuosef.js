// const chat = document.getElementById("aiChat");
// const body = document.getElementById("aiBody");
// const input = document.getElementById("aiInput");
// const typing = document.getElementById("typing");

// function toggleChat(){
//   chat.classList.toggle("active");
// }

// function addMsg(text, type){
//   const div = document.createElement("div");
//   div.className = `msg ${type}`;
//   div.innerText = text;
//   body.appendChild(div);
//   body.scrollTop = body.scrollHeight;
// }

// function sendAI(){
//   if(!input.value.trim()) return;

//   const text = input.value.toLowerCase();
//   addMsg(input.value, "user");
//   input.value = "";

//   typing.style.display = "block";

//   setTimeout(() => {
//     typing.style.display = "none";

//     if(text.includes("project")){
//       addMsg("🚀 Check out my Projects section to see my work.", "bot");
//     } 
//     else if(text.includes("about")){
//       addMsg("👨‍💻 I'm a Frontend Developer focused on UI & animations.", "bot");
//     }
//     else if(text.includes("contact")){
//       addMsg("📧 You can contact me from the Contact page.", "bot");
//     }
//     else if(text.includes("الو يا زلمتي")){
//       addMsg("🤖 هلا يا زلمتي بس اعذرني ما بقدر ارد عليك حاول مرى اخره", "bot");
//     }
//     else if(text.includes("يزم رد")){
//       addMsg("يزم حل عني انا فاضيلك", "bot");
//     }
//       else if(text.includes("اه")){
//       addMsg("هوا يسطحك روح انقلع يزم", "bot");
//     }
    
//     else if(text.includes("السلام عليكم")){
//         addMsg("وعليكم السلام كيف بقدر اساعدك", "bot");
//     }

//     else if(text.includes("شو هذا الموقع")){
//         addMsg("هذا من اصغر المواقع التي انشئها الفنان الاسطوره يوسف طعامنه ملك ال فرونت اند", "bot");
//     }

//     else if(text.includes("جد بلله")){
//         addMsg("شو بتسلكلي يعني 😤", "bot");
//     }

//     else if(text.includes("طيب شو احسن اشي سويتو")){
//       addMsg("🤖 هاض يا زلمتي https//:google.com", "bot");
//     } else{
//         addMsg("مش فاهم عليك" , "bot");
//     }
//   }, 900);
// }


// const menuBtn = document.getElementById("menuBtn");
// const menuList = document.getElementById("menuList");

// menuBtn.onclick = () => {
//   menuList.classList.toggle("active");
// };


/////////////////////////////////////////////////////تحدي ال if, else, switch///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let jop = "manager";
// let salary = 0;


// switch (salary) {
//     case 0;
//     salary
// }



// let hole = 3;
// let mony = 0;



//   if(hole === 0){
//     mony = 5000;
// } else if(hole === 1 || hole === 2){
//     mony = 3000;
// } 
// else if(hole === 3){
//     mony = 2000;
// } else {
//   mony = "unknown";
// }


// console.log(`my mony is ${mony}`);


// let jop = "it";
// let salary = 0;


// switch (jop) {
//     case "manager":
//         salary = 8000;
//         break;
//     case "support":
//       case "it":
//         salary = 6000;
//         break;
//     case "designer":
//         case "developer":
//         salary = 7000;
//         break;
//     default:
//         salary = 4000;
//         break;
// }


// console.log("my salary is " + salary);






////////////////////////////////////////////////////// تحدي ال اراي/  /////////////////////////////////////////////////////////////////////////////







// let zero = 0;

// let counter = 3;
// let my = ["ahmed", "mazero", "Elham", "osama", "gamal" , "ameer"]


// console.log(my.slice(zero, counter));


// console.log(my.slice(zero + 1, counter ));


// my.unshift("elzero"); 

// my.length = 1;

// console.log(my);
// my.unshift("ro".toUpperCase());
// my.length = 1;


// console.log(my);


////////////////////////////////////////////////////loop and for--start/////////////////////////////////////////////////////////////////////////////


// function run() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }


// function run(){
// let myfrind = [ 1, 2,  "ahmed", "mazero", "Elham", "osama", "gamal" , "ameer"];

// let onfrind = [];



//   for(let i = 0; i < myfrind.length; i++){
//     if(typeof myfrind[i] === "string"){
//       onfrind.push(myfrind[i]);
//     }  
//     }
//     console.log(onfrind);
//   }


////////////////////////////////////////////////////loop, Nested Loops /////////////////////////////////////////////////////////////////////////////


// function run(){

  
//   let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
  
//   let colors = ["red", "green", "black"];
  
//   let models = [2020, 2021]
//   mainloop:
//   for(let i =0; i < products.length; i++ ){
//     console.log(products[i]);
//  nestedloop:
//     for(let j = 0; j < colors.length; j++){
//       console.log(`-${colors[j]}`);
//     }
    
 
// }  
// }


  

////////////////////////////////////////////////////Loop - For Advanced  /////////////////////////////////////////////////////////////////////////////
// function run(){
// let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
// let i = 0;

// for(;;){
//   console.log(products[i]);
//   i++;
//   if(i === products.length) break;
// }

// }


//////////////////////////////////////////////////// Add Products To Page /////////////////////////////////////////////////////////////////////////////
// let products = ["keyboard", "mouse", "pen", "pad", "monitor"];

// let colors = ["red", "green", "black"];


// let showco = 4;

// document.write(`<h1>show ${showco} product</h1>`);


// for (let i = 0; i < showco; i++ ){
//   document.write(`<div>`);
//   document.write(`<h3>[${i + 1}]${products[i]}</h3>`);
//   for (let j = 0; j < colors.length; j++){
     

//   }
//   document.write(`<p>${colors.join(" | ")}</p>`);
//   document.write(`</div>`);
  
// }


//////////////////////////////////////////////////// loop while /////////////////////////////////////////////////////////////////////////////



// let products = ["keyboard", "mouse", "pen", "pad", "monitor"];

// let i = 0;

// while(index <products.length){
//   console.log(products[index]);
//   index++;
// }

// do {
//   console.log(i);
//   i++;

// } while (false);

//   console.log(i);



//////////////////////////////////////////////// Loop-Challenge (the-end) /////////////////////////////////////////////////////////////////////////////


// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];

// for(let i = 0; i < myAdmins.length; i++){
//   if(myAdmins[i] === "Stop"){
//     break;
//   }
//   console.log(myAdmins[i]);
//   document.write(`We Have ${myAdmins.length} Admins`);
// }


//////////////////////////////////////////////// function /////////////////////////////////////////////////////////////////////////////

// function run(name, age){
  
//   if(age < 20){
//     console.log("you are not allowed to drive");
//   } 
//    else{
//     console.log(`hello ms ${name} your age is ${age}`);

//   }

// }
// ane("yuosef", 80);
// ane("ahmed", 25);
// ane("omar", 17);


// function run(start,end, cansl){
//   for(let i = start; i <= end; i++){
//     if(i === cansl){
//       continue;
//     }
//     console.log(i);

//   } 
//   run(2000, 2011, 2009);
// }


//////////////////////////////////////////////// function default parameters /////////////////////////////////////////////////////////////////////////////

// function ssy (name, level ){
  
//   return `hello  ${name} your level is ${level}`;
// }

// console.log(ssy("yuosef", 20));



////////////////////////////////////////////////  Function Rest Parameters /////////////////////////////////////////////////////////////////////////////

// function calc(...nambers){
// let sum = 0;

// for(let i =0; i < nambers.length; i++){
//   sum += nambers[i];
// }

// return`the mark is ${sum}`
// }



// document.write(calc(50*45-1000-60-50-100-50-20-15-15-15-15-20), " jd");


////////////////////////////////////////////////  Function Ultimate Practice /////////////////////////////////////////////////////////////////////////////


// function shoinfo(nm = "Un", ag = "Un", rt = 0, show = "yes", ...sk){
//   document.write(`<div class="yy">`);

//   document.write(`<h2>welcome ${nm}</h2>`);
//   document.write(`<p>age: ${ag}</p>`);
//   document.write(`<p>mony is: $${rt}</p>`);
//   if(show === "yes"){
//     if(sk.length > 0){
//       // document.write(`skills: ${sk.join(" | ")}`);
//       document.write(`<p class="skills">skills: ${sk.join(" | ")}</p>`);

//       } else{
//            document.write(`<p>skills not found</p>`);
//       }
//   } 
//   if(show === "no"){
//     if(sk.length === 0){
//       document.write(`skills is: 0`);
//       } 
//    else{
//     document.write(`<p>skills is hidden</p>`);
//   }
// } 
// document.write(`<a class="btn" href="#">انشء فيزه</a>`);
//   document.write(`</din>`);

// }

// shoinfo("yuosef", 14, 50, "yes" ,"css", "html", "js", "php", "sql", "java", "c#");
// function showInfo() {
//   let name = document.getElementById("name").value;
//   let age = document.getElementById("age").value;
//   let skills = document.getElementById("skills").value;
//   let mony = document.getElementById("mony").value;

//   document.getElementById("result").innerHTML = `
//     <div class="yy">
//       <h2>Welcome ${name}</h2>
//       <p>Age: ${age}</p>
//       <p>mony: ${mony}</p>
//       <p class="skills">Skills: ${skills}</p>
//     </div>
//   `;
// }




////////////////////////////////////////////////  Function Random Arguments ///////////////////////////////////////////////////////////////////////////// 


// function shoinfo(nam, ag, sk){
// document.write(`<div>`)
// document.write(`<p>hello ${nam} your age is ${ag}</p>`)
// if(sk === true){
//   document.write(`<p>you are active</p>`)
// } else{
//   document.write(`<p>you are not active</p>`)
// }
// document.write(`</div>`)
// }


// shoinfo("osama", 38, false)


//////////////////////////////////////////////// Arrow Function ///////////////////////////////////////////////


// let print = function() {
//   return 10;
// };

// document.write(print());

// let print =() => 10;

// document.write(print());



const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("activ");
        observer.unobserve(entry.target); // يشتغل مرة وحدة
      }
    });
  },
  {
    threshold: 0.2
  }
);

reveals.forEach(el => observer.observe(el));











const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

