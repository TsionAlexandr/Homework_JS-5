// // Задача 1.

let arr1 = [1,2,3,5,8,9,10];

for (item in arr1) {  
    item % 2 == 0 ?  x = false : x = true; 
}

let mapRes = arr1.map(function (item) {
    return {
        digit: item,
        odd: x    
    }
    
});
console.log (mapRes);




// // Задача 2.


let arr = [12, 4, 50, 1, 0, 18, 40];

let someRes = arr.some(function (val) {
    return  val !== 0;
});

console.log(someRes);





// // Задача 3.

let letterArr = ['yes', 'hello', 'no', 'easycode', 'what'];

let someRes = letterArr.some(function (val) {
    return  val.length === 3;
});

console.log(someRes);



// // Задача 4.

let letterArr = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]



function objects(a, b) {
    return a.index - b.index;
}

function getString(letterArr) {
    
    let newArr = letterArr.sort(objects);
    
    return newArr.reduce(function (str, currObj) {
        str += currObj.char;
        return str;
    }, "");
}


let str = getString(letterArr);
console.log(str);