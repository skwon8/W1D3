// bubbleSort, the worst (sane) sorting algorithm!
// not at all efficient, but it's easy to understand
// start from the bottom, compare each item against its neighbor,
// and swap them if they need to be swapped

// Basic one
function bubbleSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var x = 0; x < arr.length - i; x++) {
        if (arr[x] > arr[x + 1]) {
            var temp = arr[x]
            arr[x] = arr[x + 1]
            arr[x + 1] = temp
            }
        }
    }
}

// Little more advanced one
function bubbleSort2(arr) {

    let ops = 0;

    for(var i = 0; i < arr.length; i++) {
        ops++;
        let swapped = false;
        for(var x = 0; x < arr.length - i; x++) {
            ops++;
        if (arr[x] > arr[x + 1]) {
            ops++;
            var temp = arr[x]
            arr[x] = arr[x + 1]
            arr[x + 1] = temp;
            let swapped = true;
            }
        }
        if (swapped == false) {
            console.log(ops);
            return undefined;
        }
    }
}

let test_a = [8, 1, 4, 5, 9, 2, 7, 6, 3];
bubbleSort2(test_a);
console.log(test_a); 

let test_b = [1, 3, 2, 3, 6, 3, 3, 3, 3, 3, 5, 9, 3];
bubbleSort2(test_b);
console.log(test_b); 

let test_c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
bubbleSort2(test_c);
console.log(test_c); 