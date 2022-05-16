const numbers = [0,1,2,3,4,5,6,7,8,9]
numbers.map(n => n*n) // Time complexity: O(n)

numbers.map(n => n*n)
       .filter(n => n%2 === 0)
       .reduce((acc, n) => acc + n) // Time complexity: O(n)