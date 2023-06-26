//Project No 19
/*Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner.*/
//Project No 17 Written as following:
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

//Project No 19


var message2 = "Number of people, I am inviting to dinner :" ;
console.log(message2  + people.length());