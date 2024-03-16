//search technique in javascript
// 1. Linear Search
// 2. Binary Search
// 3. Jump Search
// 4. Interpolation Search
// 5. Exponential Search

const { time } = require("console");


// function to linearly search an array
function linearSearch(arr, x){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        if(arr[i] === x){
            return i;
        }
    }
    return -1;
}

// function to binary search an array

function binarySearch(arr, x){
    let start = 0, end = arr.length - 1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === x){
            return mid;
        }else if(arr[mid] < x){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return -1;
}
// function to jump search an array
function jumpSearch(arr, x){
    let len = arr.length;
    let step = Math.floor(Math.sqrt(len));
    let prev = 0;
    while(arr[Math.min(step, len)-1] < x){
        prev = step;
        step += Math.floor(Math.sqrt(len));
        if(prev >= len){
            return -1;
        }
    }
    while(arr[prev] < x){
        prev++;
        if(prev === Math.min(step, len)){
            return -1;
        }
    }
    if(arr[prev] === x){
        return prev;
    }
    return -1;
}

// function to interpolation search an array

function interpolationSearch(arr, x){
    let start = 0, end = arr.length - 1;
    while(start <= end && x >= arr[start] && x <= arr[end]){
        let pos = start + Math.floor(((end-start) / (arr[end]-arr[start])) * (x - arr[start]));
        if(arr[pos] === x){
            return pos;
        }
        if(arr[pos] < x){
            start = pos + 1;
        }else{
            end = pos - 1;
        }
    }
    return -1;
}   

// function to exponential search an array
function exponentialSearch(arr, x){
    let len = arr.length;
    if(arr[0] === x){
        return 0;
    }
    let i = 1;
    while(i < len && arr[i] <= x){
        i = i*2;
    }
    return binarySearch(arr, x, i/2, Math.min(i, len));
}


//cdoe to test the search method with the time take for 1000 elements
let arr = [1, 3, 5, 7, 8, 9];   
let x = 5;
//log time taken to search
console.time('linearSearch');  
let result = linearSearch(arr, x);
console.timeEnd('linearSearch');
console.log(result);
//log time taken to search
console.time('binarySearch');
let result1 = binarySearch(arr, x);
console.timeEnd('binarySearch');

//log time taken to search
console.time('jumpSearch');
let result2 = jumpSearch(arr, x);
console.timeEnd('jumpSearch');

//log time taken to search
console.time('interpolationSearch');
let result3 = interpolationSearch(arr, x);
console.timeEnd('interpolationSearch');

//log time taken to search
console.time('exponentialSearch');
let result4 = exponentialSearch(arr, x);
console.timeEnd('exponentialSearch');
console.log(result4);
//output
//linearSearch: 0.046ms
//binarySearch: 0.029ms
//jumpSearch: 0.029ms
//interpolationSearch: 0.029ms
//exponentialSearch: 0.029ms


