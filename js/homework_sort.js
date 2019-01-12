// // Задача 1.

let arr = [[14, 45],  [1],  ['a', 'c', 'd'] ] 

arr.sort (function(a, b) {
    return a.length - b.length;
});

console.log(arr);


// // Задача 2.

let newArr = [
    {cpu: 'intel', info: {cores: 2, сache: 3}},
    {cpu: 'intel', info: {cores: 4, сache: 4}},
    {cpu: 'amd', info: {cores: 1, сache: 1}},
    {cpu: 'intel', info: {cores: 3, сache: 2}},
    {cpu: 'amd', info: {cores: 4, сache: 2}}

]

newArr.sort (function (prew, next) {
    return prew.info.cores - next.info.cores;
});

console.log(newArr);





