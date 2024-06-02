var arr = [1, 2, 3, 4, 5];

// checking all prototype
// console.log(Array.prototype);

// Built-in forEach Array
// arr.forEach((items, index, self) => {
//     console.log(items, index, self);
// });

// Custom forEach Array

Array.prototype.myForEach = function(callback) {
    const arr = this;
    if(!callback) {
        throw Error("myForEach Error: function is not defined");
    }

    for(let i = 0; i<arr.length; i++) {
        // Callback function
        // arr[i] show the items, i show the index, arr show the self.
        callback(arr[i], i, arr);
    }
}

// Calling to myForEach Array Method or we called him polyfill

arr.myForEach((items, index, self) => {
    console.log(items, index, self);
});


// Break
console.log("*--------------------------*");
// 2nd Example

var arry2 = ["Apple", "Banana", "Mango"];
arry2.myForEach((items, index, self) => {
    console.log(items, index, self);
});