// Project No 17
/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
*/

let people = ["Faizan", "Wasay","Subhan"];
let message = "You are invited for tomorrow dinner at 9 pm";
console.log("The Person who is unable to come  is : " + people[2]);
people[2] = "Roohan";
console.log("I have found a bigger dinner table!!");
people.unshift("Rayan");
people.splice(2,0,"Nafay");
people.push("Sarmad");
let i = 0
while(i< people.length){
    console.log("Dear " + people[i] + ",  " + message);
    i++;
}
console.log("I can invite only two people for dinner.");
let a =0;
while(a<4){
   let temp = people.pop();
   console.log( "Dear " + temp  + ",  I am really sorry for not invitng you");
    a++;
}
console.log(people);
let b =0;
while(b<people.length){
    console.log( "Dear " + people[b] + ", You are still invited");
    b++;
}
people.pop();
people.pop();
