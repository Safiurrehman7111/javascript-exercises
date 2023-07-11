// Project No 27
/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien*/

var alien_color = "green";
if(alien_color == "green"){
    console.log("The Player just earned 5 points.");
 }else if (alien_color == "yellow"){
    console.log("The player just earned 10 points.");
 }else if(alien_color == "red"){
    console.log("The Player earned 15 Points")
 }  
alien_color = "yellow"; //updating color to yellow to run 2nd version of program

 if(alien_color == "green"){
    console.log("The Player just earned 5 points.");
 }else if (alien_color == "yellow"){
    console.log("The player just earned 10 points.");
 }else if(alien_color == "red"){
    console.log("The Player earned 15 Points")
 }  
 alien_color = "red"; // updating color to red to run 3rd version of program

 if(alien_color == "green"){
    console.log("The Player just earned 5 points.");
 }else if (alien_color == "yellow"){
    console.log("The player just earned 10 points.");
 }else if(alien_color == "red"){
    console.log("The Player earned 15 Points")
 }  


