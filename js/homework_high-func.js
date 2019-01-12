// // Задача 1.


let a = ['my', 'name', 'is', 'Trinity']; 
let b = [10, 20, 30];
let c = ['abc', '123'];
let d = [{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}];
 
function firstFunc(arr, callback){
  return 'New value: ' + callback(arr)
};
 
function handler1(arr){
  return arr.reduce((prev, item) => prev += item.charAt(0).toUpperCase() + item.slice(1))
};
 
function handler2(arr){
  return arr.map(item => item * 10)
};

 
function handler3(arr){
  return arr.map(item => item.split("").reverse().join(""))
};

function handler4(arr) {
  return arr.map(item = item.name + 'is' + item.age)
 
};
 
console.log(firstFunc(a, handler1));
console.log(firstFunc(b, handler2));
console.log(firstFunc(c, handler3));
console.log(firstFunc(d, handler4));





// // Задача 2.


let arr = [4, 10, 24, 2, 9, 12];

function every(arr, callback) {
  
if (!Array.isArray(arr)) return false;

let res = true;

for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
        res = false;
        break;
    }
}

return res;
}

function moreThan5(number) {
  return number > 5;
}


console.log(every(arr, moreThan5));









