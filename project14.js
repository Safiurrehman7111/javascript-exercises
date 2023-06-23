/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner*/

let people = ["Faizan", "Wasay","Subhan"];
let message = "You are invited for tomorrow dinner at 9 pm";
let i =0;
while(i< people.length){
    console.log("Dear " + people[i] + ",  " + message);
    i++;
}