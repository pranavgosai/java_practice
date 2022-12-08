let value = "pranav";
console.log(value[5]);

console.log(value.length);
console.log(value[value.length-3])
how to convert number to string
let age =29;
age = String(age);
console.log( typeof age);

let fruits = ["apple", "mango" ,"grapes", "banana"];

for(let i=0; i < fruits.length; i++){
    console.log(fruits[i].toUpperCase());
}

const myarray =["velue1", "velue2", "velue3","velue4"];
let [myvar1 , myvar2, ...mynewarray] = myarray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(mynewarray);


const key = "Number"
const person = {name:"pranav" , age:"23","person hobbies":["sex" ,"shomking","weed",] };
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(["person hobbies"].hobbies);
person.gender ="male";
console.log(person);
person.gmail ="pranavgosai01@gmai.com"
console.log(person.gmail);
console [key] ="7016620801";
console.log(person);


const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj = {};

obj[key1]= value1;
obj[key2] = value2;
console.log(obj);

const arry1 = [1,2,3];
const arry2 = [4,5,6];
const newarry = [...arry1,...arry2];
console.log(newarry);

const band ={
    bandname: "pranav",
    fusong:"gand",
    year:"1999"
};

let {bandname,fusong, ...restprops} = band;
console.log(bandname);
console.log(restprops);

const users = [
    {userid: 1, firstname: `pranav`, gender: `male`},
    {userid: 2, firstname: `bhuro`, gender: `male`},
    {userid: 3, firstname: `chota`, gender: `male`},
]

const [{firstname:p}, ,{gender:a} ] = users;
console.log(p);
console.log(a);


function weedislove (){
    console.log("weed is love");
}

weedislove();
weedislove();
weedislove();
weedislove();
weedislove();

function sum (num1 ,num2){
    return num1 + num2 ;
}

const returnvelue = sum (10,9);
console.log(returnvelue);

function even (number){
   return number % 2 === 0;
}
console.log(even(5));

function firstchar(anystring){
    return anystring[1];
}
console.log(firstchar("abc"));

function findtarget(array , target){
    for(let i=0; i<array.length; i++){
        if(array[i]===target){
        return i;
    }
    }
}
return -1;

const myarray = [1,2,3,4]
const ans = findtarget(myarray , 2);
console.log(ans);

const weed =()=> {
    console.log("weed is love");
}
weed();
weed();
weed();
weed();


const sex =()=> {
    console.log("sex is need");
}
sex();


const sumnumbers=(num1,num2,num3)=>{
    return num1+num2+num3;
}
const ans =sumnumbers(2,3,5);
console.log(ans)


function weed (){
    console.log("weed is love");
}
 weed();

 const weed=() =>{
    console.log("weed is love");
 }
 weed();

const sum=(num1 , num2 , num3)=>{
    return num1+num2+num3 ;
}
const ans = sum(1,2,2);
console.log(ans);


function myfunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);

}

myfunc(2,3,4,5,6,7);

function addall(...Numbers){
    let total = 0;
    for(let number of Numbers){
        total = total + Number;
    }
    return total;
}

const ans = addall(1,1,1,1,1);
console.log(ans);


const person = {
    firstname:"pranav",
    gender:"male",
    age:"23",
}

function printdetails({firstname,gender,age}){
    console.log(firstname);
    console.log(gender);
    console.log(age);
}

printdetails(person);

const Numbers =[1,2,3,4];

function multiplyby2(number , index){
    console.log("index is" , index);
    console.log(number*2);
}

// for(let i=0; i<Numbers.length; i++){
//     // console.log(i);
//     multiplyby2(Numbers[i],i);
// }

Numbers.forEach(multiplyby2);


foreach......

Numbers.forEach(function(Number){
    console.log(Number*3);
})


const users = [
    {firstname:"pranav"},
    {firstname:"jayu"},
    {firstname:"bhuro"},
    {firstname:"pranav"}

]

// users.forEach(function(user){
//     console.log(user.firstname);
// })

users.forEach()

const Numbers = [1,2,3,4]
const snumber = Numbers.map(function(Number){
    return Number*Number;
})
console.log(snumber);


const numbers = [2,4,6,8];
const snumbers = numbers.map (function(number){
    return number*number;
})

console.log(snumbers);



const users = [
    {firstname:"pranav"},
    {firstname:"jayu"},
    {firstname:"bhuro"},
    {firstname:"pranav"}

]


// const firstname = users.map( function (users){
//     return users.firstname;
// })
// console.log(firstname)


const firstname = users.map(function(users){
    return users.firstname;
})

console.log(firstname);

const users = [
    {firstname: "pranav"},
    {firstname: "pranav"},
    {firstname: "pranav"},
    {firstname: "pranav"},
]

const firstname = users.map(function(user){
    return user.firstname;
})

console.log(firstname);


map.......
 
const users = [
    {firstname:"sex " ,age:"23"},
    {firstname:"no love",age:"23"},
    {firstname:"weed",age:"23"},

]

const firstname =users.map(function(users){
    console.log(users.firstname);
    console.log(users.age);
})


/////  filter method

document.getElementById("myh1").innerHTML = "pranav";
document.getElementById("myp").innerHTML = "pranav";
