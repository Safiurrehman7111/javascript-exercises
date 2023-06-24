//Project No 16
/*More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.*/

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
