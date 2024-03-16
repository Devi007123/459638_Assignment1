//sorting techniques in javav  script
// 1. Bubble sort
// 2. Selection sort
// 3. Insertion sort
// 4. Merge sort

// function  to bubble sort an array
function bubbleSort(arr){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// function to selection sort an array
function selectionSort(arr){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        let min = i;
        for(let j = i+1; j < len; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min !== i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

// function to insertion sort an array

function insertionSort(arr){
    let len = arr.length;
    for(let i = 1; i < len; i++){
        let key = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = key;
    }
    return arr;
}

// function to merge sort an array
function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

//test merge function and console.log the result
function merge(left, right){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

//test the sorting functions

let arr = [3, 5, 2, 1, 4, 6, 7, 8, 9, 10];
console.log(bubbleSort(arr));
console.log(selectionSort(arr));
console.log(insertionSort(arr));

let arr2 = [3, 5, 2, 1, 4, 6, 7, 8, 9, 10];
console.log(mergeSort(arr2));




