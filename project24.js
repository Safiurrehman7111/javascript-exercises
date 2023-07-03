//Project No 24
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than,
 greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/

let bike = "Honda";
console.log(bike== "Honda"); // test for equality with strings
console.log(bike !== "Honda"); // test for inequality with strings
let number = 56;
console.log(number== 56);// test for equality with numbers
console.log(number!==56);// test for unequality with numbers
console.log(number>= 21);// test for greater than & equal to with numbers
console.log(number<= 32);// test for lower than & equal to with numbers
console.log(number> 34);// test for greater than with numbers
console.log(number< 100);// test for lower than with numbers
console.log(number>20 && number<10);// test for "and" opertaions
console.log(number>40 || number<30);// test for "OR" operator
let array = [1,2,3,4,5,6,7];
console.log(array.includes(6));// Test whether an item is in a array
console.log(array.includes(0));// Test whether an item is not in a array

