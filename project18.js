// Project No 19
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the arra(y to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
let places = ["Istanbul","Las Vegas","Makkah","Geneva","Jaffina"];
console.log(places); //Original Array
console.log(places.sort()); //print in alphabetical order
console.log(places);  //still in original position
console.log(places.reverse()); //print in reverse of the order
console.log(places); //still in original position
places.reverse(); //reversing ther array order
console.log(places); //printing modified array
places.reverse(); //reversing array order again 
console.log(places); //printing array
places.sort(); // sorting array in alphabetical order 
console.log(places); // printing array
places.reverse(); // revering the array order
console.log(places); // printing original array