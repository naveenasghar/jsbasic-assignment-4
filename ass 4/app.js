// 1. **Map Transformation:**
// - Q: Given an array of integers, use the `map` method to square each
//  element and return a new array with the squared values.
// Original array
// const originalArray = [1, 2, 3, 4, 5];
// const squaredArray = originalArray.map(element => element * element);
// console.log(squaredArray);

// 2. **Filter and Map Combination:**
// - Q: Take an array of strings, filter out the ones with 
// a length less than 5, and then capitalize the remaining strings using the `map` method.

// const originalArray1 = ["apple", "banana", "orange", "kiwi", "grape"];
// const filteredArray = originalArray1.filter(str => str.length >= 5);
// const capitalizedArray = filteredArray.map(str => str.toUpperCase());
// console.log(capitalizedArray);
 

// 3. **Sorting Objects:**
// - Q: Given an array of objects with a 'price' property, use the `sort` method 
// to arrange them in descending order based on their prices.

// Original array of objects with 'price' property
// const arrayOfObjects = [
//     { product: 'Laptop', price: 1200 },
//     { product: 'Smartphone', price: 800 },
//     { product: 'Tablet', price: 500 },
//     { product: 'Headphones', price: 100 },
//   ];
//   const sortedArray = arrayOfObjects.sort((a, b) => b.price - a.price);
//   console.log(sortedArray);

//   4. **Reduce for Aggregation:**
// - Q: Use the `reduce` method to find the total sum of
//  all even numbers in an array of integers.

// const arrayOfIntegers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sumOfEvenNumbers = arrayOfIntegers.reduce((accumulator, currentNumber) => {
//   if (currentNumber % 2 === 0) {
//     return accumulator + currentNumber;
//   } else {
//     return accumulator;
//   }
// }, 0);
// console.log(sumOfEvenNumbers);



// 5. **Find and Modify:**
// - Q: Given an array of objects with 'id' properties, use the `find`
//  property to 'completed'.
// Original array of objects with 'id' and 'status' properties
// const arrayOfObjects = [
//     { id: 1, status: 'pending' },
//     { id: 2, status: 'in progress' },
//     { id: 3, status: 'pending' },
//     { id: 4, status: 'not started' },
//   ];
//   const targetId = 2;
//   const targetObject = arrayOfObjects.find(obj => obj.id === targetId);
//   if (targetObject) {
//     targetObject.status = 'completed';
//     console.log(arrayOfObjects);
//   } else {
//     console.log(`Object with id ${targetId} not found.`);
//   }
  
// 6. **Chaining Methods:**
// - Q: Create a chain of array methods to find the average of all positive numbers in an array of mixed
//  integers and return the result rounded to two decimal places.
  
// const mixedArray = [3, -1, 7, -2, 8, -5, 10, -4];
// const averageOfPositiveNumbers = mixedArray
//   .filter(number => number > 0) 
//   .reduce((sum, currentNumber, index, array) => {
//     sum += currentNumber;
//     if (index === array.length - 1) {
//       return sum / array.length;
//     } else {
//       return sum;
//     }
//   }, 0) 
//   .toFixed(2);
// console.log(averageOfPositiveNumbers);

// 7. **Conditional Filtering:**
// - Q: Implement a function that takes an array of objects with 'age' properties and returns an array of those who are
//  adults (age 18 and above) using the `filter` method.
// Function to filter adults from an array of objects
// function filterAdults(peopleArray) {
//     return peopleArray.filter(person => person.age >= 18);
//   }
//   const peopleArray = [
//     { name: 'alina', age: 25 },
//     { name: 'elsa', age: 17 },
//     { name: 'Charlie', age: 30 },
//     { name: 'anna', age: 16 },
//   ];
//   const adultsArray = filterAdults(peopleArray);
//   console.log(adultsArray);

// 8. **Advanced Sorting:**
// - Q: Sort an array of strings based on their lengths in ascending order. If two strings have the
//  same length, maintain their relative order in the sorted array.
// Original array of strings
// const arrayOfStrings = ["apple", "banana", "kiwi", "orange", "grape"];
// const sortedArray = arrayOfStrings.sort((a, b) => {

//   const lengthComparison = a.length - b.length;
//   if (lengthComparison === 0) {
//     return arrayOfStrings.indexOf(a) - arrayOfStrings.indexOf(b);
//   }
//   return lengthComparison;
// });
// console.log(sortedArray);

  
// 9. **Nested Array Operations:**
// - Q: Given an array of arrays containing numbers, use a combination of
//  array methods to flatten the // structure and then calculate the sum of all the numbers.
// Original array of arrays containing numbers
// const arrayOfArrays = [[1, 2, 3], [4, 5], [6, 7, 8]];
// const sumOfAllNumbers = arrayOfArrays
//   .flat() 
//   .reduce((sum, number) => sum + number, 0);
// console.log(sumOfAllNumbers);


// 13. **Sort Method:**
// - Q: Discuss the default behavior of the `sort` method for strings and numbers. How would you use a custom comparison function
//  to sort an array of objects by a specific property?
// Original array of objects with 'name' property
// const arrayOfObjects = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' },
//   ];
  
//   // Custom comparison function to sort by 'name'
//   const customCompare = (a, b) => a.name.localeCompare(b.name);
  
//   // Sorting the array using the custom comparison function
//   const sortedArray = arrayOfObjects.sort(customCompare);
  
//   // Output the sorted array
//   console.log(sortedArray);

  
// 14. **Reduce Method:**
// - Q: Describe the purpose of the `reduce` method and provide an example where you use 
// it to compute a single value from an array of numbers.
// Original array of numbers
// const numbersArray = [1, 2, 3, 4, 5];
// const sum = numbersArray.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
// console.log(sum);

// 15. **Find Method:**
// - Q: How does the `find` method differ from `filter`? Give an example 
// of a scenario where using `find` is more appropriate than `filter`.
// Original array of student objects
// const studentsArray = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' },
//   ];
//   const studentWithId2 = studentsArray.find(student => student.id === 2);
//   console.log(studentWithId2);

//   16. **Combining Methods:**
// - Q: Create a chain of array methods (`map`, `filter`, `reduce`, etc.) to transform 
// an array of strings into a single concatenated string with a specific condition.
  // Original array of strings
// const arrayOfStrings = ["apple", "banana", "kiwi", "orange", "grape"];
// const resultString = arrayOfStrings
//   .filter(str => str.length > 3) 
//   .map(str => str.toUpperCase()) 
//   .reduce((concatenatedString, currentString) => concatenatedString + currentString, '');
// console.log(resultString);
// 17. **Callback Functions:
// - Q: Explain the concept of callback functions in the
//  context of array methods. Provide an example of using a callback function with the `map` method.

  // Original array of numbers
const numbersArray = [1, 2, 3, 4, 5];

// Callback function to square a number
const squareNumber = (number) => number * number;

// Using map with the callback function
const squaredArray = numbersArray.map(squareNumber);

// Output the new array with squared numbers
console.log(squaredArray);

