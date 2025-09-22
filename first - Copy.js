/* practice set-1
 const profile={
 username:"bhavani",
 isfollow:false,
 followers:567,
 bio:"thus is a web development hey and i an learning web development"
 };*/
/* practice set-2 q1
 let num=prompt("enter a number");
 if(num%5===0)
 {
     console.log("it is a multiple of 5");
 }
 else{
     console.log("it is not a multiple of 5");
 }
 q2
 let marks=prompt("enter your marks");
  if(marks>=90 && marks<=100){
//     console.log("you got A grade");
 }
 else if(marks>=70 && marks<=89){
//     console.log("you got B grade");
 }
else if(marks>=60 && marks<=69){
//     console.log("you got C grade");
 }
 else if(marks>=50 && marks<=59){
//     console.log("you got D grade");
 }
 else{
//     console.log("sorry!your fail");
 }*/
/*practice-3 q1

 for(let num=0;num<=100;num++){
     if(num%2===0){
         console.log("even number=",num);
     }
 }
//  q2
let toguess=57;
 let guess=prompt("guess the number");
while(toguess!=guess){ 
    if(guess<toguess){
    guess=prompt("your are close.try again!");
    
 }
 else{
      guess=prompt("your are far.try again!");

 }
}
console.log("there you are.congractulations you win!");*/
/* strings practice
let username=prompt("enter your full name");
console.log(`@${username}${username.length}`);*/
/*practice arrays q1
let marks=[85,97,44,37,76,60];
let sum=0;
for(let i=0;i<marks.length;i++){
    sum+=marks[i]
}
let avearage=sum/marks.length;
console.log("avearage of numbers:",avearage);*/
/* q2
let items=[250,645,300,900,50];
let i=0;
for(let val of items){
   let  offer=val/10;
    items[i]=items[i]-offer;
    console.log("items for 10% off",items[i]);
    i++;
}*/
/* q3 
let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
console.log(companies.shift(0));
   console.log(companies);
  console.log(companies.splice(2,1,"ola"));
   console.log(companies);
   console.log(companies.push("amazon"));
   console.log(companies);*/
   /*functions

   let str="apna college";
    for (let char of str){
       console.log(char);
    }*/
  /* let arr=[1,2,3,4,5];
   arr.forEach((val)=>{
    console.log(val*val);
   });*/
   
   /*
   let marks=[34,56,78,89,90,95];
   let abovemrks=marks.filter((val)=>{
    return val>=90;
   });
   console.log(abovemrks);*/
   /*let n=prompt("enter a number:");
   let nums=[];
   for(let i=1;i<=n;i++){
    nums[i-1]=i;
    console.log(nums[i-1]);
   }
   let sum=nums.reduce((f,s)=>{
    return f+s;
   });
   console.log("sum=",sum);
   let mul=nums.reduce((f,s)=>{
    return f*s;
   });
   console.log("mul=",mul);
*/
/*dom1
 let heads=document.querySelector("h2");
 heads.innerText=heads.innerText +" from apna college students";
let boxes=document.querySelectorAll(".box");

for(let i of boxes){
    i.innerText="apna college";
}*/

/*my practice
 let arr=[2,5,6,7,8,9];
 let i=0;
 for(let ar of arr){
    console.log(`${i}=${ar}`);
     i+=1;
 }
 let h=document.querySelectorAll("h1");
 let j=0;
 for(let he of h){
 h[j].innerText=h.innerText="abcdef";
 j++;
 }
 let h=document.querySelectorAll(".h");
 for(let he of h){
    he.innerText="abcdef";
 }
let id=document.querySelector("p");
console.log(id);
 id.before("go to");*/
 /*body 2 q2
 let btn=document.createElement("button");
 let body=document.querySelector("body");
 btn.innerText="clickme!";
 btn.style.backgroundColor="red";
  btn.style.color="white";
  body.append(btn);

  q3
let para=document.querySelector(".cls");
 para.getAttribute("class");
 para.setAttribute("class","newcls");
 para.classList.add("newcls");*/
/*let btn=document.querySelector("button");
let currMode="light";
btn.addEventListener("click",()=>{
    if (currMode==="light"){
        currMode="dark"
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currMode="light"
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currMode);
});*/

/*project*/
let rock=document.querySelector("#img1");
let paper=document.querySelector("#img2");
let scissor=document.querySelector("#img3");
rock.addEventListener("click",()=>{
console.log("r clicked");
});
paper.addEventListener("click",()=>{
});
scissor.addEventListener("click",()=>{
console.log(" s clicked");
});
let user=0;
let comp=0;