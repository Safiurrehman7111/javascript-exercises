//Project No 15
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.*/

let people = ["Faizan", "Wasay","Subhan"];
let message = "You are invited for tomorrow dinner at 9 pm";
console.log("The Person who is unable to come  is : " + people[2]);
people[2] = "Roohan";
let i =0;
while(i< people.length){
    console.log("Dear " + people[i] + ",  " + message);
    i++;
}
