"use strict";
function myFilter(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const randomNumArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 200) - 100);
const isPositive = (num) => num > 0;
const isPrime = (num) => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
const isOdd = (num) => num % 2 === 1;
const oddArray = myFilter(randomNumArray, isOdd);
const primeArray = myFilter(randomNumArray, isPrime);
const positiveArray = myFilter(randomNumArray, isPositive);
console.log(`
Original Array: ${randomNumArray}
==================== Filtered Arrays ====================
Odd Array: ${oddArray}
Prime Array: ${primeArray}
Positive Array: ${positiveArray}`);
